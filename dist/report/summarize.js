import { formatDistributionShare, formatNumber, formatPeakHour, } from "../format.js";
import { hasGroqSpreadOperator } from "./analyze-groq.js";
import { isMp4Url } from "./classify-url.js";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";
import { groupUrlsByKind } from "./group-urls-by-kind.js";
import { buildAtAGlance } from "./narrative.js";
import { hasImageFormatError, hasImageQualityError, hasImageWidthError, parseImageUrl, } from "./parse-image-url.js";
const KB = 1024;
const MB = KB * 1024;
const CRITICAL_BYTES_THRESHOLD = 100 * MB;
const CRITICAL_REQUESTS_THRESHOLD = 1_000;
const CRITICAL_SHARE_THRESHOLD = 0.25;
const CRITICAL_TOTAL_BYTES_THRESHOLD = 10 * MB;
const CRITICAL_TOTAL_REQUESTS_THRESHOLD = 100;
const CONCENTRATION_SHARE_THRESHOLD = 0.75;
const SPIKE_SHARE_THRESHOLD = 0.7;
const REASONABLE_AVG_IMAGE_BYTES = 400 * KB;
const STUDIO_NEGLIGIBLE_SHARE_THRESHOLD = 0.2;
const DISTRIBUTION_DOMINANCE_THRESHOLD = 0.5;
function pluralize(count, singular, plural = `${singular}s`) {
    return count === 1 ? singular : plural;
}
function formatCountLabel(count, singular, plural) {
    return `${formatNumber(count)} ${pluralize(count, singular, plural)}`;
}
function sumRows(rows) {
    return rows.reduce((totals, row) => {
        totals.requests += row.requests;
        totals.responseBytes += row.responseBytes;
        return totals;
    }, { requests: 0, responseBytes: 0 });
}
function isCriticalIssue(issue, view) {
    return (issue.responseBytes >= CRITICAL_BYTES_THRESHOLD ||
        issue.requests >= CRITICAL_REQUESTS_THRESHOLD ||
        (view.responseBytes >= CRITICAL_TOTAL_BYTES_THRESHOLD &&
            issue.responseBytes / view.responseBytes >= CRITICAL_SHARE_THRESHOLD) ||
        (view.requests >= CRITICAL_TOTAL_REQUESTS_THRESHOLD &&
            issue.requests / view.requests >= CRITICAL_SHARE_THRESHOLD));
}
function severityForIssue(issue, view) {
    return isCriticalIssue(issue, view) ? "critical" : "warning";
}
function pushProblem(target, problem) {
    target.push(problem);
}
function getImageRows(rows) {
    return groupUrlsByKind(rows).image.map((row) => ({
        row,
        parsed: parseImageUrl(row.label),
    }));
}
function analyzeImages(rows) {
    const imageRows = getImageRows(rows);
    const wideRows = imageRows.filter(({ parsed }) => hasImageWidthError(parsed.width));
    const unsafeFormatRows = imageRows.filter(({ parsed }) => hasImageFormatError(parsed.format));
    const qualityRows = imageRows.filter(({ parsed }) => hasImageQualityError(parsed.quality, parsed.isSvg));
    return {
        imageRows,
        wideRows,
        unsafeFormatRows,
        qualityRows,
        imageTotals: sumRows(imageRows.map(({ row }) => row)),
    };
}
function getQuerySpreadRows(rows) {
    return groupUrlsByKind(rows).query.filter((row) => {
        const query = extractGroqQuery(row.label);
        const params = query ? extractGroqParams(row.label) : null;
        return (query !== null && hasGroqSpreadOperator(query, params ?? undefined));
    });
}
function getMp4Rows(rows) {
    return groupUrlsByKind(rows).file.filter((row) => isMp4Url(row.label));
}
function dominantRankedRow(rows, metric) {
    const nonZero = rows.filter((row) => row[metric] > 0);
    if (nonZero.length <= 1)
        return null;
    const total = nonZero.reduce((sum, row) => sum + row[metric], 0);
    if (total <= 0)
        return null;
    let largest = nonZero[0];
    for (const row of nonZero.slice(1)) {
        if (row[metric] > largest[metric])
            largest = row;
    }
    return {
        label: largest.label,
        value: largest[metric],
        total,
        share: largest[metric] / total,
    };
}
function dominantCountRow(rows) {
    const nonZero = rows.filter((row) => row.count > 0);
    if (nonZero.length <= 1)
        return null;
    const total = nonZero.reduce((sum, row) => sum + row.count, 0);
    if (total <= 0)
        return null;
    let largest = nonZero[0];
    for (const row of nonZero.slice(1)) {
        if (row.count > largest.count)
            largest = row;
    }
    return {
        label: largest.label,
        count: largest.count,
        total,
        share: largest.count / total,
    };
}
function friendlyDomainLabel(domain) {
    const lower = domain.toLowerCase();
    if (lower.includes("cdn.sanity.io") || lower === "cdn")
        return "CDN";
    if (lower.includes("apicdn") || lower.includes("api.sanity.io")) {
        return "API CDN";
    }
    return domain;
}
function healthFromCounts(critical, warning) {
    if (critical > 0)
        return "red";
    if (warning > 0)
        return "yellow";
    return "green";
}
function buildDistribution(view) {
    const segments = [
        { label: "Images", bytes: view.byUrlKind.image.responseBytes, share: 0 },
        { label: "Queries", bytes: view.byUrlKind.query.responseBytes, share: 0 },
        { label: "Files", bytes: view.byUrlKind.file.responseBytes, share: 0 },
        { label: "Other", bytes: view.byUrlKind.other.responseBytes, share: 0 },
    ]
        .filter((segment) => segment.bytes > 0)
        .map((segment) => ({
        ...segment,
        share: view.responseBytes > 0 ? segment.bytes / view.responseBytes : 0,
    }));
    return {
        totalBytes: view.responseBytes,
        segments,
    };
}
function detectProblems(view, critical, warnings) {
    const querySpreadRows = getQuerySpreadRows(view.byUrl);
    if (querySpreadRows.length > 0) {
        const totals = sumRows(querySpreadRows);
        const severity = severityForIssue(totals, view);
        const problem = {
            id: "groq-spread",
            severity,
            summary: `${formatCountLabel(querySpreadRows.length, "query")} ${querySpreadRows.length === 1 ? "uses" : "use"} {...}`,
            suggestedFix: "Project only needed fields instead of using the {...} spread operator",
            requests: totals.requests,
            responseBytes: totals.responseBytes,
        };
        pushProblem(severity === "critical" ? critical : warnings, problem);
    }
    const mp4Rows = getMp4Rows(view.byUrl);
    if (mp4Rows.length > 0) {
        const totals = sumRows(mp4Rows);
        const severity = severityForIssue(totals, view);
        const problem = {
            id: "mp4-transfer",
            severity,
            summary: `${formatCountLabel(mp4Rows.length, "MP4 URL", "MP4 URLs")} served as progressive MP4`,
            suggestedFix: "Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
            requests: totals.requests,
            responseBytes: totals.responseBytes,
        };
        pushProblem(severity === "critical" ? critical : warnings, problem);
    }
    const images = analyzeImages(view.byUrl);
    if (images.wideRows.length > 0) {
        const totals = sumRows(images.wideRows.map(({ row }) => row));
        const severity = severityForIssue(totals, view);
        const problem = {
            id: "image-width",
            severity,
            summary: `${formatCountLabel(images.wideRows.length, "image")} exceed 2000px`,
            suggestedFix: "Cap CDN width requests at 2000px or below",
            requests: totals.requests,
            responseBytes: totals.responseBytes,
        };
        pushProblem(severity === "critical" ? critical : warnings, problem);
    }
    if (images.unsafeFormatRows.length > 0) {
        const totals = sumRows(images.unsafeFormatRows.map(({ row }) => row));
        const severity = severityForIssue(totals, view);
        const problem = {
            id: "image-format",
            severity,
            summary: `${formatCountLabel(images.unsafeFormatRows.length, "image")} missing format=auto`,
            suggestedFix: 'Use auto=format (or fm/format="auto") for CDN image URLs',
            requests: totals.requests,
            responseBytes: totals.responseBytes,
        };
        pushProblem(severity === "critical" ? critical : warnings, problem);
    }
    if (images.qualityRows.length > 0) {
        const totals = sumRows(images.qualityRows.map(({ row }) => row));
        const severity = severityForIssue(totals, view);
        const problem = {
            id: "image-quality",
            severity,
            summary: `${formatCountLabel(images.qualityRows.length, "image")} with quality above 87`,
            suggestedFix: "Keep image quality at 87 or below for raster assets",
            requests: totals.requests,
            responseBytes: totals.responseBytes,
        };
        pushProblem(severity === "critical" ? critical : warnings, problem);
    }
    const serverErrorCount = view.byStatus
        .filter(({ label }) => Number(label) >= 500)
        .reduce((sum, row) => sum + row.count, 0);
    const clientErrorCount = view.byStatus
        .filter(({ label }) => {
        const status = Number(label);
        return status >= 400 && status < 500;
    })
        .reduce((sum, row) => sum + row.count, 0);
    if (serverErrorCount > 0) {
        pushProblem(critical, {
            id: "status-5xx",
            severity: "critical",
            summary: `${formatCountLabel(serverErrorCount, "server error")}`,
            suggestedFix: "Investigate failing API/CDN handlers returning 5xx",
            requests: serverErrorCount,
        });
    }
    if (clientErrorCount > 0) {
        pushProblem(warnings, {
            id: "status-4xx",
            severity: "warning",
            summary: `${formatCountLabel(clientErrorCount, "client error")}`,
            suggestedFix: "Review missing assets and invalid client requests returning 4xx",
            requests: clientErrorCount,
        });
    }
    return {
        querySpreadRows,
        mp4Rows,
        images,
        serverErrorCount,
        clientErrorCount,
    };
}
function buildObservations(view) {
    const observations = [];
    const distribution = buildDistribution(view);
    const dominant = distribution.segments.reduce((largest, segment) => {
        if (!largest || segment.bytes > largest.bytes)
            return segment;
        return largest;
    }, null);
    if (dominant &&
        dominant.share >= DISTRIBUTION_DOMINANCE_THRESHOLD &&
        view.responseBytes > 0) {
        observations.push({
            summary: `${dominant.label} account for ${formatDistributionShare(dominant.share)} of bandwidth`,
        });
    }
    const domainDominant = dominantRankedRow(view.byDomain, "responseBytes");
    if (domainDominant &&
        domainDominant.share >= CONCENTRATION_SHARE_THRESHOLD) {
        observations.push({
            summary: `${friendlyDomainLabel(domainDominant.label)} serves ${formatDistributionShare(domainDominant.share)} of traffic`,
        });
    }
    const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
    if (hourDominant && hourDominant.share >= SPIKE_SHARE_THRESHOLD) {
        observations.push({
            summary: `Peak hour was ${formatPeakHour(hourDominant.label)}`,
        });
    }
    const histogramDominant = dominantCountRow(view.responseSizeHistogram);
    if (histogramDominant &&
        histogramDominant.share >= CONCENTRATION_SHARE_THRESHOLD) {
        observations.push({
            summary: `${formatDistributionShare(histogramDominant.share)} of responses are ${histogramDominant.label}`,
        });
    }
    return observations;
}
function buildHealthySignals(view, context) {
    const healthy = [];
    const { querySpreadRows, mp4Rows, images, serverErrorCount, clientErrorCount } = context;
    if (images.imageRows.length > 0 && images.unsafeFormatRows.length === 0) {
        healthy.push({ summary: "All images use auto=format" });
    }
    if (images.imageTotals.requests > 0 &&
        images.imageTotals.responseBytes / images.imageTotals.requests <
            REASONABLE_AVG_IMAGE_BYTES) {
        healthy.push({ summary: "Average image response size is reasonable" });
    }
    const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
    if (!hourDominant || hourDominant.share < SPIKE_SHARE_THRESHOLD) {
        healthy.push({ summary: "No suspicious bandwidth spikes detected" });
    }
    if (view.includesStudio &&
        view.responseBytes > 0 &&
        view.studio.responseBytes / view.responseBytes <
            STUDIO_NEGLIGIBLE_SHARE_THRESHOLD) {
        healthy.push({ summary: "Studio traffic is negligible" });
    }
    if (serverErrorCount === 0) {
        healthy.push({ summary: "No server errors detected" });
    }
    if (clientErrorCount === 0) {
        healthy.push({ summary: "No client errors detected" });
    }
    if (view.byUrlKind.query.requests > 0 && querySpreadRows.length === 0) {
        healthy.push({ summary: "No GROQ spread queries detected" });
    }
    if (images.imageRows.length > 0 && images.wideRows.length === 0) {
        healthy.push({ summary: "No oversized image widths detected" });
    }
    if (images.imageRows.length > 0 && images.qualityRows.length === 0) {
        healthy.push({ summary: "No high image quality settings detected" });
    }
    if (view.byUrlKind.file.requests > 0 && mp4Rows.length === 0) {
        healthy.push({ summary: "No progressive MP4 downloads detected" });
    }
    return healthy.slice(0, 8);
}
export function buildReportSummary(view) {
    const critical = [];
    const warnings = [];
    const detection = detectProblems(view, critical, warnings);
    const distribution = buildDistribution(view);
    const observations = buildObservations(view);
    const healthy = buildHealthySignals(view, detection);
    const partialSummary = {
        overallHealth: healthFromCounts(critical.length, warnings.length),
        critical,
        warnings,
        observations,
        healthy,
        atAGlance: [],
        distribution,
        topContributors: view.topContributors,
    };
    return {
        ...partialSummary,
        atAGlance: buildAtAGlance(view, partialSummary),
    };
}
export function summaryHeadline(summary) {
    const issueTotal = summary.critical.length + summary.warnings.length;
    if (issueTotal === 0)
        return "✅ No issues detected";
    return `🚨 ${formatNumber(issueTotal)} ${pluralize(issueTotal, "issue")} detected`;
}
//# sourceMappingURL=summarize.js.map
import { formatIsoDate } from "./format.js";
import { classifyUrl } from "./report/classify-url.js";
function topN(map, limit, sortBy = "responseBytes") {
    return Object.entries(map)
        .map(([label, value]) => ({ label, ...value }))
        .sort((a, b) => sortBy === "responseBytes"
        ? b.responseBytes - a.responseBytes
        : b.requests - a.requests)
        .slice(0, limit);
}
function sortDateRows(map) {
    return Object.entries(map)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([isoDate, value]) => ({
        label: formatIsoDate(isoDate),
        ...value,
    }));
}
function sortHourRows(map) {
    return Array.from({ length: 24 }, (_, hour) => ({
        label: `${hour.toString().padStart(2, "0")}:00`,
        ...(map[hour] ?? { requests: 0, responseBytes: 0 }),
    }));
}
function toCountRows(map) {
    return Object.entries(map)
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => Number(a.label) - Number(b.label));
}
function zeroTotals() {
    return { requests: 0, responseBytes: 0, requestBytes: 0 };
}
function zeroBreakdown() {
    return { requests: 0, responseBytes: 0 };
}
function emptyUrlKindBreakdown() {
    return {
        image: zeroBreakdown(),
        file: zeroBreakdown(),
        query: zeroBreakdown(),
        other: zeroBreakdown(),
    };
}
function urlKindTab(url) {
    const kind = classifyUrl(url);
    if (kind === "image")
        return "image";
    if (kind === "file" || kind === "video")
        return "file";
    if (kind === "query")
        return "query";
    return "other";
}
function updateTopContributor(current, label, breakdown) {
    if (!current || breakdown.responseBytes > current.responseBytes) {
        return { label, ...breakdown };
    }
    return current;
}
export function computeUrlKindStats(map) {
    const byUrlKind = emptyUrlKindBreakdown();
    let topContributors = {};
    for (const [label, breakdown] of Object.entries(map)) {
        const tab = urlKindTab(label);
        byUrlKind[tab].requests += breakdown.requests;
        byUrlKind[tab].responseBytes += breakdown.responseBytes;
        if (tab !== "other") {
            topContributors = {
                ...topContributors,
                [tab]: updateTopContributor(topContributors[tab], label, breakdown),
            };
        }
    }
    return { byUrlKind, topContributors };
}
function topReferer(map) {
    let top;
    for (const [label, breakdown] of Object.entries(map)) {
        top = updateTopContributor(top, label, breakdown);
    }
    return top;
}
function viewFromSummary(label, summary, prefix, topLimit) {
    const responseHistogram = Object.entries(summary.responseSizeHistogram).map(([bucketLabel, count]) => ({ label: bucketLabel, count }));
    const responseHistogramNonStudio = Object.entries(summary.responseSizeHistogramNonStudio).map(([bucketLabel, count]) => ({ label: bucketLabel, count }));
    const urlMap = prefix ? summary.byUrlNonStudio : summary.byUrl;
    const refererMap = prefix ? summary.byRefererNonStudio : summary.byReferer;
    const { byUrlKind, topContributors: urlTops } = computeUrlKindStats(urlMap);
    const refererTop = topReferer(refererMap);
    const byDomain = prefix
        ? topN(summary.byDomainNonStudio, topLimit)
        : topN(summary.byDomain, topLimit);
    const byEndpoint = prefix
        ? topN(summary.byEndpointNonStudio, topLimit)
        : topN(summary.byEndpoint, topLimit);
    const byDate = prefix ? sortDateRows(summary.byDateNonStudio) : sortDateRows(summary.byDate);
    const byHour = prefix ? sortHourRows(summary.byHourNonStudio) : sortHourRows(summary.byHour);
    const byUrl = topN(urlMap, topLimit);
    const byReferer = topN(refererMap, topLimit);
    const byUserAgent = prefix
        ? topN(summary.byUserAgentNonStudio, topLimit)
        : topN(summary.byUserAgent, topLimit);
    const byIp = prefix ? topN(summary.byIpNonStudio, topLimit) : topN(summary.byIp, topLimit);
    const byStatus = prefix
        ? toCountRows(summary.byStatusNonStudio)
        : toCountRows(summary.byStatus);
    return {
        label,
        requests: prefix ? summary.nonStudio.requests : summary.totalRequests,
        responseBytes: prefix ? summary.nonStudio.responseBytes : summary.totalResponseBytes,
        requestBytes: prefix ? summary.nonStudio.requestBytes : summary.totalRequestBytes,
        firstTimestamp: summary.firstTimestamp,
        lastTimestamp: summary.lastTimestamp,
        studio: prefix ? zeroTotals() : summary.studio,
        nonStudio: summary.nonStudio,
        byDomain,
        byEndpoint,
        byDate,
        byHour,
        byUrl,
        byReferer,
        byUserAgent,
        byIp,
        byStatus,
        responseSizeHistogram: prefix ? responseHistogramNonStudio : responseHistogram,
        byUrlKind,
        topContributors: {
            ...urlTops,
            referer: refererTop,
        },
        includesStudio: !prefix,
    };
}
export function buildReportData(summary, config, sourcePath) {
    return {
        title: config.title,
        sourcePath,
        generatedAt: new Date().toISOString(),
        config,
        all: viewFromSummary("All requests", summary, "", config.topN),
        billable: viewFromSummary("Billable requests", summary, "NonStudio", config.topN),
    };
}
//# sourceMappingURL=report-data.js.map
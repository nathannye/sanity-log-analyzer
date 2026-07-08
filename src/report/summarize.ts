import { formatBytes, formatNumber } from "../format.js";
import type { CountRow, RankedRow, ReportView } from "../types.js";
import { hasGroqSpreadOperator } from "./analyze-groq.js";
import { isMp4Url } from "./classify-url.js";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";
import { groupUrlsByKind } from "./group-urls-by-kind.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	parseImageUrl,
} from "./parse-image-url.js";

const KB = 1024;
const MB = KB * 1024;
const CRITICAL_BYTES_THRESHOLD = 100 * MB;
const CRITICAL_REQUESTS_THRESHOLD = 1_000;
const CRITICAL_SHARE_THRESHOLD = 0.25;
const CRITICAL_TOTAL_BYTES_THRESHOLD = 10 * MB;
const CRITICAL_TOTAL_REQUESTS_THRESHOLD = 100;
const PASS_SHARE_THRESHOLD = 0.75;
const CONCENTRATION_SHARE_THRESHOLD = 0.75;
const IMAGE_BANDWIDTH_SHARE_THRESHOLD = 0.5;
const TOP_OPPORTUNITY_LIMIT = 8;

export type HealthStatus = "green" | "yellow" | "red";
export type FindingSeverity = "critical" | "warning" | "passed";

export type FindingId =
	| "groq-spread"
	| "mp4-transfer"
	| "image-width"
	| "image-format"
	| "image-quality"
	| "image-bandwidth"
	| "status-5xx"
	| "status-4xx"
	| "response-size-concentration"
	| "hour-concentration"
	| "domain-concentration"
	| "endpoint-concentration";

export interface ReportFinding {
	id: FindingId;
	severity: FindingSeverity;
	title: string;
	summary: string;
	suggestedFix?: string;
	requests?: number;
	responseBytes?: number;
}

export interface ReportOpportunity {
	priority: "critical" | "warning";
	issue: string;
	impact: string;
	suggestedFix: string;
	responseBytes?: number;
	/** Only set when the bytes basis is explicitly measured from the issue rows. */
	estimatedSavingsBytes?: number;
}

export interface ReportSummary {
	overallHealth: HealthStatus;
	issueCounts: {
		critical: number;
		warning: number;
		passed: number;
	};
	findings: ReportFinding[];
	topOpportunities: ReportOpportunity[];
	/** Sum of opportunity estimatedSavingsBytes when any are present. */
	estimatedSavingsBytes?: number;
	signals: ReportFinding[];
}

interface IssueTotals {
	requests: number;
	responseBytes: number;
}

function pluralize(count: number, singular: string, plural = `${singular}s`): string {
	return count === 1 ? singular : plural;
}

function formatWholePercentage(value: number): string {
	return `${Math.round(value)}%`;
}

function formatCountLabel(
	count: number,
	singular: string,
	plural?: string,
): string {
	return `${formatNumber(count)} ${pluralize(count, singular, plural)}`;
}

function sumRows(rows: RankedRow[]): IssueTotals {
	return rows.reduce<IssueTotals>(
		(totals, row) => {
			totals.requests += row.requests;
			totals.responseBytes += row.responseBytes;
			return totals;
		},
		{ requests: 0, responseBytes: 0 },
	);
}

function isCriticalIssue(issue: IssueTotals, view: ReportView): boolean {
	return (
		issue.responseBytes >= CRITICAL_BYTES_THRESHOLD ||
		issue.requests >= CRITICAL_REQUESTS_THRESHOLD ||
		(view.responseBytes >= CRITICAL_TOTAL_BYTES_THRESHOLD &&
			issue.responseBytes / view.responseBytes >= CRITICAL_SHARE_THRESHOLD) ||
		(view.requests >= CRITICAL_TOTAL_REQUESTS_THRESHOLD &&
			issue.requests / view.requests >= CRITICAL_SHARE_THRESHOLD)
	);
}

function severityForIssue(
	issue: IssueTotals,
	view: ReportView,
): "critical" | "warning" {
	return isCriticalIssue(issue, view) ? "critical" : "warning";
}

function withRequestSuffix(rowCount: number, totals: IssueTotals): string {
	return totals.requests !== rowCount
		? ` across ${formatCountLabel(totals.requests, "request")}`
		: "";
}

function withBytesSuffix(totals: IssueTotals): string {
	return totals.responseBytes > 0 ? ` (${formatBytes(totals.responseBytes)})` : "";
}

function getImageRows(rows: RankedRow[]): Array<{
	row: RankedRow;
	parsed: ReturnType<typeof parseImageUrl>;
}> {
	return groupUrlsByKind(rows).image.map((row) => ({
		row,
		parsed: parseImageUrl(row.label),
	}));
}

function getQuerySpreadRows(rows: RankedRow[]): RankedRow[] {
	return groupUrlsByKind(rows).query.filter((row) => {
		const query = extractGroqQuery(row.label);
		const params = query ? extractGroqParams(row.label) : null;
		return (
			query !== null && hasGroqSpreadOperator(query, params ?? undefined)
		);
	});
}

function getMp4Rows(rows: RankedRow[]): RankedRow[] {
	return groupUrlsByKind(rows).file.filter((row) => isMp4Url(row.label));
}

function dominantCountRow(rows: CountRow[]):
	| { label: string; count: number; total: number; share: number }
	| null {
	const nonZero = rows.filter((row) => row.count > 0);
	if (nonZero.length <= 1) return null;

	const total = nonZero.reduce((sum, row) => sum + row.count, 0);
	if (total <= 0) return null;

	let largest = nonZero[0];
	for (const row of nonZero.slice(1)) {
		if (row.count > largest.count) largest = row;
	}

	return {
		label: largest.label,
		count: largest.count,
		total,
		share: largest.count / total,
	};
}

function dominantRankedRow(
	rows: RankedRow[],
	metric: "requests" | "responseBytes",
):
	| { label: string; value: number; total: number; share: number }
	| null {
	const nonZero = rows.filter((row) => row[metric] > 0);
	if (nonZero.length <= 1) return null;

	const total = nonZero.reduce((sum, row) => sum + row[metric], 0);
	if (total <= 0) return null;

	let largest = nonZero[0];
	for (const row of nonZero.slice(1)) {
		if (row[metric] > largest[metric]) largest = row;
	}

	return {
		label: largest.label,
		value: largest[metric],
		total,
		share: largest[metric] / total,
	};
}

function pushFinding(
	findings: ReportFinding[],
	finding: ReportFinding,
): void {
	findings.push(finding);
}

function toOpportunity(finding: ReportFinding): ReportOpportunity | null {
	if (finding.severity === "passed" || !finding.suggestedFix) return null;

	return {
		priority: finding.severity,
		issue: finding.title,
		impact: finding.summary,
		suggestedFix: finding.suggestedFix,
		responseBytes: finding.responseBytes,
	};
}

function healthFromCounts(critical: number, warning: number): HealthStatus {
	if (critical > 0) return "red";
	if (warning > 0) return "yellow";
	return "green";
}

export function buildReportSummary(view: ReportView): ReportSummary {
	const findings: ReportFinding[] = [];

	const querySpreadRows = getQuerySpreadRows(view.byUrl);
	if (querySpreadRows.length > 0) {
		const totals = sumRows(querySpreadRows);
		const severity = severityForIssue(totals, view);
		pushFinding(findings, {
			id: "groq-spread",
			severity,
			title: "GROQ spread-heavy queries",
			summary: `${formatBytes(totals.responseBytes)} served by ${formatCountLabel(querySpreadRows.length, "GROQ query URL")} using {...}${withRequestSuffix(querySpreadRows.length, totals)}`,
			suggestedFix:
				"Project only needed fields instead of using the {...} spread operator",
			requests: totals.requests,
			responseBytes: totals.responseBytes,
		});
	}

	const mp4Rows = getMp4Rows(view.byUrl);
	if (mp4Rows.length > 0) {
		const totals = sumRows(mp4Rows);
		const severity = severityForIssue(totals, view);
		pushFinding(findings, {
			id: "mp4-transfer",
			severity,
			title: "MP4 transfer concentration",
			summary: `${formatBytes(totals.responseBytes)} served as ${formatCountLabel(mp4Rows.length, "MP4 URL")} instead of HLS${withRequestSuffix(mp4Rows.length, totals)}`,
			suggestedFix:
				"Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
			requests: totals.requests,
			responseBytes: totals.responseBytes,
		});
	}

	const imageRows = getImageRows(view.byUrl);
	if (imageRows.length > 0) {
		const wideRows = imageRows.filter(({ parsed }) =>
			hasImageWidthError(parsed.width),
		);
		if (wideRows.length > 0) {
			const totals = sumRows(wideRows.map(({ row }) => row));
			const severity = severityForIssue(totals, view);
			pushFinding(findings, {
				id: "image-width",
				severity,
				title: "Oversized image requests",
				summary: `${formatCountLabel(wideRows.length, "image URL")} requested above 2000px${withRequestSuffix(wideRows.length, totals)}${withBytesSuffix(totals)}`,
				suggestedFix: "Cap CDN width requests at 2000px or below",
				requests: totals.requests,
				responseBytes: totals.responseBytes,
			});
		}

		const unsafeFormatRows = imageRows.filter(({ parsed }) =>
			hasImageFormatError(parsed.format),
		);
		if (unsafeFormatRows.length > 0) {
			const totals = sumRows(unsafeFormatRows.map(({ row }) => row));
			const severity = severityForIssue(totals, view);
			pushFinding(findings, {
				id: "image-format",
				severity,
				title: "Missing format=auto",
				summary: `${formatCountLabel(unsafeFormatRows.length, "image URL")} missing format=auto${withRequestSuffix(unsafeFormatRows.length, totals)}${withBytesSuffix(totals)}`,
				suggestedFix: 'Use auto=format (or fm/format="auto") for CDN image URLs',
				requests: totals.requests,
				responseBytes: totals.responseBytes,
			});
		}

		const qualityRows = imageRows.filter(({ parsed }) =>
			hasImageQualityError(parsed.quality, parsed.isSvg),
		);
		if (qualityRows.length > 0) {
			const totals = sumRows(qualityRows.map(({ row }) => row));
			const severity = severityForIssue(totals, view);
			pushFinding(findings, {
				id: "image-quality",
				severity,
				title: "High image quality settings",
				summary: `${formatCountLabel(qualityRows.length, "image URL")} with quality above 87${withRequestSuffix(qualityRows.length, totals)}${withBytesSuffix(totals)}`,
				suggestedFix: "Keep image quality at 87 or below for raster assets",
				requests: totals.requests,
				responseBytes: totals.responseBytes,
			});
		}

		const imageTotals = sumRows(imageRows.map(({ row }) => row));
		if (
			view.responseBytes > 0 &&
			imageTotals.responseBytes / view.responseBytes >=
				IMAGE_BANDWIDTH_SHARE_THRESHOLD
		) {
			const severity = severityForIssue(imageTotals, view);
			pushFinding(findings, {
				id: "image-bandwidth",
				severity,
				title: "Image bandwidth concentration",
				summary: `Images account for ${formatWholePercentage((imageTotals.responseBytes / view.responseBytes) * 100)} of bandwidth (${formatBytes(imageTotals.responseBytes)})`,
				suggestedFix:
					"Reduce oversized assets, enforce format=auto, and trim unnecessary image widths",
				requests: imageTotals.requests,
				responseBytes: imageTotals.responseBytes,
			});
		}

		const unsafeRequests = unsafeFormatRows.reduce(
			(sum, { row }) => sum + row.requests,
			0,
		);
		const totalImageRequests = imageRows.reduce(
			(sum, { row }) => sum + row.requests,
			0,
		);
		const safeRequests = totalImageRequests - unsafeRequests;
		if (totalImageRequests > 0) {
			const safeShare = safeRequests / totalImageRequests;
			if (unsafeRequests === 0) {
				pushFinding(findings, {
					id: "image-format",
					severity: "passed",
					title: "Image format defaults",
					summary: "No explicit non-auto image formats detected",
				});
			} else if (safeShare >= PASS_SHARE_THRESHOLD) {
				pushFinding(findings, {
					id: "image-format",
					severity: "passed",
					title: "Image format mostly safe",
					summary: `${formatWholePercentage(safeShare * 100)} of image requests avoid explicit non-auto formats`,
				});
			}
		}
	}

	const serverErrors = view.byStatus.filter(({ label }) => Number(label) >= 500);
	const clientErrors = view.byStatus.filter(({ label }) => {
		const status = Number(label);
		return status >= 400 && status < 500;
	});
	const serverErrorCount = serverErrors.reduce((sum, row) => sum + row.count, 0);
	const clientErrorCount = clientErrors.reduce((sum, row) => sum + row.count, 0);

	if (serverErrorCount > 0) {
		pushFinding(findings, {
			id: "status-5xx",
			severity: "critical",
			title: "5xx responses",
			summary: `${formatCountLabel(serverErrorCount, "5xx response")} detected`,
			suggestedFix: "Investigate failing API/CDN handlers returning 5xx",
			requests: serverErrorCount,
		});
	} else {
		pushFinding(findings, {
			id: "status-5xx",
			severity: "passed",
			title: "5xx health",
			summary: "No 5xx responses",
		});
	}

	if (clientErrorCount > 0) {
		pushFinding(findings, {
			id: "status-4xx",
			severity: "warning",
			title: "4xx responses",
			summary: `${formatCountLabel(clientErrorCount, "4xx response")} detected`,
			suggestedFix: "Review missing assets and invalid client requests returning 4xx",
			requests: clientErrorCount,
		});
	} else {
		pushFinding(findings, {
			id: "status-4xx",
			severity: "passed",
			title: "4xx health",
			summary: "No 4xx responses",
		});
	}

	const dominantBucket = dominantCountRow(view.responseSizeHistogram);
	if (dominantBucket) {
		if (dominantBucket.share >= PASS_SHARE_THRESHOLD) {
			pushFinding(findings, {
				id: "response-size-concentration",
				severity: "warning",
				title: "Response size concentration",
				summary: `${dominantBucket.label} accounts for ${formatWholePercentage(dominantBucket.share * 100)} of responses`,
				suggestedFix:
					"Investigate why most responses fall into one size bucket",
				requests: dominantBucket.count,
			});
		} else {
			pushFinding(findings, {
				id: "response-size-concentration",
				severity: "passed",
				title: "Response size distribution",
				summary: `${dominantBucket.label} stays at ${formatWholePercentage(dominantBucket.share * 100)} of responses`,
			});
		}
	}

	const addConcentrationFinding = (
		id: FindingId,
		title: string,
		rows: RankedRow[],
		dimensionLabel: string,
	): void => {
		const byBandwidth = dominantRankedRow(rows, "responseBytes");
		const dominant =
			byBandwidth && byBandwidth.share >= CONCENTRATION_SHARE_THRESHOLD
				? { ...byBandwidth, metricLabel: "bandwidth" as const }
				: (() => {
						const byRequests = dominantRankedRow(rows, "requests");
						if (
							!byRequests ||
							byRequests.share < CONCENTRATION_SHARE_THRESHOLD
						) {
							return null;
						}
						return { ...byRequests, metricLabel: "requests" as const };
					})();
		if (!dominant) return;

		const severity: FindingSeverity =
			dominant.share >= 0.9 ? "critical" : "warning";

		pushFinding(findings, {
			id,
			severity: severity,
			title,
			summary: `${dominant.label} accounts for ${formatWholePercentage(dominant.share * 100)} of ${dimensionLabel} ${dominant.metricLabel}`,
			suggestedFix: `Review anomalous concentration on ${dimensionLabel} "${dominant.label}"`,
			requests:
				dominant.metricLabel === "requests" ? dominant.value : undefined,
			responseBytes:
				dominant.metricLabel === "bandwidth" ? dominant.value : undefined,
		});
	};

	addConcentrationFinding(
		"hour-concentration",
		"Hourly traffic concentration",
		view.byHour,
		"hour",
	);
	addConcentrationFinding(
		"domain-concentration",
		"Domain traffic concentration",
		view.byDomain,
		"domain",
	);
	addConcentrationFinding(
		"endpoint-concentration",
		"Endpoint traffic concentration",
		view.byEndpoint,
		"endpoint",
	);

	const critical = findings.filter((f) => f.severity === "critical");
	const warning = findings.filter((f) => f.severity === "warning");
	const signals = findings.filter((f) => f.severity === "passed");

	const topOpportunities = [...critical, ...warning]
		.map(toOpportunity)
		.filter((item): item is ReportOpportunity => item !== null)
		.slice(0, TOP_OPPORTUNITY_LIMIT);

	const estimatedSavingsBytes = topOpportunities.reduce<number | undefined>(
		(sum, item) => {
			if (item.estimatedSavingsBytes === undefined) return sum;
			return (sum ?? 0) + item.estimatedSavingsBytes;
		},
		undefined,
	);

	return {
		overallHealth: healthFromCounts(critical.length, warning.length),
		issueCounts: {
			critical: critical.length,
			warning: warning.length,
			passed: signals.length,
		},
		findings,
		topOpportunities,
		estimatedSavingsBytes,
		signals,
	};
}

export function summaryHeadline(summary: ReportSummary): string {
	const issueTotal = summary.issueCounts.critical + summary.issueCounts.warning;
	if (issueTotal === 0) return "✅ No issues detected";
	return `🚨 ${formatNumber(issueTotal)} ${pluralize(issueTotal, "issue")} detected`;
}

import {
	formatDistributionShare,
	formatCountLabel,
	formatNumber,
	formatPeakHour,
	pluralize,
} from "../format.js";
import { KB } from "../units.js";
import type { RankedRow, ReportViewInput, TopContributors } from "../types.js";
import { hasGroqSpreadOperator } from "./analyze-groq.js";
import { isMp4Url } from "./classify-url.js";
import {
	dominantCountRow,
	dominantRankedRow,
	dominantSegment,
} from "./distribution.js";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";
import { groupUrlsByKind } from "./group-urls-by-kind.js";
import { buildAtAGlance, type ReportInsight } from "./narrative.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	MAX_IMAGE_QUALITY,
	MAX_IMAGE_WIDTH,
	parseImageUrl,
} from "./parse-image-url.js";
import {
	CONCENTRATION_SHARE_THRESHOLD,
	CRITICAL_BYTES_THRESHOLD,
	CRITICAL_REQUESTS_THRESHOLD,
	CRITICAL_SHARE_THRESHOLD,
	CRITICAL_TOTAL_BYTES_THRESHOLD,
	CRITICAL_TOTAL_REQUESTS_THRESHOLD,
	DISTRIBUTION_DOMINANCE_THRESHOLD,
	SPIKE_SHARE_THRESHOLD,
	STUDIO_NEGLIGIBLE_SHARE_THRESHOLD,
} from "./thresholds.js";
import type { Tone } from "./components/tone.js";

const REASONABLE_AVG_IMAGE_BYTES = 400 * KB;

export type HealthStatus = Tone;

export type FindingId =
	| "groq-spread"
	| "mp4-transfer"
	| "image-width"
	| "image-format"
	| "image-quality"
	| "status-5xx"
	| "status-4xx";

export interface ReportProblem {
	id: FindingId;
	severity: "critical" | "warning";
	summary: string;
	suggestedFix?: string;
	requests?: number;
	responseBytes?: number;
}

export interface ReportObservation {
	summary: string;
}

export interface ReportHealthySignal {
	summary: string;
}

export interface DistributionSegment {
	label: string;
	bytes: number;
	share: number;
}

export interface ReportSummary {
	overallHealth: HealthStatus;
	critical: ReportProblem[];
	warnings: ReportProblem[];
	observations: ReportObservation[];
	healthy: ReportHealthySignal[];
	atAGlance: ReportInsight[];
	distribution: { totalBytes: number; segments: DistributionSegment[] };
	topContributors: TopContributors;
}

interface IssueTotals {
	requests: number;
	responseBytes: number;
}

interface ImageAnalysis {
	imageRows: Array<{
		row: RankedRow;
		parsed: ReturnType<typeof parseImageUrl>;
	}>;
	wideRows: Array<{
		row: RankedRow;
		parsed: ReturnType<typeof parseImageUrl>;
	}>;
	unsafeFormatRows: Array<{
		row: RankedRow;
		parsed: ReturnType<typeof parseImageUrl>;
	}>;
	qualityRows: Array<{
		row: RankedRow;
		parsed: ReturnType<typeof parseImageUrl>;
	}>;
	imageTotals: IssueTotals;
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

function isCriticalIssue(issue: IssueTotals, view: ReportViewInput): boolean {
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
	view: ReportViewInput,
): "critical" | "warning" {
	return isCriticalIssue(issue, view) ? "critical" : "warning";
}

function pushProblem(
	target: ReportProblem[],
	problem: ReportProblem,
): void {
	target.push(problem);
}

function getImageRows(rows: RankedRow[]): ImageAnalysis["imageRows"] {
	return groupUrlsByKind(rows).image.map((row) => ({
		row,
		parsed: parseImageUrl(row.label),
	}));
}

function analyzeImages(rows: RankedRow[]): ImageAnalysis {
	const imageRows = getImageRows(rows);
	const wideRows = imageRows.filter(({ parsed }) =>
		hasImageWidthError(parsed.width),
	);
	const unsafeFormatRows = imageRows.filter(({ parsed }) =>
		hasImageFormatError(parsed.format),
	);
	const qualityRows = imageRows.filter(({ parsed }) =>
		hasImageQualityError(parsed.quality, parsed.isSvg),
	);

	return {
		imageRows,
		wideRows,
		unsafeFormatRows,
		qualityRows,
		imageTotals: sumRows(imageRows.map(({ row }) => row)),
	};
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

function friendlyDomainLabel(domain: string): string {
	const lower = domain.toLowerCase();
	if (lower.includes("cdn.sanity.io") || lower === "cdn") return "CDN";
	if (lower.includes("apicdn") || lower.includes("api.sanity.io")) {
		return "API CDN";
	}
	return domain;
}

function healthFromCounts(critical: number, warning: number): HealthStatus {
	if (critical > 0) return "red";
	if (warning > 0) return "yellow";
	return "green";
}

function buildDistribution(view: ReportViewInput): ReportSummary["distribution"] {
	const segments: DistributionSegment[] = [
		{ label: "Images", bytes: view.byUrlKind.image.responseBytes, share: 0 },
		{ label: "Queries", bytes: view.byUrlKind.query.responseBytes, share: 0 },
		{ label: "Files", bytes: view.byUrlKind.file.responseBytes, share: 0 },
		{ label: "Other", bytes: view.byUrlKind.other.responseBytes, share: 0 },
	]
		.filter((segment) => segment.bytes > 0)
		.map((segment) => ({
			...segment,
			share:
				view.responseBytes > 0 ? segment.bytes / view.responseBytes : 0,
		}));

	return {
		totalBytes: view.responseBytes,
		segments,
	};
}

function detectProblems(
	view: ReportViewInput,
	critical: ReportProblem[],
	warnings: ReportProblem[],
): {
	querySpreadRows: RankedRow[];
	mp4Rows: RankedRow[];
	images: ImageAnalysis;
	serverErrorCount: number;
	clientErrorCount: number;
} {
	const querySpreadRows = getQuerySpreadRows(view.byUrl);
	if (querySpreadRows.length > 0) {
		const totals = sumRows(querySpreadRows);
		const severity = severityForIssue(totals, view);
		const problem: ReportProblem = {
			id: "groq-spread",
			severity,
			summary: `${formatCountLabel(querySpreadRows.length, "query")} ${querySpreadRows.length === 1 ? "uses" : "use"} the spread operator {...}`,
			suggestedFix:
				"Project only needed fields instead of using the {...} spread operator",
			requests: totals.requests,
			responseBytes: totals.responseBytes,
		};
		pushProblem(severity === "critical" ? critical : warnings, problem);
	}

	const mp4Rows = getMp4Rows(view.byUrl);
	if (mp4Rows.length > 0) {
		const totals = sumRows(mp4Rows);
		const severity = severityForIssue(totals, view);
		const problem: ReportProblem = {
			id: "mp4-transfer",
			severity,
			summary: `${formatCountLabel(mp4Rows.length, "MP4 URL", "MP4 URLs")} served as progressive MP4`,
			suggestedFix:
				"Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
			requests: totals.requests,
			responseBytes: totals.responseBytes,
		};
		pushProblem(severity === "critical" ? critical : warnings, problem);
	}

	const images = analyzeImages(view.byUrl);

	if (images.wideRows.length > 0) {
		const totals = sumRows(images.wideRows.map(({ row }) => row));
		const severity = severityForIssue(totals, view);
		const problem: ReportProblem = {
			id: "image-width",
			severity,
			summary: `${formatCountLabel(images.wideRows.length, "image")} exceed ${MAX_IMAGE_WIDTH}px`,
			suggestedFix: `Cap CDN width requests at ${MAX_IMAGE_WIDTH}px or below`,
			requests: totals.requests,
			responseBytes: totals.responseBytes,
		};
		pushProblem(severity === "critical" ? critical : warnings, problem);
	}

	if (images.unsafeFormatRows.length > 0) {
		const totals = sumRows(images.unsafeFormatRows.map(({ row }) => row));
		const severity = severityForIssue(totals, view);
		const problem: ReportProblem = {
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
		const problem: ReportProblem = {
			id: "image-quality",
			severity,
			summary: `${formatCountLabel(images.qualityRows.length, "image")} with quality above ${MAX_IMAGE_QUALITY}`,
			suggestedFix: `Keep image quality at ${MAX_IMAGE_QUALITY} or below for raster assets`,
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
			suggestedFix:
				"Review missing assets and invalid client requests returning 4xx",
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

function buildObservations(view: ReportViewInput): ReportObservation[] {
	const observations: ReportObservation[] = [];

	const distribution = buildDistribution(view);
	const dominant = dominantSegment(distribution.segments);

	if (
		dominant &&
		dominant.share >= DISTRIBUTION_DOMINANCE_THRESHOLD &&
		view.responseBytes > 0
	) {
		observations.push({
			summary: `${dominant.label} account for ${formatDistributionShare(dominant.share)} of bandwidth`,
		});
	}

	const domainDominant = dominantRankedRow(view.byDomain, "responseBytes");
	if (
		domainDominant &&
		domainDominant.share >= CONCENTRATION_SHARE_THRESHOLD
	) {
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
	if (
		histogramDominant &&
		histogramDominant.share >= CONCENTRATION_SHARE_THRESHOLD
	) {
		observations.push({
			summary: `${formatDistributionShare(histogramDominant.share)} of responses are ${histogramDominant.label}`,
		});
	}

	return observations;
}

function buildHealthySignals(
	view: ReportViewInput,
	context: ReturnType<typeof detectProblems>,
): ReportHealthySignal[] {
	const healthy: ReportHealthySignal[] = [];
	const { querySpreadRows, mp4Rows, images, serverErrorCount, clientErrorCount } =
		context;

	if (images.imageRows.length > 0 && images.unsafeFormatRows.length === 0) {
		healthy.push({ summary: "All images use the auto format" });
	}

	if (
		images.imageTotals.requests > 0 &&
		images.imageTotals.responseBytes / images.imageTotals.requests <
			REASONABLE_AVG_IMAGE_BYTES
	) {
		healthy.push({ summary: "Average image response size is reasonable" });
	}

	const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
	if (!hourDominant || hourDominant.share < SPIKE_SHARE_THRESHOLD) {
		healthy.push({ summary: "No suspicious bandwidth spikes detected" });
	}

	if (
		view.includesStudio &&
		view.responseBytes > 0 &&
		view.studio.responseBytes / view.responseBytes <
			STUDIO_NEGLIGIBLE_SHARE_THRESHOLD
	) {
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
		healthy.push({ summary: "No unreasonably high image quality settings detected" });
	}

	if (view.byUrlKind.file.requests > 0 && mp4Rows.length === 0) {
		healthy.push({ summary: "No progressive MP4 downloads detected" });
	}

	return healthy.slice(0, 8);
}

export function buildReportSummary(view: ReportViewInput): ReportSummary {
	const critical: ReportProblem[] = [];
	const warnings: ReportProblem[] = [];
	const detection = detectProblems(view, critical, warnings);
	const distribution = buildDistribution(view);
	const observations = buildObservations(view);
	const healthy = buildHealthySignals(view, detection);

	const partialSummary: ReportSummary = {
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

export function summaryHeadline(summary: ReportSummary): string {
	const issueTotal = summary.critical.length + summary.warnings.length;
	if (issueTotal === 0) return "✅ No issues detected";
	return `🚨 ${formatNumber(issueTotal)} ${pluralize(issueTotal, "issue")} detected`;
}

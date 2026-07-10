import { formatCountLabel, formatNumber, pluralize } from "../format.js";
import type {
	CountRow,
	FindingId,
	IssueSeverity,
	RankedRow,
	ReportIssue,
} from "../types.js";
import {
	GROQ_ISSUE_DEEP_SLICE,
	GROQ_ISSUE_DEREF_IN_FILTER,
	GROQ_ISSUE_NON_LITERAL_COMPARE,
	GROQ_ISSUE_REPEATED_DEREF,
	GROQ_ISSUE_SPREAD,
} from "./analyze-groq.js";
import { isMp4Url } from "./classify-url.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	MAX_IMAGE_QUALITY,
	MAX_IMAGE_WIDTH,
	parseImageUrl,
} from "./parse-image-url.js";
import {
	CRITICAL_BYTES_THRESHOLD,
	CRITICAL_REQUESTS_THRESHOLD,
	CRITICAL_SHARE_THRESHOLD,
	CRITICAL_TOTAL_BYTES_THRESHOLD,
	CRITICAL_TOTAL_REQUESTS_THRESHOLD,
} from "./thresholds.js";

const GROQ_PERF_ISSUES = new Set([
	GROQ_ISSUE_DEREF_IN_FILTER,
	GROQ_ISSUE_REPEATED_DEREF,
	GROQ_ISSUE_DEEP_SLICE,
	GROQ_ISSUE_NON_LITERAL_COMPARE,
]);

export type { FindingId };

interface IssueTotals {
	requests: number;
	responseBytes: number;
}

interface SeverityContext {
	requestCount: number;
	bandwidth: number;
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

function isCriticalIssue(
	issue: IssueTotals,
	ctx: SeverityContext,
): boolean {
	return (
		issue.responseBytes >= CRITICAL_BYTES_THRESHOLD ||
		issue.requests >= CRITICAL_REQUESTS_THRESHOLD ||
		(ctx.bandwidth >= CRITICAL_TOTAL_BYTES_THRESHOLD &&
			issue.responseBytes / ctx.bandwidth >= CRITICAL_SHARE_THRESHOLD) ||
		(ctx.requestCount >= CRITICAL_TOTAL_REQUESTS_THRESHOLD &&
			issue.requests / ctx.requestCount >= CRITICAL_SHARE_THRESHOLD)
	);
}

function severityForIssue(
	issue: IssueTotals,
	ctx: SeverityContext,
): "critical" | "warn" {
	return isCriticalIssue(issue, ctx) ? "critical" : "warn";
}

function rowHasGroqIssue(row: RankedRow, issue: string): boolean {
	return row.groq?.issues.includes(issue) ?? false;
}

function getQuerySpreadRows(rows: RankedRow[]): RankedRow[] {
	return rows.filter((row) => rowHasGroqIssue(row, GROQ_ISSUE_SPREAD));
}

function getQueryPerfRows(rows: RankedRow[]): RankedRow[] {
	return rows.filter((row) =>
		(row.groq?.issues ?? []).some((issue) => GROQ_PERF_ISSUES.has(issue)),
	);
}

function getMp4Rows(rows: RankedRow[]): RankedRow[] {
	return rows.filter((row) => isMp4Url(row.label));
}

interface ImageAnalysis {
	wideRows: RankedRow[];
	unsafeFormatRows: RankedRow[];
	qualityRows: RankedRow[];
}

function analyzeImages(rows: RankedRow[]): ImageAnalysis {
	const parsed = rows.map((row) => ({
		row,
		parsed: parseImageUrl(row.label),
	}));

	return {
		wideRows: parsed
			.filter(({ parsed: p }) => hasImageWidthError(p.width))
			.map(({ row }) => row),
		unsafeFormatRows: parsed
			.filter(({ parsed: p }) => hasImageFormatError(p.format))
			.map(({ row }) => row),
		qualityRows: parsed
			.filter(({ parsed: p }) => hasImageQualityError(p.quality, p.isSvg))
			.map(({ row }) => row),
	};
}

function failOrPass(options: {
	id: FindingId;
	failingRows: RankedRow[];
	ctx: SeverityContext;
	failMessage: (count: number) => string;
	passMessage: string;
	suggestion: string;
}): ReportIssue {
	const { id, failingRows, ctx, failMessage, passMessage, suggestion } =
		options;

	if (failingRows.length === 0) {
		return {
			id,
			severity: "passed",
			message: passMessage,
			suggestion,
		};
	}

	const totals = sumRows(failingRows);
	return {
		id,
		severity: severityForIssue(totals, ctx),
		message: failMessage(failingRows.length),
		suggestion,
		requests: totals.requests,
		responseBytes: totals.responseBytes,
	};
}

function statusIssue(options: {
	id: FindingId;
	count: number;
	severity: IssueSeverity;
	failMessage: (count: number) => string;
	passMessage: string;
	suggestion: string;
}): ReportIssue {
	const { id, count, severity, failMessage, passMessage, suggestion } =
		options;

	if (count === 0) {
		return {
			id,
			severity: "passed",
			message: passMessage,
			suggestion,
		};
	}

	return {
		id,
		severity,
		message: failMessage(count),
		suggestion,
		requests: count,
	};
}

export function buildImageIssues(
	entries: RankedRow[],
	ctx: SeverityContext,
): ReportIssue[] {
	const images = analyzeImages(entries);

	return [
		failOrPass({
			id: "image-width",
			failingRows: images.wideRows,
			ctx,
			failMessage: (count) =>
				`${formatCountLabel(count, "image")} exceed ${MAX_IMAGE_WIDTH}px`,
			passMessage: `No images exceed ${MAX_IMAGE_WIDTH}px width`,
			suggestion: `Cap CDN width requests at ${MAX_IMAGE_WIDTH}px or below`,
		}),
		failOrPass({
			id: "image-format",
			failingRows: images.unsafeFormatRows,
			ctx,
			failMessage: (count) =>
				`${formatCountLabel(count, "image")} missing format=auto`,
			passMessage: "All images use format=auto",
			suggestion: 'Use auto=format (or fm/format="auto") for CDN image URLs',
		}),
		failOrPass({
			id: "image-quality",
			failingRows: images.qualityRows,
			ctx,
			failMessage: (count) =>
				`${formatCountLabel(count, "image")} with quality above ${MAX_IMAGE_QUALITY}`,
			passMessage: `No images use quality above ${MAX_IMAGE_QUALITY}`,
			suggestion: `Keep image quality at ${MAX_IMAGE_QUALITY} or below for raster assets`,
		}),
	];
}

export function buildFileIssues(
	entries: RankedRow[],
	ctx: SeverityContext,
): ReportIssue[] {
	return [
		failOrPass({
			id: "mp4-transfer",
			failingRows: getMp4Rows(entries),
			ctx,
			failMessage: (count) =>
				`${formatCountLabel(count, "MP4 URL", "MP4 URLs")} served as progressive MP4`,
			passMessage: "No progressive MP4 downloads detected",
			suggestion:
				"Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
		}),
	];
}

export function buildQueryIssues(
	entries: RankedRow[],
	ctx: SeverityContext,
): ReportIssue[] {
	return [
		failOrPass({
			id: "groq-spread",
			failingRows: getQuerySpreadRows(entries),
			ctx,
			failMessage: (count) =>
				`${formatCountLabel(count, "query")} ${count === 1 ? "uses" : "use"} the spread operator {...}`,
			passMessage: "No GROQ spread queries detected",
			suggestion:
				"Project only needed fields instead of using the {...} spread operator",
		}),
		failOrPass({
			id: "groq-perf",
			failingRows: getQueryPerfRows(entries),
			ctx,
			failMessage: (count) =>
				`${formatCountLabel(count, "query")} ${count === 1 ? "has" : "have"} GROQ performance anti-patterns`,
			passMessage: "No GROQ performance anti-patterns detected",
			suggestion:
				"Avoid joins in filters, repeated reference resolves, deep slices, and non-literal field comparisons",
		}),
	];
}

export function buildResponseStatusIssues(
	entries: CountRow[],
): ReportIssue[] {
	const serverErrorCount = entries
		.filter(({ label }) => Number(label) >= 500)
		.reduce((sum, row) => sum + row.count, 0);
	const clientErrorCount = entries
		.filter(({ label }) => {
			const status = Number(label);
			return status >= 400 && status < 500;
		})
		.reduce((sum, row) => sum + row.count, 0);

	return [
		statusIssue({
			id: "status-5xx",
			count: serverErrorCount,
			severity: "critical",
			failMessage: (count) => formatCountLabel(count, "server error"),
			passMessage: "No server errors detected",
			suggestion: "Investigate failing API/CDN handlers returning 5xx",
		}),
		statusIssue({
			id: "status-4xx",
			count: clientErrorCount,
			severity: "warn",
			failMessage: (count) => formatCountLabel(count, "client error"),
			passMessage: "No client errors detected",
			suggestion:
				"Review missing assets and invalid client requests returning 4xx",
		}),
	];
}

export function worstSeverity(
	issues: ReportIssue[],
): IssueSeverity | "passed" {
	if (issues.some((issue) => issue.severity === "critical")) return "critical";
	if (issues.some((issue) => issue.severity === "warn")) return "warn";
	return "passed";
}

export function buildSummaryMessage(issues: ReportIssue[]): string {
	const failing = issues.filter((issue) => issue.severity !== "passed");
	if (failing.length === 0) return "No issues detected";
	const critical = failing.filter((i) => i.severity === "critical").length;
	const warnings = failing.filter((i) => i.severity === "warn").length;
	const parts: string[] = [];
	if (critical > 0) {
		parts.push(`${formatNumber(critical)} critical`);
	}
	if (warnings > 0) {
		parts.push(`${formatNumber(warnings)} ${pluralize(warnings, "warning")}`);
	}
	return `${parts.join(", ")} detected`;
}

export function percentOf(part: number, total: number): number {
	if (total <= 0) return 0;
	return (part / total) * 100;
}

import {
	formatBytes,
	formatNumber,
	formatPercentage,
	formatReadableDate,
} from "../format.js";
import { avgBytesPerRequest } from "../ranked-row.js";
import { GROQ_SPREAD_WARNING, hasGroqSpreadOperator } from "./analyze-groq.js";
import { isMp4Url } from "./classify-url.js";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";
import { groupUrlsByKind } from "./group-urls-by-kind.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	parseImageUrl,
} from "./parse-image-url.js";
import {
	aggregateUserAgentStats,
	parseUserAgent,
} from "./parse-user-agent.js";
import {
	buildReportSummary,
	summaryHeadline,
	type ReportFinding,
} from "./summarize.js";
import type {
	CountRow,
	RankedRow,
	ReportData,
	ReportSections,
	ReportView,
} from "../types.js";

export type MarkdownView = "billable" | "all";

export interface GenerateMarkdownOptions {
	/** Which report view to render. Defaults to `"billable"` (matches HTML default). */
	view?: MarkdownView;
}

export function escapeMarkdownCell(value: string): string {
	return value.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}

export function slugifyReportFilename(title: string): string {
	const slug = title
		.toLowerCase()
		.trim()
		.replaceAll(/[^\w\s-]/g, "")
		.replaceAll(/\s+/g, "-")
		.replaceAll(/-+/g, "-")
		.replace(/^-+|-+$/g, "");
	return slug || "report";
}

export function markdownReportFilename(
	data: ReportData,
	view: MarkdownView,
): string {
	const base = slugifyReportFilename(data.title);
	const suffix = view === "billable" ? "_billable-only" : "_all";
	return `${base}${suffix}.md`;
}

const MP4_WARNING = "consider HLS streaming instead of MP4";

type SummaryGroupTitle = "Critical" | "Warnings" | "Passed";

function renderSummaryGroup(
	title: SummaryGroupTitle,
	items: ReportFinding[],
): string {
	if (items.length === 0) return "";

	return [
		`### ${title}`,
		"",
		...items.slice(0, 5).map((item) => `- ${item.summary}`),
		"",
	].join("\n");
}

function buildExecutiveSummary(view: ReportView): string {
	const summary = buildReportSummary(view);
	const critical = summary.findings.filter((f) => f.severity === "critical");
	const warnings = summary.findings.filter((f) => f.severity === "warning");
	const passed = summary.signals;

	return [
		"## Executive Summary",
		"",
		summaryHeadline(summary),
		"",
		renderSummaryGroup("Critical", critical),
		renderSummaryGroup("Warnings", warnings),
		renderSummaryGroup("Passed", passed),
	]
		.filter(Boolean)
		.join("\n");
}

function formatImageMetric(
	value: string | number | null,
	issue?: string,
): string {
	if (value === null) return "—";
	const base = String(value);
	return issue ? `${base} (${issue})` : base;
}

function rankedTable(title: string, rows: RankedRow[]): string {
	if (rows.length === 0) return "";

	const lines = [
		`### ${title}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		lines.push(
			`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function urlRankedTable(title: string, rows: RankedRow[]): string {
	if (rows.length === 0) return "";

	const lines = [
		`#### ${title}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		lines.push(
			`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function imageUrlTable(rows: RankedRow[]): string {
	if (rows.length === 0) return "";

	const lines = [
		"#### Images",
		"",
		"| ID | URL | Width | Quality | Format | Bandwidth | Requests | Avg / req |",
		"| --- | --- | ---: | ---: | --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		const parsed = parseImageUrl(row.label);
		const width = formatImageMetric(
			parsed.width,
			hasImageWidthError(parsed.width) ? "width exceeds 2000px" : undefined,
		);
		const quality = formatImageMetric(
			parsed.quality,
			hasImageQualityError(parsed.quality, parsed.isSvg)
				? "quality exceeds 87"
				: undefined,
		);
		const format = formatImageMetric(
			parsed.format,
			hasImageFormatError(parsed.format)
				? 'format should be "auto"'
				: undefined,
		);

		lines.push(
			`| ${escapeMarkdownCell(parsed.id)} | ${escapeMarkdownCell(row.label)} | ${width} | ${quality} | ${format} | ${formatBytes(row.responseBytes)} | ${formatNumber(row.requests)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function queryUrlTable(rows: RankedRow[]): string {
	if (rows.length === 0) return "";

	const lines = [
		"#### Queries",
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		const query = extractGroqQuery(row.label);
		const params = query ? extractGroqParams(row.label) : null;
		const label =
			query &&
			hasGroqSpreadOperator(query, params ?? undefined)
				? `${row.label} (${GROQ_SPREAD_WARNING})`
				: row.label;
		lines.push(
			`| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function fileUrlTable(rows: RankedRow[]): string {
	if (rows.length === 0) return "";

	const lines = [
		"#### Files",
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		const label = isMp4Url(row.label)
			? `${row.label} (${MP4_WARNING})`
			: row.label;
		lines.push(
			`| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function urlSectionsMarkdown(rows: RankedRow[]): string {
	const groups = groupUrlsByKind(rows);
	const parts: string[] = ["### Top URLs", ""];

	if (groups.image.length > 0) {
		parts.push(imageUrlTable(groups.image));
	}
	if (groups.file.length > 0) {
		parts.push(fileUrlTable(groups.file));
	}
	if (groups.query.length > 0) {
		parts.push(queryUrlTable(groups.query));
	}
	if (groups.other.length > 0) {
		parts.push(urlRankedTable("Other", groups.other));
	}

	return parts.filter(Boolean).join("\n");
}

function userAgentTable(title: string, rows: RankedRow[]): string {
	if (rows.length === 0) return "";

	const stats = aggregateUserAgentStats(rows);
	const lines = [`### ${title}`, ""];

	if (stats.trackableRequests > 0) {
		lines.push(
			`Mac ${formatPercentage(stats.macPct)} · Windows ${formatPercentage(stats.windowsPct)} · Mobile ${formatPercentage(stats.mobilePct)} · Desktop ${formatPercentage(stats.desktopPct)}`,
			"",
		);
	}

	lines.push(
		"| Device | Label | Requests | Bandwidth | Avg / req |",
		"| --- | --- | ---: | ---: | ---: |",
	);

	for (const row of rows) {
		const parsed = parseUserAgent(row.label);
		const device =
			parsed.deviceKind === "mobile"
				? "Mobile"
				: parsed.deviceKind === "desktop"
					? "Desktop"
					: "—";
		lines.push(
			`| ${device} | ${escapeMarkdownCell(`${parsed.displayLabel} — ${parsed.raw}`)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function countTable(title: string, rows: CountRow[]): string {
	if (rows.length === 0) return "";

	const lines = [
		`### ${title}`,
		"",
		"| Label | Count |",
		"| --- | ---: |",
	];

	for (const row of rows) {
		lines.push(`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.count)} |`);
	}

	lines.push("");
	return lines.join("\n");
}

function renderSummary(view: ReportView): string {
	const period =
		view.firstTimestamp && view.lastTimestamp
			? `${formatReadableDate(view.firstTimestamp)} → ${formatReadableDate(view.lastTimestamp)}`
			: "No timestamps found";

	return [
		"## Summary",
		"",
		`- Requests: ${formatNumber(view.requests)}`,
		`- Response bandwidth: ${formatBytes(view.responseBytes)}`,
		`- Request bytes: ${formatBytes(view.requestBytes)}`,
		`- Period: ${period}`,
		`- Studio: ${formatNumber(view.studio.requests)} requests, ${formatBytes(view.studio.responseBytes)} response`,
		`- Billable: ${formatNumber(view.nonStudio.requests)} requests, ${formatBytes(view.nonStudio.responseBytes)} response`,
		"",
	].join("\n");
}

function renderSections(view: ReportView, sections: ReportSections): string {
	const parts: string[] = [];

	if (sections.domain) parts.push(rankedTable("Top domains", view.byDomain));
	if (sections.endpoint) parts.push(rankedTable("Top endpoints", view.byEndpoint));
	if (sections.date) parts.push(rankedTable("Daily bandwidth", view.byDate));
	if (sections.hour) parts.push(rankedTable("Hourly bandwidth", view.byHour));
	if (sections.status) parts.push(countTable("Response codes", view.byStatus));
	if (sections.histogram) {
		parts.push(countTable("Response size buckets", view.responseSizeHistogram));
	}
	if (sections.urls) parts.push(urlSectionsMarkdown(view.byUrl));
	if (sections.referers) parts.push(rankedTable("Top referers", view.byReferer));
	if (sections.userAgents) {
		parts.push(userAgentTable("Top user agents", view.byUserAgent));
	}
	if (sections.ips) parts.push(rankedTable("Top IPs", view.byIp));

	return parts.filter(Boolean).join("\n");
}

export function renderReportMarkdown(
	data: ReportData,
	viewKey: MarkdownView,
): string {
	const view = viewKey === "billable" ? data.billable : data.all;

	return [
		`# ${data.title}`,
		"",
		`- Source: \`${data.sourcePath}\``,
		`- Generated: ${data.generatedAt}`,
		`- View: ${view.label}`,
		`- Max table rows: ${data.config.topN}`,
		"",
		buildExecutiveSummary(view),
		"",
		renderSummary(view),
		renderSections(view, data.config.sections),
	].join("\n");
}

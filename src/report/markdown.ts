import {
	formatBytes,
	formatNullableMetric,
	formatNumber,
	formatPercentage,
	formatReadableDate,
} from "../format.js";
import { avgBytesPerRequest } from "../ranked-row.js";
import type {
	CountRow,
	RankedRow,
	ReportData,
	ReportSections,
	ReportView,
} from "../types.js";
import { isMp4Url } from "./classify-url.js";
import { GROQ_SPREAD_WARNING } from "./groq-constants.js";
import { groupUrlsByKind } from "./group-urls-by-kind.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	MAX_IMAGE_QUALITY,
	MAX_IMAGE_WIDTH,
	PREFERRED_IMAGE_FORMAT,
	parseImageUrl,
} from "./parse-image-url.js";
import {
	markdownReportFilename,
	slugifyReportFilename,
} from "./report-filename.js";
import { getSectionLabel } from "./sections.js";
import {
	type ReportHealthySignal,
	type ReportObservation,
	type ReportProblem,
	type ReportSummary,
	summaryHeadline,
} from "./summarize.js";

export type MarkdownView = "billable" | "all";

export interface GenerateMarkdownOptions {
	/** Which report view to render. Defaults to `"billable"` (matches HTML default). */
	view?: MarkdownView;
}

export { markdownReportFilename, slugifyReportFilename };

export function escapeMarkdownCell(value: string): string {
	return value
		.replaceAll("|", "\\|")
		.replaceAll("\n", " ")
		.replaceAll("\r", "");
}

const MP4_WARNING = "consider HLS streaming instead of MP4";

function renderBulletGroup(title: string, items: string[]): string {
	if (items.length === 0) return "";

	return [
		`### ${title}`,
		"",
		...items.slice(0, 8).map((item) => `- ${item}`),
		"",
	].join("\n");
}

function renderDistributionSummary(summary: ReportSummary): string {
	const lines = [
		"### Distribution",
		"",
		`- Total: ${formatBytes(summary.distribution.totalBytes)}`,
		...summary.distribution.segments.map(
			(segment) => `- ${segment.label}: ${formatBytes(segment.bytes)}`,
		),
		"",
	];
	return lines.join("\n");
}

function renderContributorSummary(summary: ReportSummary): string {
	const items: string[] = [];
	const { topContributors } = summary;

	if (topContributors.image) {
		items.push(
			`- Largest image: ${formatBytes(topContributors.image.responseBytes)} (${formatNumber(topContributors.image.requests)} requests)`,
		);
	}
	if (topContributors.query) {
		items.push(
			`- Largest query: ${formatBytes(topContributors.query.responseBytes)} (${formatNumber(topContributors.query.requests)} requests)`,
		);
	}
	if (topContributors.file) {
		items.push(
			`- Largest file: ${formatBytes(topContributors.file.responseBytes)} (${formatNumber(topContributors.file.requests)} requests)`,
		);
	}
	if (topContributors.referer) {
		items.push(
			`- Largest referer: ${formatBytes(topContributors.referer.responseBytes)}`,
		);
	}

	if (items.length === 0) return "";
	return ["### Top contributors", "", ...items, ""].join("\n");
}

function buildExecutiveSummary(view: ReportView): string {
	const summary = view.summary;
	const atAGlanceBullets = summary.atAGlance
		.filter((insight) => insight.kind !== "synthesis")
		.map((insight) => insight.text);
	const synthesis = summary.atAGlance.find(
		(insight) => insight.kind === "synthesis",
	);

	return [
		"## Executive Summary",
		"",
		summaryHeadline(summary),
		"",
		renderBulletGroup("At a glance", atAGlanceBullets),
		synthesis ? `${synthesis.text}\n` : "",
		renderDistributionSummary(summary),
		renderContributorSummary(summary),
		renderBulletGroup(
			"Critical",
			summary.critical.map((item: ReportProblem) => item.summary),
		),
		renderBulletGroup(
			"Warnings",
			summary.warnings.map((item: ReportProblem) => item.summary),
		),
		renderBulletGroup(
			"Observations",
			summary.observations.map((item: ReportObservation) => item.summary),
		),
		renderBulletGroup(
			"No action needed",
			summary.healthy.map((item: ReportHealthySignal) => item.summary),
		),
	]
		.filter(Boolean)
		.join("\n");
}

function formatImageMetric(
	value: string | number | null,
	issue?: string,
): string {
	const base = formatNullableMetric(value);
	if (base === "—") return base;
	return issue ? `${base} (${issue})` : base;
}

function rankedRowMarkdownLine(
	row: RankedRow,
	label = row.label,
): string {
	return `| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`;
}

function rankedTable(
	title: string,
	rows: RankedRow[],
	headingLevel: 3 | 4 = 3,
): string {
	if (rows.length === 0) return "";

	const heading = "#".repeat(headingLevel);
	const lines = [
		`${heading} ${title}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		lines.push(rankedRowMarkdownLine(row));
	}

	lines.push("");
	return lines.join("\n");
}

function urlRankedTable(title: string, rows: RankedRow[]): string {
	return rankedTable(title, rows, 4);
}

function rankedUrlSubtable(
	title: string,
	rows: RankedRow[],
	formatLabel: (row: RankedRow) => string,
): string {
	if (rows.length === 0) return "";

	const lines = [
		`#### ${title}`,
		"",
		"| Label | Requests | Bandwidth | Avg / req |",
		"| --- | ---: | ---: | ---: |",
	];

	for (const row of rows) {
		lines.push(rankedRowMarkdownLine(row, formatLabel(row)));
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
			hasImageWidthError(parsed.width)
				? `width exceeds ${MAX_IMAGE_WIDTH}px`
				: undefined,
		);
		const quality = formatImageMetric(
			parsed.quality,
			hasImageQualityError(parsed.quality, parsed.isSvg)
				? `quality exceeds ${MAX_IMAGE_QUALITY}`
				: undefined,
		);
		const format = formatImageMetric(
			parsed.format,
			hasImageFormatError(parsed.format)
				? `format should be "${PREFERRED_IMAGE_FORMAT}"`
				: undefined,
		);

		lines.push(
			`| ${escapeMarkdownCell(parsed.id)} | ${escapeMarkdownCell(row.label)} | ${width} | ${quality} | ${format} | ${formatBytes(row.responseBytes)} | ${formatNumber(row.requests)} | ${formatBytes(avgBytesPerRequest(row))} |`,
		);
	}

	lines.push("");
	return lines.join("\n");
}

function queryUrlTable(
	rows: RankedRow[],
	groqByUrl: ReportView["groqByUrl"],
): string {
	return rankedUrlSubtable("Queries", rows, (row) => {
		const groqDetails = groqByUrl[row.label];
		return groqDetails?.hasSpreadOperator
			? `${row.label} (${GROQ_SPREAD_WARNING})`
			: row.label;
	});
}

function fileUrlTable(rows: RankedRow[]): string {
	return rankedUrlSubtable("Files", rows, (row) =>
		isMp4Url(row.label) ? `${row.label} (${MP4_WARNING})` : row.label,
	);
}

function urlSectionsMarkdown(view: ReportView): string {
	const groups = groupUrlsByKind(view.byUrl);
	const parts: string[] = [`### ${getSectionLabel("urls") ?? "Top URLs"}`, ""];

	if (groups.image.length > 0) {
		parts.push(imageUrlTable(groups.image));
	}
	if (groups.file.length > 0) {
		parts.push(fileUrlTable(groups.file));
	}
	if (groups.query.length > 0) {
		parts.push(queryUrlTable(groups.query, view.groqByUrl));
	}
	if (groups.other.length > 0) {
		parts.push(urlRankedTable("Other", groups.other));
	}

	return parts.filter(Boolean).join("\n");
}

function userAgentTable(title: string, view: ReportView): string {
	const rows = view.byUserAgent;
	if (rows.length === 0) return "";

	const stats = view.userAgentStats;
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
		const parsed = view.userAgentByLabel[row.label];
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

	const lines = [`### ${title}`, "", "| Label | Count |", "| --- | ---: |"];

	for (const row of rows) {
		lines.push(
			`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.count)} |`,
		);
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

	if (sections.domain) {
		parts.push(rankedTable(getSectionLabel("domain") ?? "Top domains", view.byDomain));
	}
	if (sections.endpoint) {
		parts.push(
			rankedTable(getSectionLabel("endpoint") ?? "Top endpoints", view.byEndpoint),
		);
	}
	if (sections.date) {
		parts.push(
			rankedTable(getSectionLabel("date") ?? "Daily bandwidth", view.byDate),
		);
	}
	if (sections.hour) {
		parts.push(
			rankedTable(getSectionLabel("hour") ?? "Hourly bandwidth", view.byHour),
		);
	}
	if (sections.status) {
		parts.push(
			countTable(getSectionLabel("status") ?? "Response codes", view.byStatus),
		);
	}
	if (sections.histogram) {
		parts.push(
			countTable(
				getSectionLabel("histogram") ?? "Response size buckets",
				view.responseSizeHistogram,
			),
		);
	}
	if (sections.urls) parts.push(urlSectionsMarkdown(view));
	if (sections.referers) {
		parts.push(
			rankedTable(getSectionLabel("referers") ?? "Top referers", view.byReferer),
		);
	}
	if (sections.userAgents) {
		parts.push(
			userAgentTable(getSectionLabel("userAgents") ?? "Top user agents", view),
		);
	}
	if (sections.ips) {
		parts.push(rankedTable(getSectionLabel("ips") ?? "Top IPs", view.byIp));
	}

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

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
	ReportIssue,
	ReportSections,
} from "../types.js";
import { isMp4Url } from "./classify-url.js";
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

export interface GenerateMarkdownOptions {
	/** @deprecated Dual views removed; ignored. */
	view?: string;
}

export { markdownReportFilename, slugifyReportFilename };

export function escapeMarkdownCell(value: string): string {
	return value
		.replaceAll("|", "\\|")
		.replaceAll("\n", " ")
		.replaceAll("\r", "");
}

const MP4_WARNING = "consider HLS streaming instead of MP4";

function renderIssues(title: string, issues: ReportIssue[]): string {
	if (issues.length === 0) return "";

	const lines = [`### ${title} — Issues`, ""];
	for (const issue of issues) {
		lines.push(
			`- **[${issue.severity}]** ${issue.message}`,
			`  - Suggestion: ${issue.suggestion}`,
		);
	}
	lines.push("");
	return lines.join("\n");
}

function formatImageMetric(
	value: string | number | null,
	issue?: string,
): string {
	const base = formatNullableMetric(value);
	if (base === "—") return base;
	return issue ? `${base} (${issue})` : base;
}

function rankedRowMarkdownLine(row: RankedRow, label = row.label): string {
	return `| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`;
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
		lines.push(rankedRowMarkdownLine(row));
	}

	lines.push("");
	return lines.join("\n");
}

function rankedUrlSubtable(
	title: string,
	rows: RankedRow[],
	formatLabel: (row: RankedRow) => string,
): string {
	if (rows.length === 0) return "";

	const lines = [
		`### ${title}`,
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
		`### ${getSectionLabel("images") ?? "Images"}`,
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

function queryUrlTable(rows: RankedRow[]): string {
	return rankedUrlSubtable(
		getSectionLabel("queries") ?? "Queries",
		rows,
		(row) => {
			const issues = row.groq?.issues ?? [];
			if (issues.length === 0) return row.label;
			return `${row.label} (${issues.join("; ")})`;
		},
	);
}

function fileUrlTable(rows: RankedRow[]): string {
	return rankedUrlSubtable(
		getSectionLabel("files") ?? "Files",
		rows,
		(row) =>
			isMp4Url(row.label) ? `${row.label} (${MP4_WARNING})` : row.label,
	);
}

function userAgentTable(data: ReportData): string {
	const rows = data.userAgents.entries;
	if (rows.length === 0) return "";

	const stats = data.userAgents.userAgentStats;
	const lines = [
		`### ${getSectionLabel("userAgents") ?? "Top user agents"}`,
		"",
	];

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
		const parsed = data.userAgents.userAgentByLabel[row.label];
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

function renderSummary(data: ReportData): string {
	const period =
		data.dateStart && data.dateEnd
			? `${formatReadableDate(data.dateStart)} → ${formatReadableDate(data.dateEnd)}`
			: "No timestamps found";

	return [
		"## Summary",
		"",
		data.summary.message,
		"",
		`- Project: \`${data.projectId || "(unknown)"}\``,
		`- Requests: ${formatNumber(data.summary.requestCount)}`,
		`- Response bandwidth: ${formatBytes(data.summary.bandwidth)}`,
		`- Period: ${period}`,
		`- Studio requests: ${formatPercentage(data.summary.studioRequestPercent)}`,
		`- CDN delivery: ${formatPercentage(data.summary.cdnDeliveryPercent)}`,
		"",
	].join("\n");
}

function renderSections(data: ReportData, sections: ReportSections): string {
	const parts: string[] = [];

	if (sections.dailyBandwidth) {
		parts.push(
			rankedTable(
				getSectionLabel("dailyBandwidth") ?? "Daily bandwidth",
				data.dailyBandwidth.entries,
			),
			renderIssues("Daily bandwidth", data.dailyBandwidth.issues),
		);
	}
	if (sections.hourlyBandwidth) {
		parts.push(
			rankedTable(
				getSectionLabel("hourlyBandwidth") ?? "Hourly bandwidth",
				data.hourlyBandwidth.entries,
			),
			renderIssues("Hourly bandwidth", data.hourlyBandwidth.issues),
		);
	}
	if (sections.responseStatuses) {
		parts.push(
			countTable(
				getSectionLabel("responseStatuses") ?? "Response codes",
				data.responseStatuses.entries,
			),
			renderIssues("Response codes", data.responseStatuses.issues),
		);
	}
	if (sections.images) {
		parts.push(
			imageUrlTable(data.images.entries),
			renderIssues("Images", data.images.issues),
		);
	}
	if (sections.files) {
		parts.push(
			fileUrlTable(data.files.entries),
			renderIssues("Files", data.files.issues),
		);
	}
	if (sections.queries) {
		parts.push(
			queryUrlTable(data.queries.entries),
			renderIssues("Queries", data.queries.issues),
		);
	}
	if (sections.referrers) {
		parts.push(
			rankedTable(
				getSectionLabel("referrers") ?? "Top referrers",
				data.referrers.entries,
			),
		);
	}
	if (sections.userAgents) {
		parts.push(userAgentTable(data));
	}
	if (sections.ips) {
		parts.push(
			rankedTable(getSectionLabel("ips") ?? "Top IPs", data.ips.entries),
		);
	}

	return parts.filter(Boolean).join("\n");
}

export function renderReportMarkdown(data: ReportData): string {
	return [
		`# ${data.title}`,
		"",
		`- Source: \`${data.sourcePath}\``,
		`- Generated: ${data.generatedAt}`,
		`- Project: \`${data.projectId || "(unknown)"}\``,
		`- Max table rows: ${data.config.topN}`,
		"",
		renderSummary(data),
		renderSections(data, data.config.sections),
	].join("\n");
}

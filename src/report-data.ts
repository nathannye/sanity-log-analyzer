import { formatIsoDate } from "./format.js";
import { groupUrlsByKind } from "./report/group-urls-by-kind.js";
import { enrichReportData } from "./report/enrich-report.js";
import { percentOf } from "./report/summarize.js";
import type {
	AggregationSummary,
	Breakdown,
	CountRow,
	RankedRow,
	ReportConfig,
	ReportData,
	ReportDataInput,
} from "./types.js";

function topN(
	map: Record<string, Breakdown>,
	limit: number,
	sortBy: "responseBytes" | "requests" = "responseBytes",
): RankedRow[] {
	return Object.entries(map)
		.map(([label, value]) => ({ label, ...value }))
		.sort((a, b) =>
			sortBy === "responseBytes"
				? b.responseBytes - a.responseBytes
				: b.requests - a.requests,
		)
		.slice(0, limit);
}

function sortDateRows(map: Record<string, Breakdown>): RankedRow[] {
	return Object.entries(map)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([isoDate, value]) => ({
			label: formatIsoDate(isoDate),
			...value,
		}));
}

function sortHourRows(map: Record<number, Breakdown>): RankedRow[] {
	return Array.from({ length: 24 }, (_, hour) => ({
		label: `${hour.toString().padStart(2, "0")}:00`,
		...(map[hour] ?? { requests: 0, responseBytes: 0 }),
	}));
}

function toCountRows(map: Record<number, number>): CountRow[] {
	return Object.entries(map)
		.map(([label, count]) => ({ label, count }))
		.sort((a, b) => Number(a.label) - Number(b.label));
}

export function buildReportDataInput(
	summary: AggregationSummary,
	config: ReportConfig,
	sourcePath: string,
): ReportDataInput {
	const byUrl = topN(summary.byUrl, config.topN);
	const groups = groupUrlsByKind(byUrl);
	const requestCount = summary.totalRequests;

	return {
		title: config.title,
		sourcePath,
		generatedAt: new Date().toISOString(),
		projectId: summary.projectId,
		dateStart: summary.firstTimestamp ?? "",
		dateEnd: summary.lastTimestamp ?? "",
		config,
		summary: {
			bandwidth: summary.totalResponseBytes,
			requestCount,
			studioRequestPercent: percentOf(summary.studio.requests, requestCount),
			cdnDeliveryPercent: percentOf(summary.nonStudio.requests, requestCount),
			studioBandwidth: summary.studio.responseBytes,
			cdnBandwidth: summary.nonStudio.responseBytes,
		},
		images: { entries: groups.image },
		files: { entries: groups.file },
		queries: { entries: groups.query },
		responseStatuses: { entries: toCountRows(summary.byStatus) },
		responseSizes: { entries: summary.responseSizeHistogram, issues: [] },
		hourlyBandwidth: { entries: sortHourRows(summary.byHour), issues: [] },
		dailyBandwidth: { entries: sortDateRows(summary.byDate), issues: [] },
		referrers: { entries: topN(summary.byReferer, config.topN) },
		ips: { entries: topN(summary.byIp, config.topN) },
		userAgents: { entries: topN(summary.byUserAgent, config.topN) },
	};
}

export function buildReportData(
	summary: AggregationSummary,
	config: ReportConfig,
	sourcePath: string,
): ReportData {
	return enrichReportData(buildReportDataInput(summary, config, sourcePath));
}

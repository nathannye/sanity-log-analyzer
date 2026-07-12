import { streamLogEntries } from "./stream.js";
import {
	bucketLabelForBytes,
	createHistogramRows,
	DEFAULT_HISTOGRAM_BUCKETS,
} from "./response-size-buckets.js";
import type {
	AggregationSummary,
	Breakdown,
	CountRow,
	LogEntry,
	LogProgress,
	Totals,
} from "./types.js";

function createBreakdown(): Breakdown {
	return { requests: 0, responseBytes: 0 };
}

function createTotals(): Totals {
	return { requests: 0, responseBytes: 0, requestBytes: 0 };
}

export function createSummary(
	histogramBuckets: number[] = DEFAULT_HISTOGRAM_BUCKETS,
): AggregationSummary {
	return {
		projectId: "",
		totalRequests: 0,
		totalResponseBytes: 0,
		totalRequestBytes: 0,
		firstTimestamp: null,
		lastTimestamp: null,
		byDate: {},
		byHour: {},
		byUrl: {},
		byReferer: {},
		byUserAgent: {},
		byIp: {},
		studio: createTotals(),
		nonStudio: createTotals(),
		byStatus: {},
		responseSizeHistogram: createHistogramRows(histogramBuckets),
	};
}

function incrementBreakdown(
	map: Record<string, Breakdown>,
	key: string,
	responseBytes: number,
): void {
	const normalized = key || "(empty)";
	if (!map[normalized]) map[normalized] = createBreakdown();
	map[normalized].requests += 1;
	map[normalized].responseBytes += responseBytes;
}

function incrementHourBreakdown(
	map: Record<number, Breakdown>,
	hour: number,
	responseBytes: number,
): void {
	if (!map[hour]) map[hour] = createBreakdown();
	map[hour].requests += 1;
	map[hour].responseBytes += responseBytes;
}

function incrementStatus(map: Record<number, number>, status: number): void {
	map[status] = (map[status] ?? 0) + 1;
}

function incrementHistogramRow(rows: CountRow[], label: string | null): void {
	if (!label) return;

	const row = rows.find((entry) => entry.label === label);
	if (row) row.count += 1;
}

function accumulateEntry(
	summary: AggregationSummary,
	entry: LogEntry,
	histogramBuckets: number[],
): void {
	const responseBytes = entry.responseSize;
	const requestBytes = entry.requestSize;
	const studioRequest = entry.studioRequest;

	summary.totalRequests += 1;
	summary.totalResponseBytes += responseBytes;
	summary.totalRequestBytes += requestBytes;

	if (!summary.projectId && entry.projectId) {
		summary.projectId = entry.projectId;
	}

	if (entry.timestamp) {
		if (!summary.firstTimestamp) summary.firstTimestamp = entry.timestamp;
		summary.lastTimestamp = entry.timestamp;
	}

	incrementBreakdown(summary.byDate, entry.date, responseBytes);
	incrementHourBreakdown(summary.byHour, entry.hour, responseBytes);
	incrementBreakdown(summary.byUrl, entry.url, responseBytes);
	incrementBreakdown(summary.byReferer, entry.referer, responseBytes);
	incrementBreakdown(summary.byUserAgent, entry.userAgent, responseBytes);
	incrementBreakdown(summary.byIp, entry.remoteIp, responseBytes);

	if (studioRequest) {
		summary.studio.requests += 1;
		summary.studio.responseBytes += responseBytes;
		summary.studio.requestBytes += requestBytes;
	} else {
		summary.nonStudio.requests += 1;
		summary.nonStudio.responseBytes += responseBytes;
		summary.nonStudio.requestBytes += requestBytes;
	}

	incrementStatus(summary.byStatus, entry.status);
	incrementHistogramRow(
		summary.responseSizeHistogram,
		bucketLabelForBytes(responseBytes, histogramBuckets),
	);
}

export async function aggregateLogFile(
	inputPath: string,
	onProgress?: (progress: LogProgress) => void,
	histogramBuckets: number[] = DEFAULT_HISTOGRAM_BUCKETS,
): Promise<AggregationSummary> {
	const summary = createSummary(histogramBuckets);

	for await (const entry of streamLogEntries(inputPath, onProgress)) {
		accumulateEntry(summary, entry, histogramBuckets);
	}

	return summary;
}

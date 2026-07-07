import { streamLogEntries } from "./stream.js";
import type { AggregationSummary, Breakdown, LogEntry, Totals } from "./types.js";

function createBreakdown(): Breakdown {
  return { requests: 0, responseBytes: 0 };
}

function createTotals(): Totals {
  return { requests: 0, responseBytes: 0, requestBytes: 0 };
}

export function formatBucketLabel(lower: number, upper: number): string {
  const units = ["B", "KB", "MB", "GB", "TB"];
  const format = (value: number): string => {
    if (value === Infinity) return "∞";
    let scaled = value;
    let unitIndex = 0;
    while (scaled >= 1024 && unitIndex < units.length - 1) {
      scaled /= 1024;
      unitIndex += 1;
    }
    return unitIndex === 0
      ? `${Math.round(scaled)} ${units[unitIndex]}`
      : `${scaled.toFixed(0)} ${units[unitIndex]}`;
  };
  if (upper === Infinity) return `${format(lower)}+`;
  return `${format(lower)} - ${format(upper)}`;
}

export function createSummary(histogramBuckets: number[]): AggregationSummary {
  const histogram: Record<string, number> = {};
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    const label = formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]);
    histogram[label] = 0;
  }

  return {
    totalRequests: 0,
    totalResponseBytes: 0,
    totalRequestBytes: 0,
    firstTimestamp: null,
    lastTimestamp: null,
    byDomain: {},
    byEndpoint: {},
    byDate: {},
    byHour: {},
    byUrl: {},
    byReferer: {},
    byUserAgent: {},
    byIp: {},
    studio: createTotals(),
    nonStudio: createTotals(),
    byStatus: {},
    byStatusNonStudio: {},
    responseSizeHistogram: histogram,
    responseSizeHistogramNonStudio: { ...histogram },
    byDomainNonStudio: {},
    byEndpointNonStudio: {},
    byDateNonStudio: {},
    byHourNonStudio: {},
    byUrlNonStudio: {},
    byRefererNonStudio: {},
    byUserAgentNonStudio: {},
    byIpNonStudio: {},
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

function bucketForBytes(
  responseBytes: number,
  histogramBuckets: number[],
): string | null {
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    if (responseBytes < histogramBuckets[i + 1]) {
      return formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]);
    }
  }
  return histogramBuckets.length > 1
    ? formatBucketLabel(
        histogramBuckets[histogramBuckets.length - 2],
        histogramBuckets[histogramBuckets.length - 1],
      )
    : null;
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

  if (entry.timestamp) {
    if (!summary.firstTimestamp) summary.firstTimestamp = entry.timestamp;
    summary.lastTimestamp = entry.timestamp;
  }

  incrementBreakdown(summary.byDomain, entry.domain, responseBytes);
  incrementBreakdown(summary.byEndpoint, entry.endpoint, responseBytes);
  incrementBreakdown(summary.byDate, entry.date, responseBytes);
  incrementHourBreakdown(summary.byHour, entry.hour, responseBytes);
  incrementBreakdown(summary.byUrl, entry.url, responseBytes);
  incrementBreakdown(summary.byReferer, entry.referer, responseBytes);
  incrementBreakdown(summary.byUserAgent, entry.userAgent, responseBytes);
  incrementBreakdown(summary.byIp, entry.remoteIp, responseBytes);

  if (!studioRequest) {
    incrementBreakdown(summary.byDomainNonStudio, entry.domain, responseBytes);
    incrementBreakdown(summary.byEndpointNonStudio, entry.endpoint, responseBytes);
    incrementBreakdown(summary.byDateNonStudio, entry.date, responseBytes);
    incrementHourBreakdown(summary.byHourNonStudio, entry.hour, responseBytes);
    incrementBreakdown(summary.byUrlNonStudio, entry.url, responseBytes);
    incrementBreakdown(summary.byRefererNonStudio, entry.referer, responseBytes);
    incrementBreakdown(summary.byUserAgentNonStudio, entry.userAgent, responseBytes);
    incrementBreakdown(summary.byIpNonStudio, entry.remoteIp, responseBytes);
  }

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
  if (!studioRequest) {
    incrementStatus(summary.byStatusNonStudio, entry.status);
  }

  const bucket = bucketForBytes(responseBytes, histogramBuckets);
  if (bucket && summary.responseSizeHistogram[bucket] !== undefined) {
    summary.responseSizeHistogram[bucket] += 1;
  }
  if (
    !studioRequest &&
    bucket &&
    summary.responseSizeHistogramNonStudio[bucket] !== undefined
  ) {
    summary.responseSizeHistogramNonStudio[bucket] += 1;
  }
}

export async function aggregateLogFile(
  inputPath: string,
  histogramBuckets: number[],
  onProgress?: (count: number) => void,
): Promise<AggregationSummary> {
  const summary = createSummary(histogramBuckets);
  let lineCount = 0;

  for await (const entry of streamLogEntries(inputPath)) {
    accumulateEntry(summary, entry, histogramBuckets);
    lineCount += 1;
    if (lineCount % 100_000 === 0) onProgress?.(lineCount);
  }

  onProgress?.(lineCount);
  return summary;
}

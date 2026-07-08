import { streamLogEntries } from "./stream.js";
import { scaleBytes } from "./units.js";
import type {
  AggregationSummary,
  Breakdown,
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

export function formatBucketLabel(lower: number, upper: number): string {
  const format = (value: number): string => {
    if (value === Infinity) return "∞";
    const { scaled, unitIndex, unit } = scaleBytes(value, { decimals: 0 });
    return `${scaled} ${unit}`;
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

function bucketLabelsFor(histogramBuckets: number[]): string[] {
  const labels: string[] = [];
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    labels.push(formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]));
  }
  return labels;
}

function bucketIndex(responseBytes: number, histogramBuckets: number[]): number {
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    if (responseBytes < histogramBuckets[i + 1]) return i;
  }
  return Math.max(0, histogramBuckets.length - 2);
}

interface HistogramTracker {
  counts: number[];
  nonStudioCounts: number[];
}

function createHistogramTracker(bucketCount: number): HistogramTracker {
  return {
    counts: new Array<number>(bucketCount).fill(0),
    nonStudioCounts: new Array<number>(bucketCount).fill(0),
  };
}

function histogramToRecord(labels: string[], counts: number[]): Record<string, number> {
  const histogram: Record<string, number> = {};
  for (let i = 0; i < labels.length; i += 1) {
    histogram[labels[i]] = counts[i];
  }
  return histogram;
}

function accumulateEntry(
  summary: AggregationSummary,
  entry: LogEntry,
  histogramBuckets: number[],
  histogram: HistogramTracker,
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

  const bucket = bucketIndex(responseBytes, histogramBuckets);
  histogram.counts[bucket] += 1;
  if (!studioRequest) {
    histogram.nonStudioCounts[bucket] += 1;
  }
}

export async function aggregateLogFile(
  inputPath: string,
  histogramBuckets: number[],
  onProgress?: (progress: LogProgress) => void,
): Promise<AggregationSummary> {
  const summary = createSummary(histogramBuckets);
  const labels = bucketLabelsFor(histogramBuckets);
  const histogram = createHistogramTracker(labels.length);

  for await (const entry of streamLogEntries(inputPath, onProgress)) {
    accumulateEntry(summary, entry, histogramBuckets, histogram);
  }

  summary.responseSizeHistogram = histogramToRecord(labels, histogram.counts);
  summary.responseSizeHistogramNonStudio = histogramToRecord(
    labels,
    histogram.nonStudioCounts,
  );

  return summary;
}

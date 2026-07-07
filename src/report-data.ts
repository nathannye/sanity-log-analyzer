import type {
  AggregationSummary,
  Breakdown,
  CountRow,
  RankedRow,
  ReportConfig,
  ReportData,
  ReportView,
  Totals,
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
    .map(([label, value]) => ({ label, ...value }))
    .sort((a, b) => a.label.localeCompare(b.label));
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

function zeroTotals(): Totals {
  return { requests: 0, responseBytes: 0, requestBytes: 0 };
}

function viewFromSummary(
  label: string,
  summary: AggregationSummary,
  prefix: "" | "NonStudio",
  topLimit: number,
): ReportView {
  const responseHistogram = Object.entries(summary.responseSizeHistogram).map(
    ([bucketLabel, count]) => ({ label: bucketLabel, count }),
  );
  const responseHistogramNonStudio = Object.entries(
    summary.responseSizeHistogramNonStudio,
  ).map(([bucketLabel, count]) => ({ label: bucketLabel, count }));

  const byDomain = prefix
    ? topN(summary.byDomainNonStudio, topLimit)
    : topN(summary.byDomain, topLimit);
  const byEndpoint = prefix
    ? topN(summary.byEndpointNonStudio, topLimit)
    : topN(summary.byEndpoint, topLimit);
  const byDate = prefix ? sortDateRows(summary.byDateNonStudio) : sortDateRows(summary.byDate);
  const byHour = prefix ? sortHourRows(summary.byHourNonStudio) : sortHourRows(summary.byHour);
  const byUrl = prefix ? topN(summary.byUrlNonStudio, topLimit) : topN(summary.byUrl, topLimit);
  const byReferer = prefix
    ? topN(summary.byRefererNonStudio, topLimit)
    : topN(summary.byReferer, topLimit);
  const byUserAgent = prefix
    ? topN(summary.byUserAgentNonStudio, topLimit)
    : topN(summary.byUserAgent, topLimit);
  const byIp = prefix ? topN(summary.byIpNonStudio, topLimit) : topN(summary.byIp, topLimit);
  const byStatus = prefix
    ? toCountRows(summary.byStatusNonStudio)
    : toCountRows(summary.byStatus);

  return {
    label,
    requests: prefix ? summary.nonStudio.requests : summary.totalRequests,
    responseBytes: prefix ? summary.nonStudio.responseBytes : summary.totalResponseBytes,
    requestBytes: prefix ? summary.nonStudio.requestBytes : summary.totalRequestBytes,
    firstTimestamp: summary.firstTimestamp,
    lastTimestamp: summary.lastTimestamp,
    studio: prefix ? zeroTotals() : summary.studio,
    nonStudio: summary.nonStudio,
    byDomain,
    byEndpoint,
    byDate,
    byHour,
    byUrl,
    byReferer,
    byUserAgent,
    byIp,
    byStatus,
    responseSizeHistogram: prefix ? responseHistogramNonStudio : responseHistogram,
  };
}

export function buildReportData(
  summary: AggregationSummary,
  config: ReportConfig,
  sourcePath: string,
): ReportData {
  return {
    title: config.title,
    sourcePath,
    generatedAt: new Date().toISOString(),
    config,
    all: viewFromSummary("All requests", summary, "", config.topN),
    billable: viewFromSummary("Billable requests", summary, "NonStudio", config.topN),
  };
}

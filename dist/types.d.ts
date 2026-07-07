export interface LogEntry {
    timestamp: string;
    date: string;
    hour: number;
    method: string;
    insertId: string;
    duration: number;
    requestSize: number;
    responseSize: number;
    status: number;
    url: string;
    referer: string;
    userAgent: string;
    remoteIp: string;
    projectId: string;
    dataset: string;
    domain: string;
    endpoint: string;
    groqQueryIdentifier: string;
    apiVersion: string;
    tags: string[];
    studioRequest: boolean;
}
export interface Breakdown {
    requests: number;
    responseBytes: number;
}
export interface Totals extends Breakdown {
    requestBytes: number;
}
export interface ReportSections {
    domain: boolean;
    endpoint: boolean;
    date: boolean;
    hour: boolean;
    status: boolean;
    histogram: boolean;
    urls: boolean;
    referers: boolean;
    userAgents: boolean;
    ips: boolean;
    billableComparison: boolean;
}
export interface ReportConfig {
    title: string;
    topN: number;
    histogramBuckets: number[];
    palette: string[];
    sections: ReportSections;
}
export interface PartialReportConfig {
    title?: string;
    topN?: number;
    histogramBuckets?: number[];
    palette?: string[];
    sections?: Partial<ReportSections>;
}
export interface AggregationSummary {
    totalRequests: number;
    totalResponseBytes: number;
    totalRequestBytes: number;
    firstTimestamp: string | null;
    lastTimestamp: string | null;
    byDomain: Record<string, Breakdown>;
    byEndpoint: Record<string, Breakdown>;
    byDate: Record<string, Breakdown>;
    byHour: Record<number, Breakdown>;
    byUrl: Record<string, Breakdown>;
    byReferer: Record<string, Breakdown>;
    byUserAgent: Record<string, Breakdown>;
    byIp: Record<string, Breakdown>;
    studio: Totals;
    nonStudio: Totals;
    byStatus: Record<number, number>;
    byStatusNonStudio: Record<number, number>;
    responseSizeHistogram: Record<string, number>;
    responseSizeHistogramNonStudio: Record<string, number>;
    byDomainNonStudio: Record<string, Breakdown>;
    byEndpointNonStudio: Record<string, Breakdown>;
    byDateNonStudio: Record<string, Breakdown>;
    byHourNonStudio: Record<number, Breakdown>;
    byUrlNonStudio: Record<string, Breakdown>;
    byRefererNonStudio: Record<string, Breakdown>;
    byUserAgentNonStudio: Record<string, Breakdown>;
    byIpNonStudio: Record<string, Breakdown>;
}
export interface RankedRow extends Breakdown {
    label: string;
}
export interface CountRow {
    label: string;
    count: number;
}
export interface ReportView {
    label: string;
    requests: number;
    responseBytes: number;
    requestBytes: number;
    firstTimestamp: string | null;
    lastTimestamp: string | null;
    studio: Totals;
    nonStudio: Totals;
    byDomain: RankedRow[];
    byEndpoint: RankedRow[];
    byDate: RankedRow[];
    byHour: RankedRow[];
    byUrl: RankedRow[];
    byReferer: RankedRow[];
    byUserAgent: RankedRow[];
    byIp: RankedRow[];
    byStatus: CountRow[];
    responseSizeHistogram: CountRow[];
}
export interface ReportData {
    title: string;
    sourcePath: string;
    generatedAt: string;
    config: ReportConfig;
    all: ReportView;
    billable: ReportView;
}
export interface LogProgress {
    bytesRead: number;
    totalBytes: number;
    percent: number;
    entriesProcessed: number;
}
//# sourceMappingURL=types.d.ts.map
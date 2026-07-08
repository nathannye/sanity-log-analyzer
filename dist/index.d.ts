interface Breakdown {
    requests: number;
    responseBytes: number;
}
interface Totals extends Breakdown {
    requestBytes: number;
}
interface ReportSections {
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
interface ReportConfig {
    title: string;
    topN: number;
    histogramBuckets: number[];
    sections: ReportSections;
}
interface PartialReportConfig {
    title?: string;
    topN?: number;
    histogramBuckets?: number[];
    sections?: Partial<ReportSections>;
}
interface RankedRow extends Breakdown {
    label: string;
}
interface CountRow {
    label: string;
    count: number;
}
interface UrlKindBreakdown {
    image: Breakdown;
    file: Breakdown;
    query: Breakdown;
    other: Breakdown;
}
interface TopContributor {
    label: string;
    requests: number;
    responseBytes: number;
}
interface TopContributors {
    image?: TopContributor;
    file?: TopContributor;
    query?: TopContributor;
    referer?: TopContributor;
}
interface ReportView {
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
    byUrlKind: UrlKindBreakdown;
    topContributors: TopContributors;
    includesStudio: boolean;
}
interface ReportData {
    title: string;
    sourcePath: string;
    generatedAt: string;
    config: ReportConfig;
    all: ReportView;
    billable: ReportView;
}
interface LogProgress {
    bytesRead: number;
    totalBytes: number;
    percent: number;
    entriesProcessed: number;
}

type MarkdownView = "billable" | "all";
interface GenerateMarkdownOptions {
    /** Which report view to render. Defaults to `"billable"` (matches HTML default). */
    view?: MarkdownView;
}
declare function markdownReportFilename(data: ReportData, view: MarkdownView): string;

declare const DEFAULT_REPORT_CONFIG: ReportConfig;
declare function resolveReportConfig(input?: PartialReportConfig): ReportConfig;
declare function loadReportConfig(configPath?: string): Promise<ReportConfig>;

interface AnalyzeLogOptions {
    config?: PartialReportConfig;
    onProgress?: (progress: LogProgress) => void;
}
declare function analyzeLog(inputPath: string, options?: AnalyzeLogOptions): Promise<ReportData>;
declare function writeHtmlReport(report: ReportData, outputPath: string): Promise<void>;
declare function generateMarkdown(report: ReportData, options?: GenerateMarkdownOptions): string;
declare function writeMarkdownReport(report: ReportData, outputPath: string, options?: GenerateMarkdownOptions): Promise<void>;

export { type AnalyzeLogOptions, DEFAULT_REPORT_CONFIG, type GenerateMarkdownOptions, type LogProgress, type MarkdownView, type PartialReportConfig, type ReportConfig, type ReportData, type ReportSections, type ReportView, analyzeLog, generateMarkdown, loadReportConfig, markdownReportFilename, resolveReportConfig, writeHtmlReport, writeMarkdownReport };

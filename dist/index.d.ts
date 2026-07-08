interface GroqQueryStats {
    dereferences: number;
    projections: number;
    subqueries: number;
    spreads: number;
    arrayTraversals: number;
    functionCalls: Record<string, number>;
}

type DeviceKind = "desktop" | "mobile";
type OsFamily = "mac" | "windows" | "other";
interface ParsedUserAgent {
    /** Set when the UA has an explicit mobile/desktop signal and is a browser. */
    deviceKind: DeviceKind | null;
    osFamily: OsFamily | null;
    /** Browser traffic only; bots and HTTP clients are excluded from summary stats. */
    isTrackable: boolean;
    displayLabel: string;
    raw: string;
}
interface UserAgentAggregateStats {
    trackableRequests: number;
    macPct: number;
    windowsPct: number;
    mobilePct: number;
    desktopPct: number;
}

interface ReportInsight {
    text: string;
    kind: "fact" | "health" | "opportunity" | "synthesis";
}

type Tone = "green" | "yellow" | "red";

type HealthStatus = Tone;
type FindingId = "groq-spread" | "mp4-transfer" | "image-width" | "image-format" | "image-quality" | "status-5xx" | "status-4xx";
interface ReportProblem {
    id: FindingId;
    severity: "critical" | "warning";
    summary: string;
    suggestedFix?: string;
    requests?: number;
    responseBytes?: number;
}
interface ReportObservation {
    summary: string;
}
interface ReportHealthySignal {
    summary: string;
}
interface DistributionSegment {
    label: string;
    bytes: number;
    share: number;
}
interface ReportSummary {
    overallHealth: HealthStatus;
    critical: ReportProblem[];
    warnings: ReportProblem[];
    observations: ReportObservation[];
    healthy: ReportHealthySignal[];
    atAGlance: ReportInsight[];
    distribution: {
        totalBytes: number;
        segments: DistributionSegment[];
    };
    topContributors: TopContributors;
}

interface GroqUrlDetails {
    query: string;
    params: Record<string, unknown> | null;
    formattedQuery: string;
    highlightedQuery: string;
    stats: GroqQueryStats | null;
    hasSpreadOperator: boolean;
}
interface ReportMarkdown {
    billable: string;
    all: string;
}
type ReportViewInput = Omit<ReportView, "summary" | "userAgentByLabel" | "userAgentStats" | "groqByUrl">;
type ReportDataInput = Omit<ReportData, "markdown" | "all" | "billable"> & {
    all: ReportViewInput;
    billable: ReportViewInput;
    markdown?: ReportMarkdown;
};
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
    summary: ReportSummary;
    userAgentByLabel: Record<string, ParsedUserAgent>;
    userAgentStats: UserAgentAggregateStats;
    groqByUrl: Record<string, GroqUrlDetails>;
}
interface ReportData {
    title: string;
    sourcePath: string;
    generatedAt: string;
    config: ReportConfig;
    all: ReportView;
    billable: ReportView;
    markdown: ReportMarkdown;
}
interface LogProgress {
    bytesRead: number;
    totalBytes: number;
    percent: number;
    entriesProcessed: number;
}

declare function markdownReportFilename(data: ReportData, view: MarkdownView): string;

type MarkdownView = "billable" | "all";
interface GenerateMarkdownOptions {
    /** Which report view to render. Defaults to `"billable"` (matches HTML default). */
    view?: MarkdownView;
}

declare const DEFAULT_REPORT_CONFIG: ReportConfig;
declare function resolveReportConfig(input?: PartialReportConfig): ReportConfig;
declare function loadReportConfig(configPath?: string): Promise<ReportConfig>;

declare function enrichReportData(data: ReportDataInput): ReportData;

interface AnalyzeLogOptions {
    config?: PartialReportConfig;
    onProgress?: (progress: LogProgress) => void;
}
declare function analyzeLog(inputPath: string, options?: AnalyzeLogOptions): Promise<ReportData>;
declare function writeHtmlReport(report: ReportData, outputPath: string): Promise<void>;
declare function generateMarkdown(report: ReportData, options?: GenerateMarkdownOptions): string;
declare function writeMarkdownReport(report: ReportData, outputPath: string, options?: GenerateMarkdownOptions): Promise<void>;

export { type AnalyzeLogOptions, DEFAULT_REPORT_CONFIG, type GenerateMarkdownOptions, type LogProgress, type MarkdownView, type PartialReportConfig, type ReportConfig, type ReportData, type ReportSections, type ReportView, analyzeLog, enrichReportData, generateMarkdown, loadReportConfig, markdownReportFilename, resolveReportConfig, writeHtmlReport, writeMarkdownReport };

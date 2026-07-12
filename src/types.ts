import type { GroqQueryStats } from "./report/analyze-groq.js";
import type {
	ParsedUserAgent,
	UserAgentAggregateStats,
} from "./report/parse-user-agent.js";

export type { GroqQueryStats };

export type IssueSeverity = "critical" | "warn" | "passed";

export type FindingId =
	| "groq-spread"
	| "groq-perf"
	| "mp4-transfer"
	| "image-width"
	| "image-format"
	| "image-quality"
	| "status-5xx"
	| "status-4xx"
	| "studio-traffic"
	| "cdn-delivery";

export interface ReportIssue {
	id: FindingId;
	severity: IssueSeverity;
	message: string;
	suggestion: string;
	requests?: number;
	responseBytes?: number;
}

export interface RankedReportSection {
	entries: RankedRow[];
	issues: ReportIssue[];
}

export interface CountReportSection {
	entries: CountRow[];
	issues: ReportIssue[];
}

export interface ReportEntriesOnly {
	entries: RankedRow[];
}

export interface QueriesSection extends RankedReportSection {
	groqByUrl: Record<string, GroqUrlDetails>;
}

export interface UserAgentsSection extends ReportEntriesOnly {
	userAgentByLabel: Record<string, ParsedUserAgent>;
	userAgentStats: UserAgentAggregateStats;
}

export interface ReportSummaryBlock {
	message: string;
	bandwidth: number;
	requestCount: number;
	cdnDeliveryPercent: number;
	studioRequestPercent: number;
	studioBandwidth: number;
	cdnBandwidth: number;
	issues: ReportIssue[];
}

export interface GroqRowMetrics {
	projections: number;
	arrayTraversals: number;
	dereferences: number;
	issues: string[];
}

export interface GroqUrlDetails {
	query: string;
	params: Record<string, unknown> | null;
	formattedQuery: string;
	highlightedQuery: string;
	stats: GroqQueryStats | null;
	hasSpreadOperator: boolean;
}

export type ReportDataInput = Omit<
	ReportData,
	| "markdown"
	| "summary"
	| "images"
	| "files"
	| "queries"
	| "responseStatuses"
	| "responseSizes"
	| "hourlyBandwidth"
	| "dailyBandwidth"
	| "userAgents"
> & {
	summary: Omit<ReportSummaryBlock, "message" | "issues">;
	images: Omit<RankedReportSection, "issues"> & { issues?: ReportIssue[] };
	files: Omit<RankedReportSection, "issues"> & { issues?: ReportIssue[] };
	queries: Omit<QueriesSection, "issues" | "groqByUrl"> & {
		issues?: ReportIssue[];
		groqByUrl?: Record<string, GroqUrlDetails>;
	};
	responseStatuses: Omit<CountReportSection, "issues"> & {
		issues?: ReportIssue[];
	};
	responseSizes: Omit<CountReportSection, "issues"> & {
		issues?: ReportIssue[];
	};
	hourlyBandwidth: Omit<RankedReportSection, "issues"> & {
		issues?: ReportIssue[];
	};
	dailyBandwidth: Omit<RankedReportSection, "issues"> & {
		issues?: ReportIssue[];
	};
	userAgents: ReportEntriesOnly;
	markdown?: string;
};

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
	images: boolean;
	files: boolean;
	queries: boolean;
	responseStatuses: boolean;
	responseSizes: boolean;
	hourlyBandwidth: boolean;
	dailyBandwidth: boolean;
	referrers: boolean;
	userAgents: boolean;
	ips: boolean;
}

export interface ReportConfig {
	title: string;
	topN: number;
	histogramBuckets: number[];
	sections: ReportSections;
}

export interface PartialReportConfig {
	title?: string;
	topN?: number;
	histogramBuckets?: number[];
	sections?: Partial<ReportSections>;
}

export interface AggregationSummary {
	projectId: string;
	totalRequests: number;
	totalResponseBytes: number;
	totalRequestBytes: number;
	firstTimestamp: string | null;
	lastTimestamp: string | null;
	byDate: Record<string, Breakdown>;
	byHour: Record<number, Breakdown>;
	byUrl: Record<string, Breakdown>;
	byReferer: Record<string, Breakdown>;
	byUserAgent: Record<string, Breakdown>;
	byIp: Record<string, Breakdown>;
	studio: Totals;
	nonStudio: Totals;
	byStatus: Record<number, number>;
	responseSizeHistogram: CountRow[];
}

export interface RankedRow extends Breakdown {
	label: string;
	groq?: GroqRowMetrics;
}

export interface CountRow {
	label: string;
	count: number;
}

export interface ReportData {
	title: string;
	sourcePath: string;
	generatedAt: string;
	projectId: string;
	dateStart: string;
	dateEnd: string;
	config: ReportConfig;
	summary: ReportSummaryBlock;
	images: RankedReportSection;
	files: RankedReportSection;
	queries: QueriesSection;
	responseStatuses: CountReportSection;
	responseSizes: CountReportSection;
	hourlyBandwidth: RankedReportSection;
	dailyBandwidth: RankedReportSection;
	referrers: ReportEntriesOnly;
	ips: ReportEntriesOnly;
	userAgents: UserAgentsSection;
	markdown: string;
}

export interface LogProgress {
	bytesRead: number;
	totalBytes: number;
	percent: number;
	entriesProcessed: number;
}

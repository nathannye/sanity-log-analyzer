import type { ReportView } from "../types.js";
export type HealthStatus = "green" | "yellow" | "red";
export type FindingSeverity = "critical" | "warning" | "passed";
export type FindingId = "groq-spread" | "mp4-transfer" | "image-width" | "image-format" | "image-quality" | "image-bandwidth" | "status-5xx" | "status-4xx" | "response-size-concentration" | "hour-concentration" | "domain-concentration" | "endpoint-concentration";
export interface ReportFinding {
    id: FindingId;
    severity: FindingSeverity;
    title: string;
    summary: string;
    suggestedFix?: string;
    requests?: number;
    responseBytes?: number;
}
export interface ReportOpportunity {
    priority: "critical" | "warning";
    issue: string;
    impact: string;
    suggestedFix: string;
    responseBytes?: number;
    /** Only set when the bytes basis is explicitly measured from the issue rows. */
    estimatedSavingsBytes?: number;
}
export interface ReportSummary {
    overallHealth: HealthStatus;
    issueCounts: {
        critical: number;
        warning: number;
        passed: number;
    };
    findings: ReportFinding[];
    topOpportunities: ReportOpportunity[];
    /** Sum of opportunity estimatedSavingsBytes when any are present. */
    estimatedSavingsBytes?: number;
    signals: ReportFinding[];
}
export declare function buildReportSummary(view: ReportView): ReportSummary;
export declare function summaryHeadline(summary: ReportSummary): string;
//# sourceMappingURL=summarize.d.ts.map
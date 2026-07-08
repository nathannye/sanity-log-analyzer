import type { ReportViewInput, TopContributors } from "../types.js";
import { type ReportInsight } from "./narrative.js";
export type HealthStatus = "green" | "yellow" | "red";
export type FindingId = "groq-spread" | "mp4-transfer" | "image-width" | "image-format" | "image-quality" | "status-5xx" | "status-4xx";
export interface ReportProblem {
    id: FindingId;
    severity: "critical" | "warning";
    summary: string;
    suggestedFix?: string;
    requests?: number;
    responseBytes?: number;
}
export interface ReportObservation {
    summary: string;
}
export interface ReportHealthySignal {
    summary: string;
}
export interface DistributionSegment {
    label: string;
    bytes: number;
    share: number;
}
export interface ReportSummary {
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
export declare function buildReportSummary(view: ReportViewInput): ReportSummary;
export declare function summaryHeadline(summary: ReportSummary): string;

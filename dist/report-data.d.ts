import type { AggregationSummary, Breakdown, ReportConfig, ReportData, TopContributors, UrlKindBreakdown } from "./types.js";
export declare function computeUrlKindStats(map: Record<string, Breakdown>): {
    byUrlKind: UrlKindBreakdown;
    topContributors: Pick<TopContributors, "image" | "file" | "query">;
};
export declare function buildReportData(summary: AggregationSummary, config: ReportConfig, sourcePath: string): ReportData;
//# sourceMappingURL=report-data.d.ts.map
import type { LogProgress, PartialReportConfig, ReportData } from "./types.js";
export type { LogProgress, PartialReportConfig, ReportConfig, ReportData, ReportSections, ReportView, } from "./types.js";
export { resolveReportConfig, DEFAULT_REPORT_CONFIG } from "./config.js";
export interface AnalyzeLogOptions {
    config?: PartialReportConfig;
    onProgress?: (progress: LogProgress) => void;
}
export declare function analyzeLog(inputPath: string, options?: AnalyzeLogOptions): Promise<ReportData>;
export declare function writeHtmlReport(report: ReportData, outputPath: string): Promise<void>;
//# sourceMappingURL=index.d.ts.map
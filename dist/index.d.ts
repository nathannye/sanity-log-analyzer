import type { LogProgress, PartialReportConfig, ReportData } from "./types.js";
export { DEFAULT_REPORT_CONFIG, resolveReportConfig } from "./config.js";
export type { LogProgress, PartialReportConfig, ReportConfig, ReportData, ReportSections, ReportView, } from "./types.js";
export interface AnalyzeLogOptions {
    config?: PartialReportConfig;
    onProgress?: (progress: LogProgress) => void;
}
export declare function analyzeLog(inputPath: string, options?: AnalyzeLogOptions): Promise<ReportData>;
export declare function writeHtmlReport(report: ReportData, outputPath: string): Promise<void>;
//# sourceMappingURL=index.d.ts.map
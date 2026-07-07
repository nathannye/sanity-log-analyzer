import { type GenerateMarkdownOptions } from "./report/markdown.js";
import type { LogProgress, PartialReportConfig, ReportData } from "./types.js";
export { DEFAULT_REPORT_CONFIG, resolveReportConfig } from "./config.js";
export type { LogProgress, PartialReportConfig, ReportConfig, ReportData, ReportSections, ReportView, } from "./types.js";
export type { GenerateMarkdownOptions, MarkdownView } from "./report/markdown.js";
export { markdownReportFilename } from "./report/markdown.js";
export interface AnalyzeLogOptions {
    config?: PartialReportConfig;
    onProgress?: (progress: LogProgress) => void;
}
export declare function analyzeLog(inputPath: string, options?: AnalyzeLogOptions): Promise<ReportData>;
export declare function writeHtmlReport(report: ReportData, outputPath: string): Promise<void>;
export declare function generateMarkdown(report: ReportData, options?: GenerateMarkdownOptions): string;
export declare function writeMarkdownReport(report: ReportData, outputPath: string, options?: GenerateMarkdownOptions): Promise<void>;
//# sourceMappingURL=index.d.ts.map
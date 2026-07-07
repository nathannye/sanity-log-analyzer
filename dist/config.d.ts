import type { PartialReportConfig, ReportConfig } from "./types.js";
export declare const DEFAULT_REPORT_CONFIG: ReportConfig;
export declare function resolveReportConfig(input?: PartialReportConfig): ReportConfig;
export declare function loadReportConfig(configPath?: string): Promise<ReportConfig>;
//# sourceMappingURL=config.d.ts.map
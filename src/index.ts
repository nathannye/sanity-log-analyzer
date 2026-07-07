import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { aggregateLogFile } from "./aggregate.js";
import { resolveReportConfig } from "./config.js";
import { renderReportHtml } from "./report/render.js";
import { buildReportData } from "./report-data.js";
import type { LogProgress, PartialReportConfig, ReportData } from "./types.js";

export { DEFAULT_REPORT_CONFIG, resolveReportConfig } from "./config.js";
export type {
	LogProgress,
	PartialReportConfig,
	ReportConfig,
	ReportData,
	ReportSections,
	ReportView,
} from "./types.js";

export interface AnalyzeLogOptions {
	config?: PartialReportConfig;
	onProgress?: (progress: LogProgress) => void;
}

export async function analyzeLog(
	inputPath: string,
	options: AnalyzeLogOptions = {},
): Promise<ReportData> {
	const config = resolveReportConfig(options.config);
	const summary = await aggregateLogFile(
		inputPath,
		config.histogramBuckets,
		options.onProgress,
	);
	return buildReportData(summary, config, inputPath);
}

export async function writeHtmlReport(
	report: ReportData,
	outputPath: string,
): Promise<void> {
	const html = renderReportHtml(report);
	await mkdir(dirname(outputPath), { recursive: true });
	await writeFile(outputPath, html);
}

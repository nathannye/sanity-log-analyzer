import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { aggregateLogFile } from "./aggregate.js";
import { resolveReportConfig } from "./config.js";
import { buildReportData } from "./report-data.js";
import { renderReportHtml } from "./report/render.js";
export { resolveReportConfig, DEFAULT_REPORT_CONFIG } from "./config.js";
export async function analyzeLog(inputPath, options = {}) {
    const config = resolveReportConfig(options.config);
    const summary = await aggregateLogFile(inputPath, config.histogramBuckets, options.onProgress);
    return buildReportData(summary, config, inputPath);
}
export async function writeHtmlReport(report, outputPath) {
    const html = renderReportHtml(report);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
}
//# sourceMappingURL=index.js.map
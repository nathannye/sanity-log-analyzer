import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { aggregateLogFile } from "./aggregate.js";
import { resolveReportConfig } from "./config.js";
import { renderReportMarkdown, } from "./report/markdown.js";
import { renderReportHtml } from "./report/render.js";
import { buildReportData } from "./report-data.js";
export { DEFAULT_REPORT_CONFIG, resolveReportConfig } from "./config.js";
export { markdownReportFilename } from "./report/markdown.js";
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
export function generateMarkdown(report, options) {
    return renderReportMarkdown(report, options?.view ?? "billable");
}
export async function writeMarkdownReport(report, outputPath, options) {
    const markdown = generateMarkdown(report, options);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, markdown);
}
//# sourceMappingURL=index.js.map
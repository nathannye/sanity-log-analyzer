import type { ReportData } from "../types.js";

/**
 * Runtime implementation is provided by the Vite build at dist/report/render.js.
 * This stub exists so TypeScript can type-check imports before the report bundle is built.
 */
export function renderReportHtml(_data: ReportData): string {
	throw new Error("Report renderer not built. Run npm run build:report.");
}

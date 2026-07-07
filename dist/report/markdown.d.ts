import type { ReportData } from "../types.js";
export type MarkdownView = "billable" | "all";
export interface GenerateMarkdownOptions {
    /** Which report view to render. Defaults to `"billable"` (matches HTML default). */
    view?: MarkdownView;
}
export declare function escapeMarkdownCell(value: string): string;
export declare function slugifyReportFilename(title: string): string;
export declare function markdownReportFilename(data: ReportData, view: MarkdownView): string;
export declare function renderReportMarkdown(data: ReportData, viewKey: MarkdownView): string;
//# sourceMappingURL=markdown.d.ts.map
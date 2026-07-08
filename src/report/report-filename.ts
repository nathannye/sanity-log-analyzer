import type { ReportData } from "../types.js";
import type { MarkdownView } from "./markdown.js";

export function slugifyReportFilename(title: string): string {
	const slug = title
		.toLowerCase()
		.trim()
		.replaceAll(/[^\w\s-]/g, "")
		.replaceAll(/\s+/g, "-")
		.replaceAll(/-+/g, "-")
		.replace(/^-+|-+$/g, "");
	return slug || "report";
}

export function markdownReportFilename(
	data: ReportData,
	view: MarkdownView,
): string {
	const base = slugifyReportFilename(data.title);
	const suffix = view === "billable" ? "_billable-only" : "_all";
	return `${base}${suffix}.md`;
}

import type { ReportData } from "../types.js";

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

export function markdownReportFilename(data: ReportData): string {
	return `${slugifyReportFilename(data.title)}.md`;
}

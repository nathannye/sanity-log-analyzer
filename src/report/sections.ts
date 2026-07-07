import type { ReportSections } from "../types.js";

export interface TocSection {
	slug: string;
	label: string;
	children?: TocSection[];
}

const URL_TAB_CHILDREN: TocSection[] = [
	{ slug: "urls/image", label: "Images" },
	{ slug: "urls/file", label: "Files" },
	{ slug: "urls/query", label: "Queries" },
	{ slug: "urls/other", label: "Other" },
];

const TOC_SECTIONS: Array<{
	slug: string;
	label: string;
	configKey?: keyof ReportSections;
	children?: TocSection[];
}> = [
	{ slug: "summary", label: "Summary" },
	{ slug: "domain", label: "Top domains", configKey: "domain" },
	{ slug: "endpoint", label: "Top endpoints", configKey: "endpoint" },
	{ slug: "date", label: "Daily bandwidth", configKey: "date" },
	{ slug: "hour", label: "Hourly bandwidth", configKey: "hour" },
	{ slug: "status", label: "Response codes", configKey: "status" },
	{ slug: "histogram", label: "Response size buckets", configKey: "histogram" },
	{
		slug: "urls",
		label: "Top URLs",
		configKey: "urls",
		children: URL_TAB_CHILDREN,
	},
	{ slug: "referers", label: "Top referers", configKey: "referers" },
	{ slug: "userAgents", label: "Top user agents", configKey: "userAgents" },
	{ slug: "ips", label: "Top IPs", configKey: "ips" },
];

export function getVisibleTocSections(sections: ReportSections): TocSection[] {
	return TOC_SECTIONS.filter(
		(entry) => !entry.configKey || sections[entry.configKey],
	).map(({ slug, label, children }) => ({
		slug,
		label,
		children,
	}));
}

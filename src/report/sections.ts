import type { RankedRow, ReportSections } from "../types.js";
import {
	groupUrlsByKind,
	visibleUrlTabs,
	type UrlTab,
} from "./group-urls-by-kind.js";

export interface TocSection {
	slug: string;
	label: string;
	children?: TocSection[];
}

const URL_TAB_SLUGS: Record<UrlTab, string> = {
	image: "urls/image",
	file: "urls/file",
	query: "urls/query",
	other: "urls/other",
};

function getUrlTabChildren(urlRows?: RankedRow[]): TocSection[] {
	const tabs = visibleUrlTabs(groupUrlsByKind(urlRows ?? []));

	return tabs.map((tab) => ({
		slug: URL_TAB_SLUGS[tab.id],
		label: tab.label,
	}));
}

const TOC_SECTIONS: Array<{
	slug: string;
	label: string;
	configKey?: keyof ReportSections;
}> = [
	{ slug: "findings", label: "Findings" },
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
	},
	{ slug: "referers", label: "Top referers", configKey: "referers" },
	{ slug: "userAgents", label: "Top user agents", configKey: "userAgents" },
	{ slug: "ips", label: "Top IPs", configKey: "ips" },
];

export function getVisibleTocSections(
	sections: ReportSections,
	urlRows?: RankedRow[],
): TocSection[] {
	return TOC_SECTIONS.filter(
		(entry) => !entry.configKey || sections[entry.configKey],
	).map(({ slug, label }) => ({
		slug,
		label,
		children: slug === "urls" ? getUrlTabChildren(urlRows) : undefined,
	}));
}

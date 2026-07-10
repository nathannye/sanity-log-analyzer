import type { ReportSections } from "../types.js";

export interface TocSection {
	slug: string;
	label: string;
	children?: TocSection[];
}

export interface ReportSectionDefinition {
	slug: string;
	label: string;
	configKey?: keyof ReportSections;
}

export const REPORT_SECTIONS: ReportSectionDefinition[] = [
	{ slug: "summary", label: "Summary" },
	{ slug: "dailyBandwidth", label: "Daily bandwidth", configKey: "dailyBandwidth" },
	{ slug: "hourlyBandwidth", label: "Hourly bandwidth", configKey: "hourlyBandwidth" },
	{
		slug: "responseStatuses",
		label: "Response codes",
		configKey: "responseStatuses",
	},
	{ slug: "images", label: "Images", configKey: "images" },
	{ slug: "files", label: "Files", configKey: "files" },
	{ slug: "queries", label: "Queries", configKey: "queries" },
	{ slug: "traffic", label: "Traffic sources" },
];

export function getSectionLabel(slug: string): string | undefined {
	const top = REPORT_SECTIONS.find((section) => section.slug === slug);
	if (top) return top.label;

	const trafficLabels: Record<string, string> = {
		referrers: "Top referrers",
		ips: "Top IPs",
		userAgents: "Top user agents",
		"traffic/referrers": "Top referrers",
		"traffic/ips": "Top IPs",
		"traffic/userAgents": "Top user agents",
	};
	return trafficLabels[slug];
}

export function getVisibleTocSections(sections: ReportSections): TocSection[] {
	const result: TocSection[] = [];

	for (const entry of REPORT_SECTIONS) {
		if (entry.slug === "traffic") {
			const children: TocSection[] = [];
			if (sections.referrers) {
				children.push({ slug: "traffic/referrers", label: "Referrers" });
			}
			if (sections.ips) {
				children.push({ slug: "traffic/ips", label: "IPs" });
			}
			if (sections.userAgents) {
				children.push({ slug: "traffic/userAgents", label: "User agents" });
			}
			if (children.length > 0) {
				result.push({ slug: "traffic", label: entry.label, children });
			}
			continue;
		}

		if (!entry.configKey || sections[entry.configKey]) {
			result.push({ slug: entry.slug, label: entry.label });
		}
	}

	return result;
}

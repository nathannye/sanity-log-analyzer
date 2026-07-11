import type { ReportSections } from "../types.js";

export interface TocSection {
	slug: string;
	label: string;
	children?: TocSection[];
	collapsible?: boolean;
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
	{ slug: "queries", label: "GROQ queries", configKey: "queries" },
	{ slug: "traffic", label: "Requests" },
];

function pushIfEnabled(
	target: TocSection[],
	sections: ReportSections,
	entry: ReportSectionDefinition,
): void {
	if (!entry.configKey || sections[entry.configKey]) {
		target.push({ slug: entry.slug, label: entry.label });
	}
}

function pushGroup(
	result: TocSection[],
	slug: string,
	label: string,
	children: TocSection[],
): void {
	if (children.length === 0) return;
	result.push({ slug, label, children, collapsible: true });
}

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
	const bySlug = new Map(
		REPORT_SECTIONS.map((entry) => [entry.slug, entry] as const),
	);
	const result: TocSection[] = [];

	const summary = bySlug.get("summary");
	if (summary) {
		result.push({ slug: summary.slug, label: summary.label });
	}

	const bandwidthChildren: TocSection[] = [];
	for (const slug of ["dailyBandwidth", "hourlyBandwidth"] as const) {
		const entry = bySlug.get(slug);
		if (entry) pushIfEnabled(bandwidthChildren, sections, entry);
	}
	pushGroup(result, "bandwidth", "Bandwidth", bandwidthChildren);

	const responseChildren: TocSection[] = [];
	const responseStatuses = bySlug.get("responseStatuses");
	if (responseStatuses) {
		pushIfEnabled(responseChildren, sections, responseStatuses);
	}
	pushGroup(result, "responses", "Responses", responseChildren);

	const assetChildren: TocSection[] = [];
	for (const slug of ["images", "files", "queries"] as const) {
		const entry = bySlug.get(slug);
		if (entry) pushIfEnabled(assetChildren, sections, entry);
	}
	pushGroup(result, "assets", "Assets & queries", assetChildren);

	const requestChildren: TocSection[] = [];
	if (sections.referrers) {
		requestChildren.push({ slug: "traffic/referrers", label: "Referrers" });
	}
	if (sections.ips) {
		requestChildren.push({ slug: "traffic/ips", label: "IPs" });
	}
	if (sections.userAgents) {
		requestChildren.push({
			slug: "traffic/userAgents",
			label: "User agents",
		});
	}
	pushGroup(result, "requests", "Requests", requestChildren);

	return result;
}

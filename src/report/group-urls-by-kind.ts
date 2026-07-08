import type { RankedRow } from "../types.js";
import { classifyUrl } from "./classify-url.js";

export type UrlTab = "image" | "file" | "query" | "other";

export const URL_TABS: Array<{ id: UrlTab; label: string }> = [
	{ id: "image", label: "Images" },
	{ id: "file", label: "Files" },
	{ id: "query", label: "Queries" },
	{ id: "other", label: "Other" },
];

export function visibleUrlTabs(
	groups: Record<UrlTab, RankedRow[]>,
): Array<{ id: UrlTab; label: string }> {
	return URL_TABS.filter(
		(tab) => tab.id !== "other" || groups.other.length > 0,
	);
}

const EMPTY_GROUPS: Record<UrlTab, RankedRow[]> = {
	image: [],
	file: [],
	query: [],
	other: [],
};

export function groupUrlsByKind(rows: RankedRow[]): Record<UrlTab, RankedRow[]> {
	const groups: Record<UrlTab, RankedRow[]> = {
		image: [],
		file: [],
		query: [],
		other: [],
	};

	for (const row of rows) {
		const kind = classifyUrl(row.label);
		if (kind === "image") {
			groups.image.push(row);
		} else if (kind === "file" || kind === "video") {
			groups.file.push(row);
		} else if (kind === "query") {
			groups.query.push(row);
		} else {
			groups.other.push(row);
		}
	}

	return groups;
}

export function defaultUrlTab(
	groups: Record<UrlTab, RankedRow[]>,
): UrlTab {
	const order: UrlTab[] = ["image", "file", "query", "other"];
	for (const tab of order) {
		if (groups[tab].length > 0) return tab;
	}
	return "image";
}

export { EMPTY_GROUPS };

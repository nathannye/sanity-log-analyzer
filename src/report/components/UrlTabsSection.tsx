import type { RankedRow } from "../../types.js";
import {
	defaultUrlTab,
	groupUrlsByKind,
	type UrlTab,
} from "../group-urls-by-kind.js";
import styles from "./UrlTabsSection.module.css";
import { UrlDataTable } from "./UrlDataTable.js";

interface UrlTabsSectionProps {
	rows: RankedRow[];
	idPrefix: string;
}

const TABS: Array<{ id: UrlTab; label: string }> = [
	{ id: "image", label: "Images" },
	{ id: "file", label: "Files" },
	{ id: "query", label: "Queries" },
	{ id: "other", label: "Other" },
];

export function UrlTabsSection({ rows, idPrefix }: UrlTabsSectionProps) {
	const groups = groupUrlsByKind(rows);
	const activeTab = defaultUrlTab(groups);

	return (
		<section
			class={`card ${styles.section}`}
			data-section="urls"
			data-url-tabs
			data-default-url-tab={activeTab}
		>
			<h3 class="heading-3">Top URLs</h3>
			<div class={styles.tabList} role="tablist" aria-label="URL categories">
				{TABS.map((tab) => (
					<button
						key={tab.id}
						type="button"
						class={styles.tab}
						role="tab"
						data-url-tab={tab.id}
						aria-selected={tab.id === activeTab ? "true" : "false"}
						aria-controls={`${idPrefix}-panel-${tab.id}`}
					>
						{tab.label} ({groups[tab.id].length})
					</button>
				))}
			</div>
			{TABS.map((tab) => (
				<div
					key={tab.id}
					id={`${idPrefix}-panel-${tab.id}`}
					class={styles.panel}
					role="tabpanel"
					data-url-panel={tab.id}
					hidden={tab.id !== activeTab || undefined}
				>
					<UrlDataTable
						rows={groups[tab.id]}
						showFlyout={tab.id === "query"}
						idPrefix={`${idPrefix}-${tab.id}`}
					/>
				</div>
			))}
		</section>
	);
}

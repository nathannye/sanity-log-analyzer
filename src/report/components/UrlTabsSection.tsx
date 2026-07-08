import type { GroqUrlDetails, RankedRow } from "../../types.js";
import {
	defaultUrlTab,
	groupUrlsByKind,
	visibleUrlTabs,
} from "../group-urls-by-kind.js";
import { Button } from "./Button.js";
import { UrlDataTable } from "./UrlDataTable.js";

interface UrlTabsSectionProps {
	rows: RankedRow[];
	groqByUrl: Record<string, GroqUrlDetails>;
	idPrefix: string;
}

export function UrlTabsSection({ rows, groqByUrl, idPrefix }: UrlTabsSectionProps) {
	const groups = groupUrlsByKind(rows);
	const activeTab = defaultUrlTab(groups);
	const tabs = visibleUrlTabs(groups);

	return (
		<section
			class="card scroll-mt-20"
			data-section="urls"
			data-url-tabs
			data-default-url-tab={activeTab}
		>
			<h3 class="heading-3">Top URLs</h3>
			<div
				class="mt-12 flex flex-wrap gap-6"
				role="tablist"
				aria-label="URL categories"
			>
				{tabs.map((tab) => (
					<Button
						key={tab.id}
						variant="tab"
						role="tab"
						data-url-tab={tab.id}
						aria-selected={tab.id === activeTab ? "true" : "false"}
						aria-controls={`${idPrefix}-panel-${tab.id}`}
					>
						{tab.label} ({groups[tab.id].length})
					</Button>
				))}
			</div>
			{tabs.map((tab) => (
				<div
					key={tab.id}
					id={`${idPrefix}-panel-${tab.id}`}
					class="mt-12"
					role="tabpanel"
					data-url-panel={tab.id}
					hidden={tab.id !== activeTab || undefined}
				>
					<UrlDataTable
						rows={groups[tab.id]}
						showFlyout={tab.id === "query"}
						groqByUrl={groqByUrl}
						variant={
							tab.id === "image"
								? "image"
								: tab.id === "file"
									? "file"
									: "default"
						}
						idPrefix={`${idPrefix}-${tab.id}`}
					/>
				</div>
			))}
		</section>
	);
}

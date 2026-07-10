import type { ReportData } from "../../types.js";
import { Button } from "./Button.js";
import { DataTable } from "./DataTable.js";
import { RefererDataTable } from "./RefererDataTable.js";
import { UserAgentDataTable } from "./UserAgentDataTable.js";

interface TrafficTabsSectionProps {
	data: ReportData;
	showReferrers: boolean;
	showIps: boolean;
	showUserAgents: boolean;
}

type TrafficTab = "referrers" | "ips" | "userAgents";

export function TrafficTabsSection({
	data,
	showReferrers,
	showIps,
	showUserAgents,
}: TrafficTabsSectionProps) {
	const tabs: Array<{ id: TrafficTab; label: string }> = [];
	if (showReferrers) tabs.push({ id: "referrers", label: "Referrers" });
	if (showIps) tabs.push({ id: "ips", label: "IPs" });
	if (showUserAgents) tabs.push({ id: "userAgents", label: "User agents" });
	if (tabs.length === 0) return null;

	const activeTab = tabs[0].id;

	return (
		<section
			class="scroll-mt-20"
			data-section="traffic"
			data-url-tabs
			data-default-url-tab={activeTab}
			data-module="url-tabs"
		>
			<div class="heading-2 mb-12">Traffic sources</div>
			<div
				class="mb-12 flex flex-wrap gap-6"
				role="tablist"
				aria-label="Traffic sources"
			>
				{tabs.map((tab) => (
					<Button
						key={tab.id}
						variant="tab"
						role="tab"
						data-url-tab={tab.id}
						aria-selected={tab.id === activeTab ? "true" : "false"}
						aria-controls={`traffic-panel-${tab.id}`}
					>
						{tab.label}
					</Button>
				))}
			</div>
			{showReferrers ? (
				<div
					id="traffic-panel-referrers"
					role="tabpanel"
					data-url-panel="referrers"
					data-section="traffic/referrers"
					class="scroll-mt-20"
					hidden={activeTab !== "referrers" || undefined}
				>
					<RefererDataTable
						rows={data.referrers.entries}
					/>
				</div>
			) : null}
			{showIps ? (
				<div
					id="traffic-panel-ips"
					role="tabpanel"
					data-url-panel="ips"
					data-section="traffic/ips"
					class="scroll-mt-20"
					hidden={activeTab !== "ips" || undefined}
				>
					<DataTable
						hasCopyButton
						copyToastMessage="Copied IP"
						title="Top IPs"
						rows={data.ips.entries}
					/>
				</div>
			) : null}
			{showUserAgents ? (
				<div
					id="traffic-panel-userAgents"
					role="tabpanel"
					data-url-panel="userAgents"
					data-section="traffic/userAgents"
					class="scroll-mt-20"
					hidden={activeTab !== "userAgents" || undefined}
				>
					<UserAgentDataTable
						title="Top user agents"
						rows={data.userAgents.entries}
						userAgentByLabel={data.userAgents.userAgentByLabel}
						userAgentStats={data.userAgents.userAgentStats}
					/>
				</div>
			) : null}
		</section>
	);
}

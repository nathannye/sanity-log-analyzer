import { formatPercentage } from "../../format.js";
import type { RankedRow } from "../../types.js";
import type {
	ParsedUserAgent,
	UserAgentAggregateStats,
} from "../parse-user-agent.js";
import { DataTable } from "./DataTable.js";
import { DesktopIcon, MobileIcon } from "./icons.js";

interface UserAgentDataTableProps {
	title: string;
	rows: RankedRow[];
	userAgentByLabel: Record<string, ParsedUserAgent>;
	userAgentStats: UserAgentAggregateStats;
}

function isSanityUserAgent(raw: string): boolean {
	return /^@sanity/i.test(raw.trim());
}

function UserAgentLabel({
	raw,
	parsed,
}: {
	raw: string;
	parsed: ParsedUserAgent;
}) {
	return (
		<div class="flex min-w-0 flex-col gap-3">
			<div class="flex min-w-0 items-center gap-6">
				{parsed.deviceKind ? (
					<span
						class="inline-flex size-16 shrink-0 items-center justify-center text-muted [&>svg]:size-14"
						title={parsed.deviceKind === "mobile" ? "Mobile" : "Desktop"}
						aria-label={parsed.deviceKind === "mobile" ? "Mobile" : "Desktop"}
					>
						{parsed.deviceKind === "mobile" ? <MobileIcon /> : <DesktopIcon />}
					</span>
				) : null}
				<span class="min-w-0 truncate">
					{parsed.deviceKind
						? parsed.displayLabel
						: parsed.raw || parsed.displayLabel}
				</span>
				{isSanityUserAgent(raw) ? (
					<span class="badge-blue">Sanity client</span>
				) : null}
			</div>
			{parsed.deviceKind ? (
				<div
					class="truncate pl-22 leading-[1.35] text-muted"
					style={{ fontSize: "var(--text-size-xs)" }}
					title={parsed.raw}
				>
					{parsed.raw}
				</div>
			) : null}
		</div>
	);
}

function UserAgentSummary({ stats }: { stats: UserAgentAggregateStats }) {
	if (stats.trackableRequests === 0) return null;

	return (
		<div class="mt-12 flex flex-wrap gap-8">
			<span class="pill items-baseline gap-4 py-4 pr-9 pl-4">
				<strong class="body-2 font-semibold text-text">Mac</strong>
				{formatPercentage(stats.macPct)}
			</span>
			<span class="pill items-baseline gap-4 py-4 pr-9 pl-4">
				<strong class="body-2 font-semibold text-text">Windows</strong>
				{formatPercentage(stats.windowsPct)}
			</span>
			<span class="pill items-baseline gap-4 py-4 pr-9 pl-4">
				<strong class="body-2 font-semibold text-text">Mobile</strong>
				{formatPercentage(stats.mobilePct)}
			</span>
			<span class="pill items-baseline gap-4 py-4 pr-9 pl-4">
				<strong class="body-2 font-semibold text-text">Desktop</strong>
				{formatPercentage(stats.desktopPct)}
			</span>
		</div>
	);
}

export function UserAgentDataTable({
	title,
	rows,
	userAgentByLabel,
	userAgentStats,
}: UserAgentDataTableProps) {
	return (
		<DataTable
			title={title}
			rows={rows}
			header={<UserAgentSummary stats={userAgentStats} />}
			renderLabel={(row) => (
				<UserAgentLabel
					raw={row.label}
					parsed={userAgentByLabel[row.label]}
				/>
			)}
		/>
	);
}

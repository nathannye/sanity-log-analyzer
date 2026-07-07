import { formatPercentage } from "../../format.js";
import type { RankedRow } from "../../types.js";
import {
	aggregateUserAgentStats,
	parseUserAgent,
} from "../parse-user-agent.js";
import { DataTable } from "./DataTable.js";
import styles from "./UserAgentDataTable.module.css";

interface UserAgentDataTableProps {
	title: string;
	rows: RankedRow[];
}

function DesktopIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<rect x="2" y="3" width="20" height="14" rx="2" />
			<path d="M8 21h8" />
			<path d="M12 17v4" />
		</svg>
	);
}

function MobileIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<rect x="7" y="2" width="10" height="20" rx="2" />
		</svg>
	);
}

function UserAgentLabel({ raw }: { raw: string }) {
	const parsed = parseUserAgent(raw);

	return (
		<div class={styles.labelStack}>
			<div class={styles.labelHead}>
				{parsed.deviceKind ? (
					<span
						class={styles.deviceIcon}
						title={parsed.deviceKind === "mobile" ? "Mobile" : "Desktop"}
						aria-label={parsed.deviceKind === "mobile" ? "Mobile" : "Desktop"}
					>
						{parsed.deviceKind === "mobile" ? <MobileIcon /> : <DesktopIcon />}
					</span>
				) : null}
				<span class={styles.parsedLabel}>
					{parsed.deviceKind
						? parsed.displayLabel
						: parsed.raw || parsed.displayLabel}
				</span>
			</div>
			{parsed.deviceKind ? (
				<div class={styles.rawLabel} title={parsed.raw}>
					{parsed.raw}
				</div>
			) : null}
		</div>
	);
}

function UserAgentSummary({ rows }: { rows: RankedRow[] }) {
	const stats = aggregateUserAgentStats(rows);
	if (stats.trackableRequests === 0) return null;

	return (
		<div class={styles.summary}>
			<span class={styles.stat}>
				<strong>Mac</strong>
				{formatPercentage(stats.macPct)}
			</span>
			<span class={styles.stat}>
				<strong>Windows</strong>
				{formatPercentage(stats.windowsPct)}
			</span>
			<span class={styles.stat}>
				<strong>Mobile</strong>
				{formatPercentage(stats.mobilePct)}
			</span>
			<span class={styles.stat}>
				<strong>Desktop</strong>
				{formatPercentage(stats.desktopPct)}
			</span>
		</div>
	);
}

export function UserAgentDataTable({ title, rows }: UserAgentDataTableProps) {
	return (
		<DataTable
			title={title}
			rows={rows}
			header={<UserAgentSummary rows={rows} />}
			renderLabel={(row) => <UserAgentLabel raw={row.label} />}
		/>
	);
}

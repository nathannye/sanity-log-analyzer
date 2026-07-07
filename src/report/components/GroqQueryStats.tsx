import type { GroqQueryStats } from "../analyze-groq.js";
import styles from "./GroqQueryStats.module.css";

interface GroqQueryStatsViewProps {
	stats: GroqQueryStats;
}

const TOP_LEVEL_KEYS: Array<keyof Omit<GroqQueryStats, "functionCalls">> = [
	"dereferences",
	"projections",
	"subqueries",
	"spreads",
	"arrayTraversals",
];

function formatLabel(key: string): string {
	return key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
}

export function GroqQueryStatsView({ stats }: GroqQueryStatsViewProps) {
	const topEntries = TOP_LEVEL_KEYS.filter((key) => stats[key] > 0).sort(
		(a, b) => stats[b] - stats[a],
	);

	const functionEntries = Object.entries(stats.functionCalls)
		.filter(([, count]) => count > 0)
		.sort(([a], [b]) => a.localeCompare(b));

	if (topEntries.length === 0 && functionEntries.length === 0) {
		return <p class={styles.empty}>No structural features detected.</p>;
	}

	return (
		<dl class={styles.stats}>
			{topEntries.map((key) => (
				<div class={styles.row} key={key}>
					<dt>{formatLabel(key)}</dt>
					<dd class="num">{stats[key]}</dd>
				</div>
			))}
			{functionEntries.length > 0 ? (
				<div class={styles.group}>
					<div class={styles.groupLabel}>functionCalls</div>
					{functionEntries.map(([name, count]) => (
						<div class={styles.row} key={name}>
							<dt>{name}</dt>
							<dd class="num">{count}</dd>
						</div>
					))}
				</div>
			) : null}
		</dl>
	);
}

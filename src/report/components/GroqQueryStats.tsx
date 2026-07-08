import type { GroqQueryStats } from "../../types.js";

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
		return <p class="empty body-2">No structural features detected.</p>;
	}

	return (
		<dl class="m-0 grid gap-6">
			{topEntries.map((key) => (
				<div
					class="flex items-baseline justify-between gap-12 border-t border-border-subtle pt-6 first:border-t-0 first:pt-0"
					key={key}
				>
					<dt class="body-2 m-0 text-text">{formatLabel(key)}</dt>
					<dd class="num m-0">{stats[key]}</dd>
				</div>
			))}
			{functionEntries.length > 0 ? (
				<div class="mt-4 grid gap-4 border-t border-border-subtle pt-8">
					<div
						class="font-semibold text-text"
						style={{ fontSize: "var(--text-size-xs)" }}
					>
						functionCalls
					</div>
					{functionEntries.map(([name, count]) => (
						<div
							class="flex items-baseline justify-between gap-12"
							key={name}
						>
							<dt class="body-2 m-0 text-muted">{name}</dt>
							<dd class="num m-0">{count}</dd>
						</div>
					))}
				</div>
			) : null}
		</dl>
	);
}

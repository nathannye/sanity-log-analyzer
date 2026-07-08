import { formatNumber } from "../../format.js";
import type { CountRow } from "../../types.js";

interface CountBarsProps {
	title: string;
	rows: CountRow[];
	accent: string;
}

export function CountBars({ title, rows, accent }: CountBarsProps) {
	const max = rows.reduce((largest, row) => Math.max(largest, row.count), 0);

	return (
		<section class="card">
			<h3 class="heading-3">{title}</h3>
			<div class="mt-12 grid gap-10">
				{rows.map((row) => {
					const pct = max > 0 ? (row.count / max) * 100 : 0;
					return (
						<div class="grid gap-6" key={row.label}>
							<div class="flex items-baseline justify-between gap-16">
								<span class="min-w-0 truncate text-text">{row.label}</span>
								<span class="num shrink-0">{formatNumber(row.count)}</span>
							</div>
							<div class="h-10 w-full overflow-hidden rounded-pill bg-track">
								<div
									class="h-full rounded-[inherit]"
									style={{ width: `${pct.toFixed(2)}%`, background: accent }}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

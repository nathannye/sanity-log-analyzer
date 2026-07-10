import type { ComponentChildren } from "preact";

interface HorizontalBarListProps<T> {
	title: string;
	rows: T[];
	accent: string;
	getLabel: (row: T) => string;
	getValue: (row: T) => number;
	formatValue: (row: T) => ComponentChildren;
}

export function HorizontalBarList<T>({
	title,
	rows,
	accent,
	getLabel,
	getValue,
	formatValue,
}: HorizontalBarListProps<T>) {
	const max = rows.reduce(
		(largest, row) => Math.max(largest, getValue(row)),
		0,
	);

	return (
		<section class="card">
			<h3 class="heading-3">{title}</h3>
			<div class="mt-12 grid gap-10">
				{rows.map((row) => {
					const value = getValue(row);
					const pct = max > 0 ? (value / max) * 100 : 0;
					const label = getLabel(row);

					return (
						<div class="grid gap-6" key={label}>
							<div class="flex items-baseline justify-between gap-16">
								<span class="min-w-0 truncate text-primary" title={label}>
									{label}
								</span>
								<span class="num shrink-0">{formatValue(row)}</span>
							</div>
							<div class="h-10 w-full overflow-hidden rounded-pill bg-primary/8">
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

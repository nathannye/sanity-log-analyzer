import {
	BAR_AREA_REM,
	buildAxisTicks,
	LABEL_AREA_REM,
} from "../vertical-bar-chart.js";

export interface VerticalBarChartRow {
	label: string;
	value: number;
	tip: string;
}

interface VerticalBarChartProps {
	title: string;
	rows: VerticalBarChartRow[];
	accent: string;
	emptyMessage: string;
	axisMax: number;
	formatAxisTick: (value: number) => string;
}

export function VerticalBarChart({
	title,
	rows,
	accent,
	emptyMessage,
	axisMax,
	formatAxisTick,
}: VerticalBarChartProps) {
	const ticks = buildAxisTicks(axisMax);

	return (
		<section>
			<h3 class="heading-3 mb-20">{title}</h3>
			{rows.length === 0 ? (
				<p class="empty body-2 mt-12">{emptyMessage}</p>
			) : (
				<div class="mt-12 flex min-h-0 gap-8">
					<div
						class="mb-32 flex h-268 w-56 shrink-0 flex-col justify-between"
						aria-hidden="true"
					>
						{ticks
							.slice()
							.reverse()
							.map((tick) => (
								<span
									key={tick}
									class="eyebrow-1 text-right leading-none tabular-nums text-muted"
								>
									{formatAxisTick(tick)}
								</span>
							))}
					</div>
					<div class="min-w-0 flex-1">
						<div class="relative h-300 max-h-300">
							{ticks.map((tick) => (
								<div
									key={tick}
									class="pointer-events-none absolute right-0 left-0 h-0 border-t border-primary/6"
									style={{
										bottom: `${LABEL_AREA_REM + (tick / axisMax) * BAR_AREA_REM}rem`,
									}}
								/>
							))}
							<div class="relative z-1 box-border flex h-full items-stretch gap-4 overflow-x-auto pb-0">
								{rows.map((row) => {
									const heightPct =
										axisMax > 0
											? Math.min((row.value / axisMax) * 100, 100)
											: 0;

									return (
										<div
											key={row.label}
											class="barColumn relative flex min-h-0 min-w-16 flex-1 flex-col items-stretch"
											data-tip={row.tip}
										>
											<div class="flex min-h-0 flex-1 items-end">
												<div
													class="bar w-full min-h-2 rounded-t-sm"
													style={{
														height: `${heightPct.toFixed(2)}%`,
														background: accent,
													}}
												/>
											</div>
											<span
												class="mt-8 h-24 max-w-full shrink-0 truncate text-center leading-[1.2] text-muted"
												style={{ fontSize: "var(--text-size-xs)" }}
												title={row.label}
											>
												{row.label}
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

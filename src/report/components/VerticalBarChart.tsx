import {
	BAR_AREA_REM,
	buildAxisTicks,
	LABEL_AREA_REM,
} from "../vertical-bar-chart.js";
import styles from "./VerticalBarChart.module.css";

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
		<section class="card">
			<h3 class="heading-3">{title}</h3>
			{rows.length === 0 ? (
				<p class={styles.empty}>{emptyMessage}</p>
			) : (
				<div class={styles.chart}>
					<div class={styles.yAxis} aria-hidden="true">
						{ticks
							.slice()
							.reverse()
							.map((tick) => (
								<span key={tick} class={styles.yTick}>
									{formatAxisTick(tick)}
								</span>
							))}
					</div>
					<div class={styles.plotArea}>
						<div class={styles.barRegion}>
							{ticks.map((tick) => (
								<div
									key={tick}
									class={styles.gridLine}
									style={{
										bottom: `${LABEL_AREA_REM + (tick / axisMax) * BAR_AREA_REM}rem`,
									}}
								/>
							))}
							<div class={styles.bars}>
								{rows.map((row) => {
									const heightPct =
										axisMax > 0
											? Math.min((row.value / axisMax) * 100, 100)
											: 0;

									return (
										<div
											key={row.label}
											class={styles.barColumn}
											data-tip={row.tip}
										>
											<div class={styles.barTrack}>
												<div
													class={styles.bar}
													style={{
														height: `${heightPct.toFixed(2)}%`,
														background: accent,
													}}
												/>
											</div>
											<span class={styles.xLabel} title={row.label}>
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

import { formatNumber } from "../../format.js";
import type { CountRow } from "../../types.js";
import { niceAxisMax } from "../vertical-bar-chart.js";
import { VerticalBarChart } from "./VerticalBarChart.js";

interface CountBarChartProps {
	title: string;
	rows: CountRow[];
	accent: string;
}

function formatAxisCount(value: number): string {
	return formatNumber(Math.round(value));
}

export function CountBarChart({ title, rows, accent }: CountBarChartProps) {
	const maxCount = rows.reduce(
		(largest, row) => Math.max(largest, row.count),
		0,
	);
	const axisMax = niceAxisMax(maxCount);

	return (
		<VerticalBarChart
			title={title}
			accent={accent}
			emptyMessage="No response code data in this range."
			axisMax={axisMax}
			formatAxisTick={formatAxisCount}
			rows={rows.map((row) => ({
				label: row.label,
				value: row.count,
				tip: `${formatNumber(row.count)} requests`,
			}))}
		/>
	);
}

import { formatBytes, formatNumber } from "../../format.js";
import type { RankedRow } from "../../types.js";
import { niceAxisMax } from "../vertical-bar-chart.js";
import { VerticalBarChart } from "./VerticalBarChart.js";

interface BandwidthBarChartProps {
	title: string;
	rows: RankedRow[];
	accent: string;
}

const GIB = 1024 ** 3;

function bytesToGib(bytes: number): number {
	return bytes / GIB;
}

function gibToBytes(gib: number): number {
	return gib * GIB;
}

function formatAxisGib(bytes: number): string {
	const gib = bytesToGib(bytes);
	if (gib >= 100) return `${gib.toFixed(0)} GB`;
	if (gib >= 10) return `${gib.toFixed(1)} GB`;
	if (gib >= 1) return `${gib.toFixed(2)} GB`;
	if (gib >= 0.01) return `${gib.toFixed(3)} GB`;
	if (gib > 0) return `${gib.toFixed(4)} GB`;
	return "0 GB";
}

export function BandwidthBarChart({
	title,
	rows,
	accent,
}: BandwidthBarChartProps) {
	const maxBytes = rows.reduce(
		(largest, row) => Math.max(largest, row.responseBytes),
		0,
	);
	const axisMax = niceAxisMax(maxBytes, gibToBytes(0.001));

	return (
		<VerticalBarChart
			title={title}
			accent={accent}
			emptyMessage="No bandwidth data in this range."
			axisMax={axisMax}
			formatAxisTick={formatAxisGib}
			rows={rows.map((row) => ({
				label: row.label,
				value: row.responseBytes,
				tip: `${formatBytes(row.responseBytes)} · ${formatNumber(row.requests)} requests`,
			}))}
		/>
	);
}

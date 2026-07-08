import { formatBytes, formatPercentage } from "../../format.js";
import { styleForShare, styleForSlices } from "../utils/styleForShare.js";
import styles from "./Donut.module.css";

export interface DonutSlice {
	label: string;
	value: number;
	color?: string;
}

interface DonutColors {
	primary: string;
	secondary: string;
}

interface DonutProps {
	title: string;
	slices?: DonutSlice[];
	primary?: DonutSlice;
	secondary?: DonutSlice;
	colors?: DonutColors;
	centerNote?: string;
	embedded?: boolean;
}

type ColoredDonutSlice = DonutSlice & { color: string; share: number };

function DonutLegend({ slices }: { slices: ColoredDonutSlice[] }) {
	return (
		<div class="body-1 grid w-full gap-10 text-muted">
			{slices.map((slice) => (
				<div key={slice.label}>
					<span
						class="mr-8 inline-block size-11 rounded-pill align-[-0.1rem]"
						style={{ background: slice.color }}
					/>
					{slice.label}{" "}
					<strong class="text-text">{formatBytes(slice.value)}</strong>
					<span class="num"> • {formatPercentage(slice.share)}</span>
				</div>
			))}
		</div>
	);
}

function DonutChart({
	slices,
	centerLabel,
	centerNote,
	embedded = false,
}: {
	slices: ColoredDonutSlice[];
	centerLabel: string;
	centerNote?: string;
	embedded?: boolean;
}) {
	return (
		<div
			class={
				embedded
					? "grid justify-items-center gap-16"
					: "mt-12 grid justify-items-center gap-16"
			}
		>
			<div
				class={`${styles.donut} relative grid aspect-square w-full max-w-[24rem] place-items-center rounded-full p-22`}
				style={styleForSlices(slices)}
			>
				<div class="body-1 relative z-1 grid justify-items-center gap-4 text-center">
					<strong class="heading-4">{centerLabel}</strong>
					{centerNote ? <span class="text-muted">{centerNote}</span> : null}
				</div>
			</div>
			<DonutLegend slices={slices} />
		</div>
	);
}

export function Donut({
	title,
	slices,
	primary,
	secondary,
	colors,
	centerNote,
	embedded = false,
}: DonutProps) {
	if (slices && slices.length > 0) {
		const total = slices.reduce((sum, slice) => sum + slice.value, 0);
		const coloredSlices: ColoredDonutSlice[] = slices.map((slice) => ({
			...slice,
			color: slice.color ?? "var(--color-track)",
			share: total > 0 ? (slice.value / total) * 100 : 0,
		}));

		const chart = (
			<DonutChart
				slices={coloredSlices}
				centerLabel={formatBytes(total)}
				centerNote={centerNote}
				embedded={embedded}
			/>
		);

		if (embedded) return chart;

		return (
			<article class="card h-full">
				<h3 class="heading-3">{title}</h3>
				{chart}
			</article>
		);
	}

	if (!primary || !secondary || !colors) {
		return null;
	}

	const total = primary.value + secondary.value;
	const primaryPct = total > 0 ? (primary.value / total) * 100 : 0;
	const splitSlices: ColoredDonutSlice[] = [
		{
			...primary,
			color: colors.primary,
			share: primaryPct,
		},
		{
			...secondary,
			color: colors.secondary,
			share: total > 0 ? (secondary.value / total) * 100 : 0,
		},
	];

	const chart = (
		<div
			class={
				embedded
					? "grid justify-items-center gap-16"
					: "mt-12 grid justify-items-center gap-16"
			}
		>
			<div
				class={`${styles.donut} relative grid aspect-square w-full place-items-center rounded-full p-22`}
				style={styleForShare(
					primary.value,
					secondary.value,
					colors.primary,
					colors.secondary,
				)}
			>
				<div class="body-1 relative z-1 grid justify-items-center gap-4 text-center">
					<strong class="heading-4">{formatBytes(total)}</strong>
					<span>{formatPercentage(primaryPct)}</span>
				</div>
			</div>
			<DonutLegend slices={splitSlices} />
		</div>
	);

	if (embedded) return chart;

	return (
		<article class="card">
			<h3 class="heading-3">{title}</h3>
			{chart}
		</article>
	);
}

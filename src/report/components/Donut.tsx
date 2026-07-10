import { formatBytes, formatPercentage } from "../../format.js";
import { styleForShare, styleForSlices } from "../utils/styleForShare.js";

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
	formatValue?: (value: number) => string;
	minorSlices?: DonutSlice[];
	minorHeader?: string;
}

type ColoredDonutSlice = DonutSlice & { color: string; share: number };

function DonutLegend({
	slices,
	formatValue,
	minorSlices = [],
	minorHeader,
}: {
	slices: ColoredDonutSlice[];
	formatValue: (value: number) => string;
	minorSlices?: Array<DonutSlice & { share: number }>;
	minorHeader?: string;
}) {
	return (
		<div class="body-1 grid w-full gap-10 text-muted">
			{slices.map((slice) => (
				<div key={slice.label}>
					<span
						class="mr-8 inline-block size-11 rounded-pill align-[-0.1rem]"
						style={{ background: slice.color }}
					/>
					{slice.label}{" "}
					<strong class="text-text">{formatValue(slice.value)}</strong>
					<span class="num"> • {formatPercentage(slice.share)}</span>
				</div>
			))}
			{minorSlices.length > 0 ? (
				<div class="grid gap-10">
					{minorHeader ? (
						<div class="eyebrow-1 text-muted">{minorHeader}</div>
					) : null}
					{minorSlices.map((slice) => (
						<div key={slice.label}>
							{slice.label}{" "}
							<strong class="text-text">{formatValue(slice.value)}</strong>
							<span class="num"> • {formatPercentage(slice.share)}</span>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}

function DonutChart({
	slices,
	centerLabel,
	centerNote,
	formatValue,
	minorSlices,
	minorHeader,
	embedded = false,
}: {
	slices: ColoredDonutSlice[];
	centerLabel: string;
	centerNote?: string;
	formatValue: (value: number) => string;
	minorSlices?: Array<DonutSlice & { share: number }>;
	minorHeader?: string;
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
				class="donut relative grid aspect-square w-full max-w-[24rem] place-items-center rounded-full p-22"
				style={styleForSlices(slices)}
			>
				<div class="body-1 relative z-1 grid justify-items-center gap-4 text-center">
					<strong class="heading-4">{centerLabel}</strong>
					{centerNote ? <span class="text-muted">{centerNote}</span> : null}
				</div>
			</div>
			<DonutLegend
				slices={slices}
				formatValue={formatValue}
				minorSlices={minorSlices}
				minorHeader={minorHeader}
			/>
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
	formatValue = formatBytes,
	minorSlices = [],
	minorHeader,
}: DonutProps) {
	if ((slices && slices.length > 0) || minorSlices.length > 0) {
		const chartSlices = slices ?? [];
		const chartTotal = chartSlices.reduce((sum, slice) => sum + slice.value, 0);
		const minorTotal = minorSlices.reduce((sum, slice) => sum + slice.value, 0);
		const total = chartTotal + minorTotal;
		const coloredSlices: ColoredDonutSlice[] = chartSlices.map((slice) => ({
			...slice,
			color: slice.color ?? "var(--color-track)",
			share: total > 0 ? (slice.value / total) * 100 : 0,
		}));
		const minorWithShare = minorSlices.map((slice) => ({
			...slice,
			share: total > 0 ? (slice.value / total) * 100 : 0,
		}));

		const chart = (
			<DonutChart
				slices={coloredSlices}
				centerLabel={formatValue(total)}
				centerNote={centerNote}
				formatValue={formatValue}
				minorSlices={minorWithShare}
				minorHeader={minorHeader}
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
				class="donut relative grid aspect-square w-full place-items-center rounded-full p-22"
				style={styleForShare(
					primary.value,
					secondary.value,
					colors.primary,
					colors.secondary,
				)}
			>
				<div class="body-1 relative z-1 grid justify-items-center gap-4 text-center">
					<strong class="heading-4">{formatValue(total)}</strong>
					<span>{formatPercentage(primaryPct)}</span>
				</div>
			</div>
			<DonutLegend slices={splitSlices} formatValue={formatValue} />
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

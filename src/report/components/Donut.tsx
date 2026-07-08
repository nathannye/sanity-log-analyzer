import { formatBytes, formatPercentage } from "../../format.js";
import { styleForShare } from "../utils/styleForShare.js";
import styles from "./Donut.module.css";

interface DonutSlice {
	label: string;
	value: number;
}

interface DonutColors {
	primary: string;
	secondary: string;
}

interface DonutProps {
	title: string;
	primary: DonutSlice;
	secondary: DonutSlice;
	colors: DonutColors;
}

export function Donut({ title, primary, secondary, colors }: DonutProps) {
	const total = primary.value + secondary.value;
	const primaryPct = total > 0 ? (primary.value / total) * 100 : 0;

	return (
		<article class="card">
			<h3 class="heading-3">{title}</h3>
			<div class="mt-12 grid justify-items-center gap-16">
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
				<div class="body-1 grid w-full gap-10 text-muted">
					<div>
						<span
							class="mr-8 inline-block size-11 rounded-pill align-[-0.1rem]"
							style={{ background: colors.primary }}
						/>
						{primary.label}{" "}
						<strong class="text-text">{formatBytes(primary.value)}</strong>
					</div>
					<div>
						<span
							class="mr-8 inline-block size-11 rounded-pill align-[-0.1rem]"
							style={{ background: colors.secondary }}
						/>
						{secondary.label}{" "}
						<strong class="text-text">{formatBytes(secondary.value)}</strong>
					</div>
				</div>
			</div>
		</article>
	);
}

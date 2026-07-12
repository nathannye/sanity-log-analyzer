import cx from "classix"
import { Tone, toneClasses } from "./tone";

const TONE_DONUT_COLOR: Record<Tone, string> = {
	green: "var(--color-green)",
	yellow: "var(--color-ylw)",
	red: "var(--color-red)",
};

function PercentageDonut({ percentage, tone }: { percentage: number; tone?: Tone }) {
	const clamped = Math.min(100, Math.max(0, percentage));
	const fill = tone ? TONE_DONUT_COLOR[tone] : "var(--color-green)";
	const track = "color-mix(in srgb, var(--color-inverted) 10%, transparent)";
	const mask =
		"radial-gradient(farthest-side, transparent calc(100% - 2.85px), #000 calc(100% - 2.85px))";

	return (
		<span
			class="size-13 shrink-0 rounded-full"
			style={{
				background: `conic-gradient(${fill} 0 ${clamped}%, ${track} ${clamped}% 100%)`,
				maskImage: mask,
				WebkitMaskImage: mask,
			}}
			aria-hidden="true"
		/>
	);
}

export function StatCard({
	label,
	value,
	tone,
	percentage,
	className,
}: {
	label: string;
	value: string;
	tone?: Tone;
	percentage?: number;
	className?: string;
}) {
	return (
		<div
			class={cx(
				"flex items-center gap-8 rounded-sm py-8 px-10",
				tone
					? toneClasses(tone)
					: "bg-primary/7 border-primary/7 border",
				className,
			)}
		>
			<dt class="eyebrow-1 shrink-0 min-w-grid-1-w text-muted">{label}</dt>
			<dd class="flex w-full items-center gap-6 body-1">
				{percentage != null ? (
					<PercentageDonut percentage={percentage} tone={tone} />
				) : null}
				{value || "N/A"}
			</dd>
		</div>
	);
}

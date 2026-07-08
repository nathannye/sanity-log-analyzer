export type MetricCardTone = "green" | "red" | "yellow";

const TONE_CLASS: Record<MetricCardTone, string> = {
	green: "tone-green",
	red: "tone-red",
	yellow: "tone-yellow",
};

interface MetricCardProps {
	eyebrow: string;
	value: string;
	note: string;
	tone?: MetricCardTone;
}

export function MetricCard({ eyebrow, value, note, tone }: MetricCardProps) {
	const classes = ["card", "card-metric", "flex", "items-start", "gap-12"];
	if (tone) {
		classes.push(TONE_CLASS[tone]);
	}

	return (
		<article class={classes.join(" ")}>
			<div class="grid min-h-full min-w-0 flex-1 content-between">

		<div class="flex items-center gap-12">
		{tone ? <span class="status-dot" aria-hidden="true" /> : null}

			<div class="eyebrow-1 text-muted">{eyebrow}</div>
			</div>
				<div class="display-1 mt-10 text-text">{value}</div>
				<div class="body-2 mt-8 text-muted">{note}</div>
			</div>
		</article>
	);
}

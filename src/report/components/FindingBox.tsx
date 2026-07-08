import type { MetricCardTone } from "./MetricCard.js";

const TONE_CLASS: Record<MetricCardTone, string> = {
	green: "tone-green",
	red: "tone-red",
	yellow: "tone-yellow",
};

interface FindingBoxProps {
	text: string;
	tone?: MetricCardTone;
}

export function FindingBox({ text, tone }: FindingBoxProps) {
	const classes = ["card", "grid", "min-h-0", "content-start", "gap-8"];
	if (tone) {
		classes.push(TONE_CLASS[tone]);
	}

	return (
		<article class={classes.join(" ")}>
			{tone ? (
				<div class="flex items-center gap-8">
					<span class="status-dot shrink-0" aria-hidden="true" />
					<p class="body-1 m-0 min-w-0 text-text">{text}</p>
				</div>
			) : (
				<p class="body-1 m-0 min-w-0 text-text">{text}</p>
			)}
		</article>
	);
}

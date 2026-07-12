import { CardMetric } from "./CardMetric.js";
import type { Tone } from "./tone.js";
import { toneClasses } from "./tone.js";

interface FindingBoxProps {
	text: string;
	tone?: Tone;
}

export function FindingBox({ text, tone }: FindingBoxProps) {
	return (
		<CardMetric
			className={[
				"grid",
				"min-h-0",
				"content-start",
				"gap-8",
				toneClasses(tone),
			]
				.filter(Boolean)
				.join(" ")}
		>
			{tone ? (
				<div class="flex items-center gap-8">
					<span class="status-dot shrink-0" aria-hidden="true" />
					<p class="body-1 m-0 min-w-0 text-primary">{text}</p>
				</div>
			) : (
				<p class="body-1 m-0 min-w-0 text-primary">{text}</p>
			)}
		</CardMetric>
	);
}

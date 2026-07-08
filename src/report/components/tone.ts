export type Tone = "green" | "yellow" | "red";

export const TONE_CLASS: Record<Tone, string> = {
	green: "tone-green",
	red: "tone-red",
	yellow: "tone-yellow",
};

export function toneClasses(baseClasses: string[], tone?: Tone): string {
	const classes = [...baseClasses];
	if (tone) {
		classes.push(TONE_CLASS[tone]);
	}
	return classes.join(" ");
}

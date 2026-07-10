export type Tone = "green" | "yellow" | "red";

export const TONE_CLASS: Record<Tone, string> = {
	green: "tone-green",
	red: "tone-red",
	yellow: "tone-yellow",
};

export function toneClasses(tone?: Tone | undefined): string {

	return tone ? TONE_CLASS[tone] : "";
}

export type Tone = "green" | "yellow" | "red";
export declare const TONE_CLASS: Record<Tone, string>;
export declare function toneClasses(baseClasses: string[], tone?: Tone): string;

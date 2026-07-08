export const REPORT_PALETTE = [
	"#0ea5e9",
	"#22c55e",
	"#f59e0b",
	"#ef4444",
	"#a855f7",
	"#14b8a6",
	"#f97316",
] as const;

export const PALETTE_COLOR_NAMES = [
	"blue",
	"green",
	"amber",
	"red",
	"purple",
	"teal",
	"orange",
] as const;

export type PaletteColorName = (typeof PALETTE_COLOR_NAMES)[number];

export function colorVar(name: PaletteColorName): string {
	return `var(--color-${name})`;
}

export function paletteColorVars(
	palette: readonly string[] = REPORT_PALETTE,
): Record<string, string> {
	const vars: Record<string, string> = {};
	for (const [index, name] of PALETTE_COLOR_NAMES.entries()) {
		const color = palette[index];
		if (color) vars[`--color-${name}`] = color;
	}
	return vars;
}

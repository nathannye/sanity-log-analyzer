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

export function paletteColorVars(palette: string[]): Record<string, string> {
	const vars: Record<string, string> = {};
	for (const [index, name] of PALETTE_COLOR_NAMES.entries()) {
		const color = palette[index];
		if (color) vars[`--color-${name}`] = color;
	}
	return vars;
}

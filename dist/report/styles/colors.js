export const REPORT_PALETTE = [
    "#0ea5e9",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#a855f7",
    "#14b8a6",
    "#f97316",
];
export const PALETTE_COLOR_NAMES = [
    "blue",
    "green",
    "amber",
    "red",
    "purple",
    "teal",
    "orange",
];
export function colorVar(name) {
    return `var(--color-${name})`;
}
export function paletteColorVars(palette = REPORT_PALETTE) {
    const vars = {};
    for (const [index, name] of PALETTE_COLOR_NAMES.entries()) {
        const color = palette[index];
        if (color)
            vars[`--color-${name}`] = color;
    }
    return vars;
}
//# sourceMappingURL=colors.js.map
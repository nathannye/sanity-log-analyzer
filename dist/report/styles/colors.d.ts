export declare const REPORT_PALETTE: readonly ["#0ea5e9", "#22c55e", "#f59e0b", "#ef4444", "#a855f7", "#14b8a6", "#f97316"];
export declare const PALETTE_COLOR_NAMES: readonly ["blue", "green", "amber", "red", "purple", "teal", "orange"];
export type PaletteColorName = (typeof PALETTE_COLOR_NAMES)[number];
export declare function colorVar(name: PaletteColorName): string;
export declare function paletteColorVars(palette?: readonly string[]): Record<string, string>;
//# sourceMappingURL=colors.d.ts.map
import type { RankedRow } from "../types.js";
import {
	PALETTE_COLOR_NAMES,
	type PaletteColorName,
	colorVar,
} from "./styles/colors.js";

export const ENDPOINT_SHARE_THRESHOLD = 0.05;

export interface ColoredRankedRow extends RankedRow {
	share: number;
	color: string;
}

export interface SplitRankedByShareResult {
	totalBytes: number;
	major: ColoredRankedRow[];
	minor: RankedRow[];
	minorTotals: RankedRow;
}

export function splitRankedByShare(
	rows: RankedRow[],
	threshold = ENDPOINT_SHARE_THRESHOLD,
): SplitRankedByShareResult {
	const totalBytes = rows.reduce((sum, row) => sum + row.responseBytes, 0);
	const major: ColoredRankedRow[] = [];
	const minor: RankedRow[] = [];

	for (const [index, row] of rows.entries()) {
		const share = totalBytes > 0 ? row.responseBytes / totalBytes : 0;
		if (share > threshold) {
			const colorName: PaletteColorName =
				PALETTE_COLOR_NAMES[index % PALETTE_COLOR_NAMES.length] ?? "blue";
			major.push({
				...row,
				share,
				color: colorVar(colorName),
			});
		} else if (row.responseBytes > 0 || row.requests > 0) {
			minor.push(row);
		}
	}

	const minorTotals = minor.reduce<RankedRow>(
		(totals, row) => ({
			label: totals.label,
			requests: totals.requests + row.requests,
			responseBytes: totals.responseBytes + row.responseBytes,
		}),
		{ label: `Show < ${Math.round(threshold * 100)}%`, requests: 0, responseBytes: 0 },
	);

	return { totalBytes, major, minor, minorTotals };
}

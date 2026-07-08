import type { CountRow, RankedRow } from "../types.js";
import type { DistributionSegment } from "./summarize.js";

export function dominantSegment(
	segments: DistributionSegment[],
): DistributionSegment | null {
	if (segments.length === 0) return null;
	return segments.reduce((largest, segment) =>
		segment.bytes > largest.bytes ? segment : largest,
	);
}

export function dominantRankedRow(
	rows: RankedRow[],
	metric: "requests" | "responseBytes",
):
	| { label: string; value: number; total: number; share: number }
	| null {
	const nonZero = rows.filter((row) => row[metric] > 0);
	if (nonZero.length <= 1) return null;

	const total = nonZero.reduce((sum, row) => sum + row[metric], 0);
	if (total <= 0) return null;

	let largest = nonZero[0];
	for (const row of nonZero.slice(1)) {
		if (row[metric] > largest[metric]) largest = row;
	}

	return {
		label: largest.label,
		value: largest[metric],
		total,
		share: largest[metric] / total,
	};
}

export function dominantCountRow(rows: CountRow[]):
	| { label: string; count: number; total: number; share: number }
	| null {
	const nonZero = rows.filter((row) => row.count > 0);
	if (nonZero.length <= 1) return null;

	const total = nonZero.reduce((sum, row) => sum + row.count, 0);
	if (total <= 0) return null;

	let largest = nonZero[0];
	for (const row of nonZero.slice(1)) {
		if (row.count > largest.count) largest = row;
	}

	return {
		label: largest.label,
		count: largest.count,
		total,
		share: largest.count / total,
	};
}

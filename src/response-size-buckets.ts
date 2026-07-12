import type { CountRow } from "./types.js";

export const DEFAULT_HISTOGRAM_BUCKETS = [
	0,
	1_024,
	10_240,
	102_400,
	1_048_576,
	10_485_760,
	Infinity,
];

export function formatBucketLabel(lower: number, upper: number): string {
	const units = ["B", "KB", "MB", "GB", "TB"];
	const format = (value: number): string => {
		if (value === Infinity) return "∞";
		let scaled = value;
		let unitIndex = 0;
		while (scaled >= 1024 && unitIndex < units.length - 1) {
			scaled /= 1024;
			unitIndex += 1;
		}
		return unitIndex === 0
			? `${Math.round(scaled)} ${units[unitIndex]}`
			: `${scaled.toFixed(0)} ${units[unitIndex]}`;
	};

	if (upper === Infinity) return `${format(lower)}+`;
	return `${format(lower)} - ${format(upper)}`;
}

export function createHistogramRows(histogramBuckets: number[]): CountRow[] {
	const rows: CountRow[] = [];
	for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
		rows.push({
			label: formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]),
			count: 0,
		});
	}
	return rows;
}

export function bucketLabelForBytes(
	responseBytes: number,
	histogramBuckets: number[],
): string | null {
	if (histogramBuckets.length < 2) return null;

	for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
		if (responseBytes < histogramBuckets[i + 1]) {
			return formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]);
		}
	}

	return formatBucketLabel(
		histogramBuckets[histogramBuckets.length - 2],
		histogramBuckets[histogramBuckets.length - 1],
	);
}

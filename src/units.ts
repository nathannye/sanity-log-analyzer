export const KB = 1024;
export const MB = KB * 1024;
export const GB = MB * 1024;

export function bytesToGiB(bytes: number): number {
	return bytes / GB;
}

export function gibToBytes(gib: number): number {
	return gib * GB;
}

export interface ScaleBytesOptions {
	decimals?: number;
}

export function scaleBytes(
	bytes: number,
	{ decimals = 1 }: ScaleBytesOptions = {},
): { scaled: number; unitIndex: number; unit: string } {
	const units = ["B", "KB", "MB", "GB", "TB"];
	const abs = Math.abs(bytes);
	let unitIndex = 0;
	let scaled = abs;
	while (scaled >= 1024 && unitIndex < units.length - 1) {
		scaled /= 1024;
		unitIndex += 1;
	}
	const rendered =
		unitIndex === 0 ? Math.round(scaled) : Number(scaled.toFixed(decimals));
	return { scaled: rendered, unitIndex, unit: units[unitIndex] ?? "B" };
}

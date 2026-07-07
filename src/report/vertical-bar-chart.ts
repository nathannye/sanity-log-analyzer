export const BAR_AREA_REM = 26.8;
export const LABEL_AREA_REM = 3.2;
export const AXIS_TICKS = 4;

export function buildAxisTicks(max: number): number[] {
	const ticks: number[] = [];
	for (let index = 0; index <= AXIS_TICKS; index += 1) {
		ticks.push((max / AXIS_TICKS) * index);
	}
	return ticks;
}

export function niceAxisMax(value: number, min = 1): number {
	if (value <= 0) return min;

	const magnitude = 10 ** Math.floor(Math.log10(value));
	const normalized = value / magnitude;
	let nice: number;
	if (normalized <= 1) nice = 1;
	else if (normalized <= 2) nice = 2;
	else if (normalized <= 5) nice = 5;
	else nice = 10;

	return Math.max(nice * magnitude, min);
}

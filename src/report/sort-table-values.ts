export type SortType = "string" | "number";
export type SortDirection = "asc" | "desc";

export function encodeSortValue(
	value: string | number | null | undefined,
): string {
	if (value === null || value === undefined || value === "") return "";
	return String(value);
}

export function parseSortValue(
	raw: string,
	type: SortType,
): string | number | null {
	if (raw === "") return null;
	if (type === "number") {
		const parsed = Number(raw);
		return Number.isFinite(parsed) ? parsed : null;
	}
	return raw;
}

export function compareSortValues(
	a: string | number | null,
	b: string | number | null,
	type: SortType,
	direction: SortDirection,
): number {
	const mult = direction === "asc" ? 1 : -1;

	if (a === null && b === null) return 0;
	if (a === null) return 1;
	if (b === null) return -1;

	if (type === "string") {
		return String(a).localeCompare(String(b)) * mult;
	}

	return (Number(a) - Number(b)) * mult;
}

import type { RankedRow } from "./types.js";
import { encodeSortValue } from "./report/sort-table-values.js";

export function avgBytesPerRequest(row: RankedRow): number {
	return row.requests > 0 ? row.responseBytes / row.requests : 0;
}

export function rankedRowSortAttrs(row: RankedRow): Record<string, string> {
	return {
		"data-sort-label": encodeSortValue(row.label),
		"data-sort-bandwidth": encodeSortValue(row.responseBytes),
		"data-sort-requests": encodeSortValue(row.requests),
		"data-sort-avg": encodeSortValue(avgBytesPerRequest(row)),
	};
}


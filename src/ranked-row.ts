import type { RankedRow } from "./types.js";

export function avgBytesPerRequest(row: RankedRow): number {
	return row.requests > 0 ? row.responseBytes / row.requests : 0;
}

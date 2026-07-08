import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";

export function RankedRowMetricCells({ row }: { row: RankedRow }) {
	return (
		<>
			<td class="num">{formatBytes(row.responseBytes)}</td>
			<td class="num">{formatNumber(row.requests)}</td>
			<td class="num">{formatBytes(avgBytesPerRequest(row))}</td>
		</>
	);
}

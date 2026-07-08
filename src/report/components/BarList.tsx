import { formatBytes, formatNumber } from "../../format.js";
import type { RankedRow } from "../../types.js";
import { HorizontalBarList } from "./HorizontalBarList.js";

interface BarListProps {
	title: string;
	rows: RankedRow[];
	accent: string;
}

export function BarList({ title, rows, accent }: BarListProps) {
	return (
		<HorizontalBarList
			title={title}
			rows={rows}
			accent={accent}
			getLabel={(row) => row.label}
			getValue={(row) => row.responseBytes}
			formatValue={(row) => (
				<>
					{formatBytes(row.responseBytes)}{" "}
					<span class="num">• {formatNumber(row.requests)}</span>
				</>
			)}
		/>
	);
}

import { formatNumber } from "../../format.js";
import type { CountRow } from "../../types.js";
import { HorizontalBarList } from "./HorizontalBarList.js";

interface CountBarsProps {
	title: string;
	rows: CountRow[];
	accent: string;
}

export function CountBars({ title, rows, accent }: CountBarsProps) {
	return (
		<HorizontalBarList
			title={title}
			rows={rows}
			accent={accent}
			getLabel={(row) => row.label}
			getValue={(row) => row.count}
			formatValue={(row) => formatNumber(row.count)}
		/>
	);
}

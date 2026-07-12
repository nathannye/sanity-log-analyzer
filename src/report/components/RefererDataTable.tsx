import type { RankedRow } from "../../types.js";
import { isDevelopmentUrl } from "../is-development-url.js";
import { DataTable } from "./DataTable.js";
import { LabelActions } from "./LabelActions.js";

interface RefererDataTableProps {
	rows: RankedRow[];
}

function isHttpsUrl(label: string): boolean {
	return label.startsWith("https://");
}

function RefererLabel({ row }: { row: RankedRow }) {
	return (
		<LabelActions
			value={row.label}
			href={isHttpsUrl(row.label) ? row.label : undefined}
			adornments={
				isDevelopmentUrl(row.label) ? (
					<span class="badge-amber">Development</span>
				) : null
			}
		>
			<span class="min-w-0 flex-1 truncate">{row.label}</span>
		</LabelActions>
	);
}

export function RefererDataTable({ rows }: RefererDataTableProps) {
	return (
		<DataTable
			rows={rows}
			renderLabel={(row) => <RefererLabel row={row} />}
		/>
	);
}

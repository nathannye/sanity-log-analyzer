import type { RankedRow } from "../../types.js";
import { isDevelopmentUrl } from "../is-development-url.js";
import { DataTable } from "./DataTable.js";
import styles from "./RefererDataTable.module.css";

interface RefererDataTableProps {
	title: string;
	rows: RankedRow[];
}

export function RefererDataTable({ title, rows }: RefererDataTableProps) {
	return (
		<DataTable
			title={title}
			rows={rows}
			labelAdornment={(row) =>
				isDevelopmentUrl(row.label) ? (
					<span class={styles.chip}>Development</span>
				) : null
			}
		/>
	);
}

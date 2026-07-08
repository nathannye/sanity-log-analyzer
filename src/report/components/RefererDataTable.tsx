import type { RankedRow } from "../../types.js";
import { isDevelopmentUrl } from "../is-development-url.js";
import { Button } from "./Button.js";
import buttonStyles from "./Button.module.css";
import { DataTable } from "./DataTable.js";
import tableStyles from "./DataTable.module.css";
import { CopyIcon, ExternalLinkIcon } from "./icons.js";
import styles from "./RefererDataTable.module.css";

interface RefererDataTableProps {
	title: string;
	rows: RankedRow[];
}

function isHttpsUrl(label: string): boolean {
	return label.startsWith("https://");
}

function RefererLabel({ row }: { row: RankedRow }) {
	return (
		<div class={tableStyles.labelCellInner}>
			<Button
				variant="ghost-icon-sm"
				icon={<CopyIcon />}
				data-copy-value={row.label}
				aria-label={`Copy "${row.label}"`}
				title="Copy to clipboard"
			/>
			{isHttpsUrl(row.label) ? (
				<a
					href={row.label}
					target="_blank"
					rel="noopener noreferrer"
					class={`${buttonStyles.button} ${buttonStyles.ghostIconSm}`}
					aria-label={`Open "${row.label}" in new tab`}
					title="Open in new tab"
				>
					<span class={buttonStyles.icon}>
						<ExternalLinkIcon />
					</span>
				</a>
			) : null}
			<span class={tableStyles.labelText}>{row.label}</span>
			{isDevelopmentUrl(row.label) ? (
				<span class={styles.chip}>Development</span>
			) : null}
		</div>
	);
}

export function RefererDataTable({ title, rows }: RefererDataTableProps) {
	return (
		<DataTable
			title={title}
			rows={rows}
			renderLabel={(row) => <RefererLabel row={row} />}
		/>
	);
}

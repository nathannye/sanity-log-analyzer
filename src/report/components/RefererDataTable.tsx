import type { RankedRow } from "../../types.js";
import { isDevelopmentUrl } from "../is-development-url.js";
import { Button } from "./Button.js";
import { DataTable } from "./DataTable.js";
import { CopyIcon, ExternalLinkIcon } from "./icons.js";

interface RefererDataTableProps {
	title: string;
	rows: RankedRow[];
}

function isHttpsUrl(label: string): boolean {
	return label.startsWith("https://");
}

function RefererLabel({ row }: { row: RankedRow }) {
	return (
		<div class="flex min-w-0 items-center gap-6">
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
					class="btn-ghost-sm"
					aria-label={`Open "${row.label}" in new tab`}
					title="Open in new tab"
				>
					<span class="btn-icon">
						<ExternalLinkIcon />
					</span>
				</a>
			) : null}
			<span class="min-w-0 flex-1 truncate">{row.label}</span>
			{isDevelopmentUrl(row.label) ? (
				<span class="badge-amber">Development</span>
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

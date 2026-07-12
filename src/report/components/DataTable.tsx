import type { ComponentChildren } from "preact";
import { rankedRowSortAttrs } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";
import { LabelActions } from "./LabelActions.js";
import { RankedRowMetricCells } from "./RankedRowMetricCells.js";
import { SortableTableHeader } from "./SortableTableHeader.js";

interface DataTableProps {
	title?: string;
	rows: RankedRow[];
	hasCopyButton?: boolean;
	copyToastMessage?: string;
	labelAdornment?: (row: RankedRow) => ComponentChildren;
	renderLabel?: (row: RankedRow) => ComponentChildren;
	header?: ComponentChildren;
}

export function DataTable({
	title,
	rows,
	hasCopyButton = false,
	copyToastMessage = "Copied",
	labelAdornment,
	renderLabel,
	header,
}: DataTableProps) {
	return (
		<section data-module="table-sort copy-buttons">
			{title ? <h3 class="heading-3">{title}</h3> : null}
			{header}
			<div class="data-table-wrap">
				<table class="body-1 data-table" data-sortable-table>
					<thead class="bg-pure rounded-md overflow-hidden">
						<tr>
							<SortableTableHeader
								label="Label"
								sortKey="label"
								sortType="string"
							/>
							<SortableTableHeader
								label="Bandwidth"
								sortKey="bandwidth"
								sortType="number"
								className="num"
							/>
							<SortableTableHeader
								label="Requests"
								sortKey="requests"
								sortType="number"
								className="num"
							/>
							<SortableTableHeader
								label="Avg / req"
								sortKey="avg"
								sortType="number"
								className="num"
							/>
						</tr>
					</thead>
					<tbody>
						{rows.map((row, index) => (
							<tr
								key={row.label}
								data-row-index={index}
								{...rankedRowSortAttrs(row)}
							>
								<td class="max-w-520" title={renderLabel ? undefined : row.label}>
									{renderLabel ? (
										renderLabel(row)
									) : hasCopyButton ? (
										<LabelActions
											value={row.label}
											copyToast={copyToastMessage}
											adornments={labelAdornment?.(row)}
										>
											<span class="min-w-0 flex-1 truncate">{row.label}</span>
										</LabelActions>
									) : (
										<div class="flex min-w-0 items-center gap-6">
											<span class="min-w-0 flex-1 truncate">{row.label}</span>
											{labelAdornment ? labelAdornment(row) : null}
										</div>
									)}
								</td>
								<RankedRowMetricCells row={row} />
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

import type { ComponentChildren } from "preact";
import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";
import { encodeSortValue } from "../sort-table-values.js";
import { Button } from "./Button.js";
import { CopyIcon } from "./icons.js";
import { SortableTableHeader } from "./SortableTableHeader.js";

interface DataTableProps {
	title: string;
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
		<section class="card">
			<h3 class="heading-3">{title}</h3>
			{header}
			<div class="data-table-wrap">
				<table class="body-1 data-table" data-sortable-table>
					<thead>
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
								data-sort-label={encodeSortValue(row.label)}
								data-sort-bandwidth={encodeSortValue(row.responseBytes)}
								data-sort-requests={encodeSortValue(row.requests)}
								data-sort-avg={encodeSortValue(avgBytesPerRequest(row))}
							>
								<td
									class="max-w-520"
									title={renderLabel ? undefined : row.label}
								>
									{renderLabel ? (
										renderLabel(row)
									) : (
										<div class="flex min-w-0 items-center gap-6">
											{hasCopyButton ? (
												<Button
													variant="ghost-icon-sm"
													icon={<CopyIcon />}
													data-copy-value={row.label}
													data-copy-toast={copyToastMessage}
													aria-label={`Copy "${row.label}"`}
													title="Copy to clipboard"
												/>
											) : null}
											<span class="min-w-0 flex-1 truncate">{row.label}</span>
											{labelAdornment ? labelAdornment(row) : null}
										</div>
									)}
								</td>
								<td class="num">{formatBytes(row.responseBytes)}</td>
								<td class="num">{formatNumber(row.requests)}</td>
								<td class="num">{formatBytes(avgBytesPerRequest(row))}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

import type { ComponentChildren } from "preact";
import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";
import { Button } from "./Button.js";
import styles from "./DataTable.module.css";
import { CopyIcon } from "./icons.js";

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
			<div class={styles.wrap}>
				<table class={`body-1 ${styles.table}`}>
					<thead>
						<tr>
							<th>Label</th>
							<th class="num">Bandwidth</th>
							<th class="num">Requests</th>
							<th class="num">Avg / req</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => (
							<tr key={row.label}>
								<td class={styles.labelCell} title={renderLabel ? undefined : row.label}>
									{renderLabel ? (
										renderLabel(row)
									) : (
										<div class={styles.labelCellInner}>
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
											<span class={styles.labelText}>{row.label}</span>
											{labelAdornment ? labelAdornment(row) : null}
										</div>
									)}
								</td>
								<td class="num">{formatBytes(row.responseBytes)}</td>
								<td class="num">{formatNumber(row.requests)}</td>
								<td class="num">
									{formatBytes(avgBytesPerRequest(row))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

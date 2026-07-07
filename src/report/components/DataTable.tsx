import type { ComponentChildren } from "preact";
import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";
import styles from "./DataTable.module.css";

interface DataTableProps {
	title: string;
	rows: RankedRow[];
	hasCopyButton?: boolean;
	copyToastMessage?: string;
	labelAdornment?: (row: RankedRow) => ComponentChildren;
	renderLabel?: (row: RankedRow) => ComponentChildren;
	header?: ComponentChildren;
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
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
												<button
													type="button"
													class={styles.copyButton}
													data-copy-value={row.label}
													data-copy-toast={copyToastMessage}
													aria-label={`Copy "${row.label}"`}
													title="Copy to clipboard"
												>
													<CopyIcon />
												</button>
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

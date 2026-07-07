import { formatBytes, formatNumber } from "../../format.js";
import type { RankedRow } from "../../types.js";
import { isDevelopmentUrl } from "../is-development-url.js";
import tableStyles from "./DataTable.module.css";
import styles from "./RefererDataTable.module.css";

interface RefererDataTableProps {
	title: string;
	rows: RankedRow[];
}

export function RefererDataTable({ title, rows }: RefererDataTableProps) {
	return (
		<section class="card">
			<h3 class="heading-3">{title}</h3>
			<div class={tableStyles.wrap}>
				<table class={`body-1 ${tableStyles.table}`}>
					<thead>
						<tr>
							<th>Label</th>
							<th class="num">Bandwidth</th>
							<th class="num">Requests</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => (
							<tr key={row.label}>
								<td class={tableStyles.labelCell} title={row.label}>
									<div class={tableStyles.labelCellInner}>
										<span class={tableStyles.labelText}>{row.label}</span>
										{isDevelopmentUrl(row.label) ? (
											<span class={styles.chip}>Development</span>
										) : null}
									</div>
								</td>
								<td class="num">{formatBytes(row.responseBytes)}</td>
								<td class="num">{formatNumber(row.requests)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

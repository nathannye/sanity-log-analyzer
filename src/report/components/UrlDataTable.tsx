import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";
import { extractGroqParams, extractGroqQuery } from "../groq-query.js";
import tableStyles from "./DataTable.module.css";
import { GroqQueryFlyout } from "./GroqQueryFlyout.js";
import styles from "./UrlDataTable.module.css";

interface UrlDataTableProps {
	rows: RankedRow[];
	showFlyout?: boolean;
	idPrefix: string;
}

function CopyIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</svg>
	);
}

export function UrlDataTable({
	rows,
	showFlyout = false,
	idPrefix,
}: UrlDataTableProps) {
	if (rows.length === 0) {
		return <p class={styles.empty}>No URLs in this category.</p>;
	}

	return (
		<div class={tableStyles.wrap}>
			<table class={`body-1 ${tableStyles.table}`}>
				<thead>
					<tr>
						<th>Label</th>
						<th class="num">Bandwidth</th>
						<th class="num">Requests</th>
						<th class="num">Avg / req</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => {
						const groqQuery = showFlyout ? extractGroqQuery(row.label) : null;
						const groqParams =
							groqQuery !== null ? extractGroqParams(row.label) : null;
						const flyoutId = groqQuery
							? `${idPrefix}-flyout-${index}`
							: undefined;

						return (
							<tr key={`${row.label}-${index}`}>
								<td class={tableStyles.labelCell} title={row.label}>
									<div class={tableStyles.labelCellInner}>
										<button
											type="button"
											class={tableStyles.copyButton}
											data-copy-value={row.label}
											data-copy-toast="Copied URL"
											aria-label={`Copy "${row.label}"`}
											title="Copy to clipboard"
										>
											<CopyIcon />
										</button>
										<span class={tableStyles.labelText}>{row.label}</span>
										{flyoutId ? (
											<button
												type="button"
												class={styles.viewQueryButton}
												data-groq-flyout-target={flyoutId}
												aria-haspopup="dialog"
											>
												View query
											</button>
										) : null}
									</div>
									{flyoutId && groqQuery ? (
										<GroqQueryFlyout
											id={flyoutId}
											query={groqQuery}
											params={groqParams}
											requests={row.requests}
											responseBytes={row.responseBytes}
										/>
									) : null}
								</td>
								<td class="num">{formatBytes(row.responseBytes)}</td>
								<td class="num">{formatNumber(row.requests)}</td>
								<td class="num">{formatBytes(avgBytesPerRequest(row))}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

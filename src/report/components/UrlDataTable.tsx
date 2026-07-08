import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { RankedRow } from "../../types.js";
import { isMp4Url } from "../classify-url.js";
import { extractGroqParams, extractGroqQuery } from "../groq-query.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	parseImageUrl,
} from "../parse-image-url.js";
import { encodeSortValue } from "../sort-table-values.js";
import { Button } from "./Button.js";
import buttonStyles from "./Button.module.css";
import tableStyles from "./DataTable.module.css";
import { GroqQueryFlyout } from "./GroqQueryFlyout.js";
import { CopyIcon, ErrorIcon, ExternalLinkIcon, WarningIcon } from "./icons.js";
import { SortableTableHeader } from "./SortableTableHeader.js";
import { Tooltip } from "./Tooltip.js";
import styles from "./UrlDataTable.module.css";

interface UrlDataTableProps {
	rows: RankedRow[];
	showFlyout?: boolean;
	variant?: "default" | "image" | "file";
	idPrefix: string;
}

function formatMetric(value: string | number | null): string {
	if (value === null) return "—";
	return String(value);
}

export function UrlDataTable({
	rows,
	showFlyout = false,
	variant = "default",
	idPrefix,
}: UrlDataTableProps) {
	if (rows.length === 0) {
		return <p class={styles.empty}>No URLs in this category.</p>;
	}

	const isImageTable = variant === "image";
	const isFileTable = variant === "file";
	const showExternalLink = isImageTable || isFileTable;

	return (
		<div class={tableStyles.wrap}>
			<table
				class={`body-1 ${tableStyles.table}`}
				data-sortable-table
			>
				<thead>
					<tr>
						<SortableTableHeader
							label="Label"
							sortKey="label"
							sortType="string"
						/>
						{isImageTable ? (
							<>
								<SortableTableHeader
									label="Width"
									sortKey="width"
									sortType="number"
									className="num"
								/>
								<SortableTableHeader
									label="Quality"
									sortKey="quality"
									sortType="number"
									className="num"
								/>
								<SortableTableHeader
									label="Format"
									sortKey="format"
									sortType="string"
								/>
							</>
						) : null}
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
					{rows.map((row, index) => {
						const groqQuery = showFlyout ? extractGroqQuery(row.label) : null;
						const groqParams =
							groqQuery !== null ? extractGroqParams(row.label) : null;
						const flyoutId = groqQuery
							? `${idPrefix}-flyout-${index}`
							: undefined;
						const imageDetails = isImageTable
							? parseImageUrl(row.label)
							: null;
						const labelSortValue = isImageTable
							? (imageDetails?.id ?? row.label)
							: row.label;

						return (
							<tr
								key={`${row.label}-${index}`}
								data-row-index={index}
								data-sort-label={encodeSortValue(labelSortValue)}
								data-sort-bandwidth={encodeSortValue(row.responseBytes)}
								data-sort-requests={encodeSortValue(row.requests)}
								data-sort-avg={encodeSortValue(avgBytesPerRequest(row))}
								{...(isImageTable
									? {
											"data-sort-width": encodeSortValue(
												imageDetails?.width ?? null,
											),
											"data-sort-quality": encodeSortValue(
												imageDetails?.quality ?? null,
											),
											"data-sort-format": encodeSortValue(
												imageDetails?.format ?? null,
											),
										}
									: {})}
							>
								<td
									class={tableStyles.labelCell}
									title={isImageTable ? row.label : undefined}
								>
									<div class={tableStyles.labelCellInner}>
										<Button
											variant="ghost-icon-sm"
											icon={<CopyIcon />}
											data-copy-value={row.label}
											data-copy-toast="Copied URL"
											aria-label={`Copy "${row.label}"`}
											title="Copy to clipboard"
										/>
										{showExternalLink ? (
											<a
												href={row.label}
												target="_blank"
												rel="noopener noreferrer"
												class={`${buttonStyles.button} ${buttonStyles.ghostIconSm}`}
												aria-label={`Open "${isImageTable ? (imageDetails?.id ?? row.label) : row.label}" in new tab`}
												title="Open in new tab"
											>
												<span class={buttonStyles.icon}>
													<ExternalLinkIcon />
												</span>
											</a>
										) : null}
										<span class={tableStyles.labelText}>
											{isImageTable ? imageDetails?.id : row.label}
										</span>
										{isFileTable && isMp4Url(row.label) ? (
											<Tooltip content="Consider using HLS streaming services like Mux instead of serving large single MP4 files to reduce bandwidth and improve playback.">
												<span class={styles.warningIcon}>
													<WarningIcon />
												</span>
											</Tooltip>
										) : null}
										{flyoutId ? (
											<Button
												variant="outline-pill-accent"
												data-groq-flyout-target={flyoutId}
												aria-haspopup="dialog"
											>
												View query
											</Button>
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
								{isImageTable && imageDetails ? (
									<>
										<td class="num">
											<div class={styles.metricCell}>
												<span>{formatMetric(imageDetails.width)}</span>
												{hasImageWidthError(imageDetails.width) ? (
													<Tooltip content="Width exceeds 2000px">
														<span class={styles.errorBadge}>Too large</span>
													</Tooltip>
												) : null}
											</div>
										</td>
										<td class="num">
											<div class={styles.metricCell}>
												<span>{formatMetric(imageDetails.quality)}</span>
												{hasImageQualityError(
													imageDetails.quality,
													imageDetails.isSvg,
												) ? (
													<Tooltip content="Quality exceeds 87">
														<span class={styles.errorIcon}>
															<ErrorIcon />
														</span>
													</Tooltip>
												) : null}
											</div>
										</td>
										<td>
											<div class={styles.metricCell}>
												<span>{formatMetric(imageDetails.format)}</span>
												{hasImageFormatError(imageDetails.format) ? (
													<Tooltip content='Format should be "auto"'>
														<span class={styles.errorIcon}>
															<ErrorIcon />
														</span>
													</Tooltip>
												) : null}
											</div>
										</td>
									</>
								) : null}
								<td class="num">{formatBytes(row.responseBytes)}</td>
								<td class="num">{formatNumber(row.requests)}</td>
								<td class="num">
									{formatBytes(avgBytesPerRequest(row))}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

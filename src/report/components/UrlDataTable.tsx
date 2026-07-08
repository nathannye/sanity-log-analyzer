import { formatBytes, formatNumber } from "../../format.js";
import { avgBytesPerRequest } from "../../ranked-row.js";
import type { GroqUrlDetails, RankedRow } from "../../types.js";
import { isMp4Url } from "../classify-url.js";
import { GROQ_SPREAD_WARNING } from "../groq-constants.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	parseImageUrl,
	toInlineAssetUrl,
} from "../parse-image-url.js";
import { encodeSortValue } from "../sort-table-values.js";
import { Button } from "./Button.js";
import { GroqQueryFlyout } from "./GroqQueryFlyout.js";
import { CopyIcon, ErrorIcon, ExternalLinkIcon, WarningIcon } from "./icons.js";
import { SortableTableHeader } from "./SortableTableHeader.js";
import { Tooltip } from "./Tooltip.js";

interface UrlDataTableProps {
	rows: RankedRow[];
	showFlyout?: boolean;
	groqByUrl?: Record<string, GroqUrlDetails>;
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
	groqByUrl = {},
	variant = "default",
	idPrefix,
}: UrlDataTableProps) {
	if (rows.length === 0) {
		return <p class="empty body-2 py-12">No URLs in this category.</p>;
	}

	const isImageTable = variant === "image";
	const isFileTable = variant === "file";
	const showExternalLink = isImageTable || isFileTable;

	return (
		<div class="data-table-wrap">
			<table class="body-1 data-table" data-sortable-table>
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
						const groqDetails = showFlyout ? groqByUrl[row.label] : undefined;
						const flyoutId = groqDetails
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
									class="max-w-520"
									title={isImageTable ? row.label : undefined}
								>
									<div class="flex min-w-0 items-center gap-6">
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
												href={toInlineAssetUrl(row.label)}
												target="_blank"
												rel="noopener noreferrer"
												class="btn-ghost-sm"
												aria-label={`Open "${isImageTable ? (imageDetails?.id ?? row.label) : row.label}" in new tab`}
												title="Open in new tab"
											>
												<span class="btn-icon">
													<ExternalLinkIcon />
												</span>
											</a>
										) : null}
										<span class="min-w-0 flex-1 truncate">
											{isImageTable ? imageDetails?.id : row.label}
										</span>
										{isFileTable && isMp4Url(row.label) ? (
											<Tooltip content="Consider using HLS streaming services like Mux instead of serving large single MP4 files to reduce bandwidth and improve playback.">
												<span class="inline-flex shrink-0 text-[var(--color-amber,#f59e0b)] [&>svg]:size-14">
													<WarningIcon />
												</span>
											</Tooltip>
										) : null}
										{groqDetails?.hasSpreadOperator ? (
											<Tooltip
												content={`This query ${GROQ_SPREAD_WARNING}.`}
											>
												<span class="inline-flex shrink-0 text-[var(--color-amber,#f59e0b)] [&>svg]:size-14">
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
									{flyoutId && groqDetails ? (
										<GroqQueryFlyout
											id={flyoutId}
											details={groqDetails}
											requests={row.requests}
											responseBytes={row.responseBytes}
										/>
									) : null}
								</td>
								{isImageTable && imageDetails ? (
									<>
										<td class="num">
											<div class="inline-flex items-center gap-6">
												<span>{formatMetric(imageDetails.width)}</span>
												{hasImageWidthError(imageDetails.width) ? (
													<Tooltip content="Width exceeds 2000px">
														<span class="badge-red">Too large</span>
													</Tooltip>
												) : null}
											</div>
										</td>
										<td class="num">
											<div class="inline-flex items-center gap-6">
												<span>{formatMetric(imageDetails.quality)}</span>
												{hasImageQualityError(
													imageDetails.quality,
													imageDetails.isSvg,
												) ? (
													<Tooltip content="Quality exceeds 87">
														<span class="inline-flex shrink-0 text-[var(--color-red,#ef4444)] [&>svg]:size-14">
															<ErrorIcon />
														</span>
													</Tooltip>
												) : null}
											</div>
										</td>
										<td>
											<div class="inline-flex items-center gap-6">
												<span>{formatMetric(imageDetails.format)}</span>
												{hasImageFormatError(imageDetails.format) ? (
													<Tooltip content='Format should be "auto"'>
														<span class="inline-flex shrink-0 text-[var(--color-red,#ef4444)] [&>svg]:size-14">
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

import { formatNullableMetric } from "../../format.js";
import { rankedRowSortAttrs } from "../../ranked-row.js";
import type { GroqUrlDetails, RankedRow } from "../../types.js";
import { isMp4Url } from "../classify-url.js";
import {
	GROQ_ISSUE_SPREAD,
	GROQ_SPREAD_WARNING,
} from "../groq-constants.js";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	MAX_IMAGE_QUALITY,
	MAX_IMAGE_WIDTH,
	PREFERRED_IMAGE_FORMAT,
	parseImageUrl,
	toInlineAssetUrl,
	toThumbnailUrl,
} from "../parse-image-url.js";
import { encodeSortValue } from "../sort-table-values.js";
import { Button } from "./Button.js";
import { GroqQueryFlyout } from "./GroqQueryFlyout.js";
import { ErrorIcon, SearchIcon, WarningIcon } from "./icons.js";
import { LabelActions } from "./LabelActions.js";
import { RankedRowMetricCells } from "./RankedRowMetricCells.js";
import { SortableTableHeader } from "./SortableTableHeader.js";
import { Tooltip } from "./Tooltip.js";

interface UrlDataTableProps {
	rows: RankedRow[];
	groqByUrl?: Record<string, GroqUrlDetails>;
	variant?: "default" | "image" | "file" | "query";
	idPrefix: string;
}

function groqIssueTooltip(issue: string): string {
	if (issue === GROQ_ISSUE_SPREAD) {
		return `This query ${GROQ_SPREAD_WARNING}.`;
	}
	return issue;
}

export function UrlDataTable({
	rows,
	groqByUrl = {},
	variant = "default",
	idPrefix,
}: UrlDataTableProps) {
	if (rows.length === 0) {
		return <p class="empty body-2">No data in this category.</p>;
	}

	const isImageTable = variant === "image";
	const isFileTable = variant === "file";
	const isQueryTable = variant === "query";
	const showAssetLink = isImageTable || isFileTable;

	return (
		<div class="data-table-wrap" data-module="table-sort copy-buttons groq-flyout">
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
						{isQueryTable ? (
							<>
								<SortableTableHeader
									label="Projections"
									sortKey="projections"
									sortType="number"
									className="num"
								/>
								<SortableTableHeader
									label="Array traversals"
									sortKey="arrayTraversals"
									sortType="number"
									className="num"
								/>
								<SortableTableHeader
									label="Derefs"
									sortKey="dereferences"
									sortType="number"
									className="num"
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
						const groqDetails = isQueryTable
							? groqByUrl[row.label]
							: undefined;
						const flyoutId = groqDetails
							? `${idPrefix}-flyout-${index}`
							: undefined;
						const imageDetails = isImageTable
							? parseImageUrl(row.label)
							: null;
						const labelSortValue = isImageTable
							? (imageDetails?.id ?? row.label)
							: row.label;
						const displayLabel = isImageTable
							? (imageDetails?.id ?? row.label)
							: row.label;
						const groqMetrics = row.groq;
						const groqIssues = groqMetrics?.issues ?? [];

						return (
							<tr
								key={`${row.label}-${index}`}
								data-row-index={index}
								{...rankedRowSortAttrs({
									...row,
									label: labelSortValue,
								})}
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
								{...(isQueryTable
									? {
											"data-sort-projections": encodeSortValue(
												groqMetrics?.projections ?? null,
											),
											"data-sort-arrayTraversals": encodeSortValue(
												groqMetrics?.arrayTraversals ?? null,
											),
											"data-sort-dereferences": encodeSortValue(
												groqMetrics?.dereferences ?? null,
											),
										}
									: {})}
							>
								<td
									class="max-w-520"
									title={isImageTable ? row.label : undefined}
								>
									<LabelActions
										value={row.label}
										copyToast="Copied URL"
										showCopyButton={!isImageTable}
										href={
											showAssetLink
												? toInlineAssetUrl(row.label)
												: undefined
										}
										externalLinkLabel={displayLabel}
										adornments={
											<>
												{isFileTable && isMp4Url(row.label) ? (
													<Tooltip content="Consider using HLS streaming services like Mux instead of serving large single MP4 files to reduce bandwidth and improve playback.">
														<span class="icon-warning">
															<WarningIcon />
														</span>
													</Tooltip>
												) : null}
												{groqIssues.map((issue) => (
													<Tooltip
														key={issue}
														content={groqIssueTooltip(issue)}
													>
														<span class="icon-warning">
															<WarningIcon />
														</span>
													</Tooltip>
												))}
											</>
										}
										actions={
											flyoutId ? (
												<Button
													variant="ghost-icon-sm"
													icon={<SearchIcon />}
													data-groq-flyout-target={flyoutId}
													aria-haspopup="dialog"
													aria-label="View query"
													title="View query"
												/>
											) : null
										}
									>
										{isImageTable ? (
											<img
												src={toThumbnailUrl(row.label)}
												alt=""
												width={40}
												height={40}
												loading="lazy"
												decoding="async"
												class="size-40 shrink-0 rounded-sm bg-primary/8 object-cover"
											/>
										) : null}
										<span class="min-w-0 flex-1 truncate">{displayLabel}</span>
									</LabelActions>
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
												<span>{formatNullableMetric(imageDetails.width)}</span>
												{hasImageWidthError(imageDetails.width) ? (
													<Tooltip content={`Width exceeds ${MAX_IMAGE_WIDTH}px`}>
														<span class="badge-red">Too large</span>
													</Tooltip>
												) : null}
											</div>
										</td>
										<td class="num">
											<div class="inline-flex items-center gap-6">
												<span>{formatNullableMetric(imageDetails.quality)}</span>
												{hasImageQualityError(
													imageDetails.quality,
													imageDetails.isSvg,
												) ? (
													<Tooltip content={`Quality exceeds ${MAX_IMAGE_QUALITY}`}>
														<span class="icon-error">
															<ErrorIcon />
														</span>
													</Tooltip>
												) : null}
											</div>
										</td>
										<td>
											<div class="inline-flex items-center gap-6">
												<span>{formatNullableMetric(imageDetails.format)}</span>
												{hasImageFormatError(imageDetails.format) ? (
													<Tooltip content={`Format should be "${PREFERRED_IMAGE_FORMAT}"`}>
														<span class="icon-error">
															<ErrorIcon />
														</span>
													</Tooltip>
												) : null}
											</div>
										</td>
									</>
								) : null}
								{isQueryTable ? (
									<>
										<td class="num">
											{formatNullableMetric(groqMetrics?.projections ?? null)}
										</td>
										<td class="num">
											{formatNullableMetric(
												groqMetrics?.arrayTraversals ?? null,
											)}
										</td>
										<td class="num">
											{formatNullableMetric(groqMetrics?.dereferences ?? null)}
										</td>
									</>
								) : null}
								<RankedRowMetricCells row={row} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

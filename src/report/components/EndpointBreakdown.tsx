import { formatBytes, formatNumber } from "../../format.js";
import type { RankedRow } from "../../types.js";
import { ENDPOINT_SHARE_THRESHOLD, splitRankedByShare } from "../split-ranked-by-share.js";
import { Donut } from "./Donut.js";

interface EndpointBreakdownProps {
	title: string;
	rows: RankedRow[];
}

const ENDPOINT_THRESHOLD_PERCENT = Math.round(ENDPOINT_SHARE_THRESHOLD * 100);

function MinorEndpointsAccordion({
	minor,
	minorTotals,
}: {
	minor: RankedRow[];
	minorTotals: RankedRow;
}) {
	if (minor.length === 0) return null;

	return (
		<div class="data-table-wrap mt-0 min-w-0 flex-1">
			<details class="endpoint-minor-details">
				<summary class="endpoint-minor-summary body-1">
					<span class="min-w-0 truncate text-text">{minorTotals.label}</span>
					<span class="num shrink-0 text-text">
						{formatBytes(minorTotals.responseBytes)}
					</span>
					<span class="num shrink-0 text-text">
						{formatNumber(minorTotals.requests)}
					</span>
				</summary>
				<div class="endpoint-minor-body">
					<table class="body-1 data-table">
						<thead>
							<tr>
								<th>Label</th>
								<th class="num">Bandwidth</th>
								<th class="num">Requests</th>
							</tr>
						</thead>
						<tbody>
							{minor.map((row) => (
								<tr key={row.label}>
									<td class="min-w-0 truncate" title={row.label}>
										{row.label}
									</td>
									<td class="num">{formatBytes(row.responseBytes)}</td>
									<td class="num">{formatNumber(row.requests)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</details>
		</div>
	);
}

export function EndpointBreakdown({ title, rows }: EndpointBreakdownProps) {
	const { major, minor, minorTotals } = splitRankedByShare(rows);

	return (
		<div class="card">
			<h3 class="heading-3">{title}</h3>
			<div class="mt-12 flex flex-col gap-16 lg:flex-row lg:items-start">
				<div class="w-full shrink-0 lg:w-[min(100%,34rem)]">
					{major.length > 0 ? (
						<Donut
							embedded
							title=""
							slices={major.map(({ label, responseBytes, color }) => ({
								label,
								value: responseBytes,
								color,
							}))}
							centerNote={`${major.length} endpoint${major.length === 1 ? "" : "s"} > ${ENDPOINT_THRESHOLD_PERCENT}%`}
						/>
					) : (
						<div class="body-1 card mt-0 text-muted">
							No endpoints reach {ENDPOINT_THRESHOLD_PERCENT}% of endpoint bandwidth in this view.
						</div>
					)}
				</div>
				{minor.length > 0 ? (
					<MinorEndpointsAccordion minor={minor} minorTotals={minorTotals} />
				) : null}
			</div>
		</div>
	);
}

import { formatBytes, formatNumber, formatReadableDate } from "../../format.js";
import type { CountRow, ReportSections, ReportView } from "../../types.js";
import { getSectionLabel } from "../sections.js";
import { colorVar, PALETTE_COLOR_NAMES } from "../styles/colors.js";
import { ENDPOINT_SHARE_THRESHOLD } from "../thresholds.js";
import { BandwidthBarChart } from "./BandwidthBarChart.js";
import { BarList } from "./BarList.js";
import { CountBarChart } from "./CountBarChart.js";
import { DataTable } from "./DataTable.js";
import { Donut, type DonutSlice } from "./Donut.js";
import { EndpointBreakdown } from "./EndpointBreakdown.js";
import { FindingsSummary } from "./FindingsSummary.js";
import { Metric } from "./Metric.js";
import { RefererDataTable } from "./RefererDataTable.js";
import { UrlTabsSection } from "./UrlTabsSection.js";
import { UserAgentDataTable } from "./UserAgentDataTable.js";

interface ViewSectionProps {
	view: ReportView;
	sections: ReportSections;
	viewKey: "all" | "billable";
	hidden?: boolean;
}

const HISTOGRAM_SHARE_THRESHOLD = ENDPOINT_SHARE_THRESHOLD;
const HISTOGRAM_MINOR_HEADER = `<${Math.round(HISTOGRAM_SHARE_THRESHOLD * 100)}%`;

function splitHistogramSlices(rows: CountRow[]): {
	major: DonutSlice[];
	minor: DonutSlice[];
} {
	const active = rows.filter((row) => row.count > 0);
	const total = active.reduce((sum, row) => sum + row.count, 0);
	const major: DonutSlice[] = [];
	const minor: DonutSlice[] = [];

	for (const row of active) {
		const share = total > 0 ? row.count / total : 0;
		if (share < HISTOGRAM_SHARE_THRESHOLD) {
			minor.push({ label: row.label, value: row.count });
			continue;
		}
		const colorName =
			PALETTE_COLOR_NAMES[major.length % PALETTE_COLOR_NAMES.length] ?? "blue";
		major.push({
			label: row.label,
			value: row.count,
			color: colorVar(colorName),
		});
	}

	return { major, minor };
}

export function ViewSection({
	view,
	sections,
	viewKey,
	hidden = false,
}: ViewSectionProps) {
	const summaryNote =
		view.firstTimestamp && view.lastTimestamp
			? `${formatReadableDate(view.firstTimestamp)} → ${formatReadableDate(view.lastTimestamp)}`
			: "No timestamps found";
	const findingsSummary = view.summary;
	const histogramSlices = splitHistogramSlices(view.responseSizeHistogram);

	return (
		<div data-report-view={viewKey} hidden={hidden || undefined}>
			<FindingsSummary summary={findingsSummary} />
			<section class="scroll-mt-20" data-section="summary">
				<div class="mb-24 flex flex-wrap gap-16 [&>*]:min-w-[130px]">
					<Metric
						label="Requests"
						value={formatNumber(view.requests)}
						note={summaryNote}
					/>
					<Metric
						label="Bandwidth"
						value={formatBytes(view.responseBytes)}
						note="Response size total"
					/>
					<Metric
						label="Request bytes"
						value={formatBytes(view.requestBytes)}
						note="Inbound payload total"
					/>
					<Metric
						label="Studio"
						value={formatBytes(view.studio.responseBytes)}
						note={`${formatNumber(view.studio.requests)} requests`}
					/>
					<Metric
						label="Billable"
						value={formatBytes(view.nonStudio.responseBytes)}
						note={`${formatNumber(view.nonStudio.requests)} requests`}
					/>
					<Donut
						title="Studio split"
						primary={{ label: "Studio", value: view.studio.responseBytes }}
						secondary={{
							label: "Billable",
							value: view.nonStudio.responseBytes,
						}}
						colors={{ primary: colorVar("blue"), secondary: colorVar("green") }}
					/>
				</div>
			</section>
			<div class="mb-24 flex flex-col gap-16">
				<div class="flex flex-col gap-16">
					<div class="eyebrow-1 section-title">Charts</div>
					<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
						{sections.domain ? (
							<section class="scroll-mt-20" data-section="domain">
								<BarList
									title={getSectionLabel("domain") ?? "Top domains"}
									rows={view.byDomain}
									accent={colorVar("blue")}
								/>
							</section>
						) : null}
						{sections.endpoint ? (
						<section class="scroll-mt-20" data-section="endpoint">
							<EndpointBreakdown
								title={getSectionLabel("endpoint") ?? "Top endpoints"}
								rows={view.byEndpoint}
							/>
						</section>
					) : null}
					</div>


					{sections.date ? (
						<section class="scroll-mt-20" data-section="date">
							<BandwidthBarChart
								title={getSectionLabel("date") ?? "Daily bandwidth"}
								rows={view.byDate}
								accent={colorVar("amber")}
							/>
						</section>
					) : null}
					{sections.hour ? (
						<section class="scroll-mt-20" data-section="hour">
							<BandwidthBarChart
								title={getSectionLabel("hour") ?? "Hourly bandwidth"}
								rows={view.byHour}
								accent={colorVar("red")}
							/>
						</section>
					) : null}

					<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
						{sections.status ? (
							<section class="scroll-mt-20" data-section="status">
								<CountBarChart
									title={getSectionLabel("status") ?? "Response codes"}
									rows={view.byStatus}
									accent={colorVar("purple")}
								/>
							</section>
						) : null}
						{sections.histogram ? (
							<section class="scroll-mt-20" data-section="histogram">
								<Donut
									title={
										getSectionLabel("histogram") ?? "Response size buckets"
									}
									slices={histogramSlices.major}
									minorSlices={histogramSlices.minor}
									minorHeader={HISTOGRAM_MINOR_HEADER}
									formatValue={formatNumber}
									centerNote="requests"
								/>
							</section>
						) : null}
					</div>
				</div>
				<div class="flex flex-col gap-16">
					<div class="eyebrow-1 section-title">Top lists</div>
					{sections.urls ? (
						<div class="scroll-mt-20">
							<UrlTabsSection
								rows={view.byUrl}
								groqByUrl={view.groqByUrl}
								idPrefix={`urls-${viewKey}`}
							/>
						</div>
					) : null}
					{sections.referers ? (
						<section class="scroll-mt-20" data-section="referers">
							<RefererDataTable
								title={getSectionLabel("referers") ?? "Top referers"}
								rows={view.byReferer}
							/>
						</section>
					) : null}
					{sections.userAgents ? (
						<section class="scroll-mt-20" data-section="userAgents">
							<UserAgentDataTable
								title={getSectionLabel("userAgents") ?? "Top user agents"}
								rows={view.byUserAgent}
								userAgentByLabel={view.userAgentByLabel}
								userAgentStats={view.userAgentStats}
							/>
						</section>
					) : null}
					{sections.ips ? (
						<section class="scroll-mt-20" data-section="ips">
							<DataTable
								hasCopyButton
								copyToastMessage="Copied IP"
								title={getSectionLabel("ips") ?? "Top IPs"}
								rows={view.byIp}
							/>
						</section>
					) : null}
				</div>
				<p class="opacity-50">
					Check this project out on {" "}
					<a
						class="underline"
						href="https://github.com/nathannye/sanity-log-analyzer"
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</div>
	);
}

import {
	formatBytes,
	formatNumber,
	formatPercentage,
	formatReadableDate,
} from "../../format.js";
import type { ReportData, ReportSections } from "../../types.js";
import { getSectionLabel } from "../sections.js";
import { colorVar } from "../styles/colors.js";
import { BandwidthBarChart } from "./BandwidthBarChart.js";
import { CountBarChart } from "./CountBarChart.js";
import { Donut } from "./Donut.js";
import { IssueCardList } from "./IssueCard.js";
import { Metric } from "./Metric.js";
import { TrafficTabsSection } from "./TrafficTabsSection.js";
import { UrlDataTable } from "./UrlDataTable.js";

interface ViewSectionProps {
	data: ReportData;
	sections: ReportSections;
}

export function ViewSection({ data, sections }: ViewSectionProps) {
	const summaryNote =
		data.dateStart && data.dateEnd
			? `${formatReadableDate(data.dateStart)} → ${formatReadableDate(data.dateEnd)}`
			: "No timestamps found";

	return (
		<div>
			<section class="scroll-mt-20 mb-24" data-section="summary">
				{data.summary.message ? (
					<p class="body-1 mb-16 text-text">{data.summary.message}</p>
				) : null}
				<div class="flex flex-wrap gap-16 [&>*]:min-w-[130px]">
					<Metric
						label="Requests"
						value={formatNumber(data.summary.requestCount)}
						note={summaryNote}
					/>
					<Metric
						label="Bandwidth"
						value={formatBytes(data.summary.bandwidth)}
						note="Response size total"
					/>
					<Metric
						label="Studio"
						value={formatPercentage(data.summary.studioRequestPercent)}
						note={`${formatBytes(data.summary.studioBandwidth)} bandwidth`}
					/>
					<Metric
						label="CDN delivery"
						value={formatPercentage(data.summary.cdnDeliveryPercent)}
						note={`${formatBytes(data.summary.cdnBandwidth)} bandwidth`}
					/>
					<Donut
						title="Studio vs CDN"
						primary={{
							label: "Studio",
							value: data.summary.studioBandwidth,
						}}
						secondary={{
							label: "CDN",
							value: data.summary.cdnBandwidth,
						}}
						colors={{ primary: colorVar("blue"), secondary: colorVar("green") }}
					/>
				</div>
			</section>

			<div class="mb-24 flex flex-col gap-16">
				{(sections.dailyBandwidth || sections.hourlyBandwidth) && (
					<div class="flex flex-col gap-16">
						<div class="eyebrow-1 section-title">Bandwidth over time</div>
						{sections.dailyBandwidth ? (
							<section class="scroll-mt-20" data-section="dailyBandwidth">
								<IssueCardList issues={data.dailyBandwidth.issues} />
								<BandwidthBarChart
									title={
										getSectionLabel("dailyBandwidth") ?? "Daily bandwidth"
									}
									rows={data.dailyBandwidth.entries}
									accent={colorVar("amber")}
								/>
							</section>
						) : null}
						{sections.hourlyBandwidth ? (
							<section class="scroll-mt-20" data-section="hourlyBandwidth">
								<IssueCardList issues={data.hourlyBandwidth.issues} />
								<BandwidthBarChart
									title={
										getSectionLabel("hourlyBandwidth") ?? "Hourly bandwidth"
									}
									rows={data.hourlyBandwidth.entries}
									accent={colorVar("red")}
								/>
							</section>
						) : null}
					</div>
				)}

				{sections.responseStatuses ? (
					<section class="scroll-mt-20" data-section="responseStatuses">
						<div class="eyebrow-1 section-title mb-16">
							{getSectionLabel("responseStatuses") ?? "Response codes"}
						</div>
						<IssueCardList issues={data.responseStatuses.issues} />
						<CountBarChart
							title={getSectionLabel("responseStatuses") ?? "Response codes"}
							rows={data.responseStatuses.entries}
							accent={colorVar("purple")}
						/>
					</section>
				) : null}

				{sections.images ? (
					<section class="scroll-mt-20" data-section="images">
						<div class="eyebrow-1 section-title mb-16">
							{getSectionLabel("images") ?? "Images"}
						</div>
						<IssueCardList issues={data.images.issues} />
						<div class="card">
							<UrlDataTable
								rows={data.images.entries}
								variant="image"
								idPrefix="images"
							/>
						</div>
					</section>
				) : null}

				{sections.files ? (
					<section class="scroll-mt-20" data-section="files">
						<div class="eyebrow-1 section-title mb-16">
							{getSectionLabel("files") ?? "Files"}
						</div>
						<IssueCardList issues={data.files.issues} />
						<div class="card">
							<UrlDataTable
								rows={data.files.entries}
								variant="file"
								idPrefix="files"
							/>
						</div>
					</section>
				) : null}

				{sections.queries ? (
					<section class="scroll-mt-20" data-section="queries">
						<div class="eyebrow-1 section-title mb-16">
							{getSectionLabel("queries") ?? "Queries"}
						</div>
						<IssueCardList issues={data.queries.issues} />
						<div class="card">
							<UrlDataTable
								rows={data.queries.entries}
								showFlyout
								groqByUrl={data.queries.groqByUrl}
								idPrefix="queries"
							/>
						</div>
					</section>
				) : null}

				<TrafficTabsSection
					data={data}
					showReferrers={sections.referrers}
					showIps={sections.ips}
					showUserAgents={sections.userAgents}
				/>

				<p class="opacity-50">
					Check this project out on{" "}
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

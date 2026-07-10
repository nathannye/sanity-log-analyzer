import {
	formatBytes,
	formatNumber,
	formatPercentage,
} from "../../format.js";
import type { ReportData, ReportSections } from "../../types.js";
import { getSectionLabel } from "../sections.js";
import { colorVar } from "../styles/colors.js";
import {
	CDN_DELIVERY_WARN_PERCENT,
	STUDIO_REQUEST_WARN_PERCENT,
} from "../thresholds.js";
import { BandwidthBarChart } from "./BandwidthBarChart.js";
import { CountBarChart } from "./CountBarChart.js";
import { IssueCardList } from "./IssueCard.js";
import { SectionWithLabel } from "./SectionWithLabel.js";
import { StatCard } from "./StatCard.js";
import { TrafficTabsSection } from "./TrafficTabsSection.js";
import { UrlDataTable } from "./UrlDataTable.js";

interface ViewSectionProps {
	data: ReportData;
	sections: ReportSections;
}

export function ViewSection({ data, sections }: ViewSectionProps) {
	return (
		<div>
			<section class="scroll-mt-20 mb-24" data-section="summary">
				<div class="flex items-center mb-20 gap-16 [&>*]:min-w-[130px]">
					<StatCard
						label="Requests"
						value={formatNumber(data.summary.requestCount)}
					/>
					<StatCard
						label="Bandwidth"
						value={formatBytes(data.summary.bandwidth)}
					/>
					<StatCard
						label="Studio"
						value={formatPercentage(data.summary.studioRequestPercent)}
						tone={
							data.summary.studioRequestPercent > STUDIO_REQUEST_WARN_PERCENT
								? "red"
								: undefined
						}
					/>
					<StatCard
						label="CDN Delivery"
						value={formatPercentage(data.summary.cdnDeliveryPercent)}
						tone={
							data.summary.cdnDeliveryPercent < CDN_DELIVERY_WARN_PERCENT
								? "red"
								: undefined
						}
					/>
				</div>
				<IssueCardList issues={data.summary.issues} />
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
					<SectionWithLabel
						title="images"
						label={getSectionLabel("images") ?? "Images"}
					>
						{
							data.images.entries.length > 0 && <IssueCardList issues={data.images.issues} />		
						}
						<UrlDataTable
								rows={data.images.entries}
								variant="image"
								idPrefix="images"
							/>
					</SectionWithLabel>
				) : null}

				{sections.files ? (
					<SectionWithLabel
						title="files"
						label={getSectionLabel("files") ?? "Files"}
					>
						{
							data.files.entries.length > 0 && <IssueCardList issues={data.files.issues} />		
						}
							<UrlDataTable
								rows={data.files.entries}
								variant="file"
								idPrefix="files"
							/>
					</SectionWithLabel>
				) : null}

				{sections.queries ? (
					<SectionWithLabel
						title="queries"
						label={getSectionLabel("queries") ?? "Queries"}
					>
						{
							data.queries.entries.length > 0 && <IssueCardList issues={data.queries.issues} />		
						}
							<UrlDataTable
								rows={data.queries.entries}
								variant="query"
								idPrefix="queries"
							/>
					</SectionWithLabel>
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

import { formatBytes, formatNumber, formatReadableDate } from "../../format.js";
import type { ReportSections, ReportView } from "../../types.js";
import { colorVar } from "../styles/colors.js";
import { BandwidthBarChart } from "./BandwidthBarChart.js";
import { BarList } from "./BarList.js";
import { CountBarChart } from "./CountBarChart.js";
import { CountBars } from "./CountBars.js";
import { DataTable } from "./DataTable.js";
import { Donut } from "./Donut.js";
import { Metric } from "./Metric.js";
import { RefererDataTable } from "./RefererDataTable.js";
import { UrlTabsSection } from "./UrlTabsSection.js";
import styles from "./ViewSection.module.css";

interface ViewSectionProps {
	view: ReportView;
	sections: ReportSections;
	viewKey: "all" | "billable";
	hidden?: boolean;
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

	return (
		<div data-report-view={viewKey} hidden={hidden || undefined}>
			<section class={styles.sectionBlock} data-section="summary">
				<div class={styles.viewGrid}>
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
			<div class={styles.grid2}>
				<div class={styles.stack}>
					<div class={`eyebrow-1 ${styles.sectionTitle}`}>Charts</div>
					<div class={styles.grid2}>
						{sections.domain ? (
							<section class={styles.sectionBlock} data-section="domain">
								<BarList
									title="Top domains"
									rows={view.byDomain}
									accent={colorVar("blue")}
								/>
							</section>
						) : null}
						{sections.endpoint ? (
							<section class={styles.sectionBlock} data-section="endpoint">
								<BarList
									title="Top endpoints"
									rows={view.byEndpoint}
									accent={colorVar("green")}
								/>
							</section>
						) : null}
					</div>
					<div class={styles.grid2}>
						{sections.date ? (
							<section class={styles.sectionBlock} data-section="date">
								<BandwidthBarChart
									title="Daily bandwidth"
									rows={view.byDate}
									accent={colorVar("amber")}
								/>
							</section>
						) : null}
						{sections.hour ? (
							<section class={styles.sectionBlock} data-section="hour">
								<BandwidthBarChart
									title="Hourly bandwidth"
									rows={view.byHour}
									accent={colorVar("red")}
								/>
							</section>
						) : null}
					</div>
					<div class={styles.grid2}>
						{sections.status ? (
							<section class={styles.sectionBlock} data-section="status">
								<CountBarChart
									title="Response codes"
									rows={view.byStatus}
									accent={colorVar("purple")}
								/>
							</section>
						) : null}
						{sections.histogram ? (
							<section class={styles.sectionBlock} data-section="histogram">
								<CountBars
									title="Response size buckets"
									rows={view.responseSizeHistogram}
									accent={colorVar("teal")}
								/>
							</section>
						) : null}
					</div>
				</div>
				<div class={styles.stack}>
					<div class={`eyebrow-1 ${styles.sectionTitle}`}>Top lists</div>
					{sections.urls ? (
						<div class={styles.sectionBlock}>
							<UrlTabsSection rows={view.byUrl} idPrefix={`urls-${viewKey}`} />
						</div>
					) : null}
					{sections.referers ? (
						<section class={styles.sectionBlock} data-section="referers">
							<RefererDataTable title="Top referers" rows={view.byReferer} />
						</section>
					) : null}
					{sections.userAgents ? (
						<section class={styles.sectionBlock} data-section="userAgents">
							<DataTable title="Top user agents" rows={view.byUserAgent} />
						</section>
					) : null}
					{sections.ips ? (
						<section class={styles.sectionBlock} data-section="ips">
							<DataTable
								hasCopyButton
								copyToastMessage="Copied IP"
								title="Top IPs"
								rows={view.byIp}
							/>
						</section>
					) : null}
				</div>
			</div>
		</div>
	);
}

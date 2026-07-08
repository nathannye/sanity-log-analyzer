import type { ReportSummary } from "../summarize.js";
import { ContributorCard } from "./ContributorCard.js";
import { DistributionCard } from "./DistributionCard.js";
import { FindingBox } from "./FindingBox.js";
import type { MetricCardTone } from "./MetricCard.js";

interface FindingsSummaryProps {
	summary: ReportSummary;
}

function FindingsGroup({
	title,
	items,
	emptyMessage,
	tone,
}: {
	title: string;
	items: string[];
	emptyMessage?: string;
	tone?: MetricCardTone;
}) {
	if (items.length === 0 && !emptyMessage) return null;

	return (
		<div class="flex flex-col gap-12">
			<div class="eyebrow-1 section-title">{title}</div>
			{items.length === 0 ? (
				<FindingBox text={emptyMessage ?? ""} tone={tone} />
			) : (
				<div class="flex flex-col gap-12">
					{items.map((item) => (
						<FindingBox key={item} text={item} tone={tone} />
					))}
				</div>
			)}
		</div>
	);
}

export function FindingsSummary({ summary }: FindingsSummaryProps) {
	const bulletInsights = summary.atAGlance.filter(
		(insight) => insight.kind !== "synthesis",
	);
	const synthesis = summary.atAGlance.find(
		(insight) => insight.kind === "synthesis",
	);

	const contributors = [
		summary.topContributors.image
			? {
					key: "image",
					title: "Largest image",
					contributor: summary.topContributors.image,
					labelKind: "image" as const,
				}
			: null,
		summary.topContributors.file
			? {
					key: "file",
					title: "Largest file",
					contributor: summary.topContributors.file,
				}
			: null,
		summary.topContributors.query
			? {
					key: "query",
					title: "Largest query",
					contributor: summary.topContributors.query,
				}
			: null,
		summary.topContributors.referer
			? {
					key: "referer",
					title: "Largest referer",
					contributor: summary.topContributors.referer,
					showRequests: false,
				}
			: null,
	].filter((item) => item !== null);

	const metricCards = [
		<DistributionCard
			key="distribution"
			totalBytes={summary.distribution.totalBytes}
			segments={summary.distribution.segments}
		/>,
		...contributors.map((item) => (
			<ContributorCard
				key={item.key}
				title={item.title}
				contributor={item.contributor}
				labelKind={item.labelKind}
				showRequests={item.showRequests ?? true}
			/>
		)),
	];

	return (
		<section
			class="mb-24 grid scroll-mt-20 gap-16"
			data-section="findings"
			data-health={summary.overallHealth}
		>
			{summary.atAGlance.length > 0 ? (
				<div class="card grid gap-12">
					<div class="eyebrow-1 section-title">At a glance</div>
					{bulletInsights.length > 0 ? (
						<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
							{bulletInsights.map((insight) => (
								<FindingBox key={insight.text} text={insight.text} />
							))}
						</div>
					) : null}
					{synthesis ? (
						<p class="body-1 m-0 text-text font-medium">{synthesis.text}</p>
					) : null}
				</div>
			) : null}

			{metricCards.length > 0 ? (
				<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
					{metricCards}
				</div>
			) : null}

		<div class="grid grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-48">
			<FindingsGroup
				title="Critical"
				items={summary.critical.map((item) => item.summary)}
				emptyMessage="No critical issues detected."
				tone="red"
			/>

			<FindingsGroup
				title="Warnings"
				items={summary.warnings.map((item) => item.summary)}
				tone="yellow"
			/>

			<FindingsGroup
				title="Observations"
				items={summary.observations.map((item) => item.summary)}
			/>

			<FindingsGroup
				title="No action needed"
				items={summary.healthy.map((item) => item.summary)}
				tone="green"
			/>
			</div>
		</section>
	);
}

import { formatBytes, formatNumber } from "../../format.js";
import type { ReportSummary } from "../summarize.js";

interface FindingsSummaryProps {
	summary: ReportSummary;
}

const HEALTH_LABEL: Record<ReportSummary["overallHealth"], string> = {
	green: "Healthy",
	yellow: "Needs attention",
	red: "Critical issues",
};

const HEALTH_CLASS: Record<ReportSummary["overallHealth"], string> = {
	green: "tone-green",
	yellow: "tone-yellow",
	red: "tone-red",
};

function priorityLabel(priority: "critical" | "warning"): string {
	return priority === "critical" ? "Critical" : "Warning";
}

export function FindingsSummary({ summary }: FindingsSummaryProps) {
	const issueTotal = summary.issueCounts.critical + summary.issueCounts.warning;

	return (
		<section class="mb-24 grid scroll-mt-20 gap-16" data-section="findings">
			<div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
				<article
					class={`card card-metric flex items-start gap-12 ${HEALTH_CLASS[summary.overallHealth]}`}
					data-health={summary.overallHealth}
				>
					<span class="status-dot" aria-hidden="true" />
					<div class="grid min-h-full min-w-0 flex-1 content-between">
						<div class="eyebrow-1 text-muted">Overall health</div>
						<div class="display-1 mt-10 text-text">
							{HEALTH_LABEL[summary.overallHealth]}
						</div>
						<div class="body-2 mt-8 text-muted">
							{issueTotal === 0
								? "No critical or warning findings"
								: `${formatNumber(issueTotal)} ${issueTotal === 1 ? "issue" : "issues"} detected`}
						</div>
					</div>
				</article>

				<article class="card card-metric flex items-start gap-12 tone-red">
					<span class="status-dot" aria-hidden="true" />
					<div class="grid min-h-full min-w-0 flex-1 content-between">
						<div class="eyebrow-1 text-muted">Critical</div>
						<div class="display-1 mt-10 text-text">
							{formatNumber(summary.issueCounts.critical)}
						</div>
						<div class="body-2 mt-8 text-muted">High-impact findings</div>
					</div>
				</article>

				<article class="card card-metric flex items-start gap-12 tone-yellow">
					<span class="status-dot" aria-hidden="true" />
					<div class="grid min-h-full min-w-0 flex-1 content-between">
						<div class="eyebrow-1 text-muted">Warnings</div>
						<div class="display-1 mt-10 text-text">
							{formatNumber(summary.issueCounts.warning)}
						</div>
						<div class="body-2 mt-8 text-muted">Worth reviewing</div>
					</div>
				</article>

				<article class="card card-metric flex items-start gap-12 tone-green">
					<span class="status-dot" aria-hidden="true" />
					<div class="grid min-h-full min-w-0 flex-1 content-between">
						<div class="eyebrow-1 text-muted">Passed</div>
						<div class="display-1 mt-10 text-text">
							{formatNumber(summary.issueCounts.passed)}
						</div>
						<div class="body-2 mt-8 text-muted">Healthy signals</div>
					</div>
				</article>

				{summary.estimatedSavingsBytes !== undefined ? (
					<article class="card card-metric flex items-start gap-12">
						<div class="grid min-h-full min-w-0 flex-1 content-between">
							<div class="eyebrow-1 text-muted">Est. savings</div>
							<div class="display-1 mt-10 text-text">
								{formatBytes(summary.estimatedSavingsBytes)}
							</div>
							<div class="body-2 mt-8 text-muted">
								From explicit byte opportunities
							</div>
						</div>
					</article>
				) : null}
			</div>

			<div class="grid gap-0">
				<div class="eyebrow-1 section-title">Top opportunities</div>
				{summary.topOpportunities.length === 0 ? (
					<p class="body-1 empty card mt-12">
						No optimization opportunities detected for this view.
					</p>
				) : (
					<div class="data-table-wrap">
						<table class="body-1 data-table">
							<thead>
								<tr>
									<th>Priority</th>
									<th>Issue</th>
									<th>Impact</th>
									<th>Suggested fix</th>
								</tr>
							</thead>
							<tbody>
								{summary.topOpportunities.map((item) => (
									<tr key={`${item.priority}-${item.issue}`}>
										<td>
											<span
												class={`priority ${
													item.priority === "critical"
														? "priority-critical"
														: "priority-warning"
												}`}
											>
												<span class="priority-dot" aria-hidden="true" />
												{priorityLabel(item.priority)}
											</span>
										</td>
										<td>{item.issue}</td>
										<td>{item.impact}</td>
										<td>{item.suggestedFix}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</section>
	);
}

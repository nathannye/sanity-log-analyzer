import { formatBytes, formatNumber } from "../../format.js";
import type { ReportSummary } from "../summarize.js";
import { MetricCard } from "./MetricCard.js";

interface FindingsSummaryProps {
	summary: ReportSummary;
}

function priorityLabel(priority: "critical" | "warning"): string {
	return priority === "critical" ? "Critical" : "Warning";
}

export function FindingsSummary({ summary }: FindingsSummaryProps) {
	const issueTotal = summary.issueCounts.critical + summary.issueCounts.warning;

	return (
		<section class="mb-24 grid scroll-mt-20 gap-16" data-section="findings">
			<div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
				<MetricCard
					tone="red"
					eyebrow="Critical"
					value={formatNumber(summary.issueCounts.critical)}
					note="High-impact findings"
				/>
				<MetricCard
					tone="yellow"
					eyebrow="Warnings"
					value={formatNumber(summary.issueCounts.warning)}
					note="Worth reviewing"
				/>
				<MetricCard
					tone="green"
					eyebrow="Passed"
					value={formatNumber(summary.issueCounts.passed)}
					note="Healthy signals"
				/>
				{summary.estimatedSavingsBytes !== undefined ? (
					<MetricCard
						eyebrow="Est. savings"
						value={formatBytes(summary.estimatedSavingsBytes)}
						note="From explicit byte opportunities"
					/>
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

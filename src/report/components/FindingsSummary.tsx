import { formatBytes, formatNumber } from "../../format.js";
import type { ReportSummary } from "../summarize.js";
import { Metric } from "./Metric.js";
import styles from "./FindingsSummary.module.css";

interface FindingsSummaryProps {
	summary: ReportSummary;
}

const HEALTH_LABEL: Record<ReportSummary["overallHealth"], string> = {
	green: "Healthy",
	yellow: "Needs attention",
	red: "Critical issues",
};

const HEALTH_CLASS: Record<ReportSummary["overallHealth"], string> = {
	green: styles.healthGreen,
	yellow: styles.healthYellow,
	red: styles.healthRed,
};

const PRIORITY_CLASS = {
	critical: styles.priorityCritical,
	warning: styles.priorityWarning,
} as const;

function priorityLabel(priority: "critical" | "warning"): string {
	return priority === "critical" ? "Critical" : "Warning";
}

export function FindingsSummary({ summary }: FindingsSummaryProps) {
	const issueTotal =
		summary.issueCounts.critical + summary.issueCounts.warning;

	return (
		<section class={styles.root} data-section="findings">
			<div class={styles.hero}>
				<div
					class={`${styles.health} ${HEALTH_CLASS[summary.overallHealth]}`}
					data-health={summary.overallHealth}
				>
					<span class={styles.healthDot} aria-hidden="true" />
					<div>
						<div class={`eyebrow-1 ${styles.healthEyebrow}`}>
							Overall health
						</div>
						<div class={`display-1 ${styles.healthLabel}`}>
							{HEALTH_LABEL[summary.overallHealth]}
						</div>
						<div class={`body-2 ${styles.healthNote}`}>
							{issueTotal === 0
								? "No critical or warning findings"
								: `${formatNumber(issueTotal)} ${issueTotal === 1 ? "issue" : "issues"} detected`}
						</div>
					</div>
				</div>

				<div class={styles.glance}>
					<div class={`eyebrow-1 ${styles.glanceTitle}`}>At a glance</div>
					<div class={styles.metrics}>
						<Metric
							label="Critical"
							value={formatNumber(summary.issueCounts.critical)}
							note="High-impact findings"
						/>
						<Metric
							label="Warnings"
							value={formatNumber(summary.issueCounts.warning)}
							note="Worth reviewing"
						/>
						<Metric
							label="Passed"
							value={formatNumber(summary.issueCounts.passed)}
							note="Healthy signals"
						/>
						{summary.estimatedSavingsBytes !== undefined ? (
							<Metric
								label="Est. savings"
								value={formatBytes(summary.estimatedSavingsBytes)}
								note="From explicit byte opportunities"
							/>
						) : null}
					</div>
				</div>
			</div>

			<div class={styles.opportunities}>
				<div class={`eyebrow-1 ${styles.glanceTitle}`}>Top opportunities</div>
				{summary.topOpportunities.length === 0 ? (
					<p class={`body-1 ${styles.empty}`}>
						No optimization opportunities detected for this view.
					</p>
				) : (
					<div class={styles.tableWrap}>
						<table class={`body-1 ${styles.table}`}>
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
												class={`${styles.priority} ${PRIORITY_CLASS[item.priority]}`}
											>
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

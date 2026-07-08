import { formatBytes, formatNumber } from "../../format.js";
import type { ReportSummary } from "../summarize.js";
import tableStyles from "./DataTable.module.css";
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
	green: styles.toneGreen,
	yellow: styles.toneYellow,
	red: styles.toneRed,
};

function priorityLabel(priority: "critical" | "warning"): string {
	return priority === "critical" ? "Critical" : "Warning";
}

export function FindingsSummary({ summary }: FindingsSummaryProps) {
	const issueTotal =
		summary.issueCounts.critical + summary.issueCounts.warning;

	return (
		<section class={styles.root} data-section="findings">
			<div class={styles.cards}>
				<article
					class={`${styles.card} ${HEALTH_CLASS[summary.overallHealth]}`}
					data-health={summary.overallHealth}
				>
					<span class={styles.dot} aria-hidden="true" />
					<div class={styles.cardBody}>
						<div class={`eyebrow-1 ${styles.cardLabel}`}>Overall health</div>
						<div class={`display-1 ${styles.cardValue}`}>
							{HEALTH_LABEL[summary.overallHealth]}
						</div>
						<div class={`body-2 ${styles.cardNote}`}>
							{issueTotal === 0
								? "No critical or warning findings"
								: `${formatNumber(issueTotal)} ${issueTotal === 1 ? "issue" : "issues"} detected`}
						</div>
					</div>
				</article>

				<article class={`${styles.card} ${styles.toneRed}`}>
					<span class={styles.dot} aria-hidden="true" />
					<div class={styles.cardBody}>
						<div class={`eyebrow-1 ${styles.cardLabel}`}>Critical</div>
						<div class={`display-1 ${styles.cardValue}`}>
							{formatNumber(summary.issueCounts.critical)}
						</div>
						<div class={`body-2 ${styles.cardNote}`}>High-impact findings</div>
					</div>
				</article>

				<article class={`${styles.card} ${styles.toneYellow}`}>
					<span class={styles.dot} aria-hidden="true" />
					<div class={styles.cardBody}>
						<div class={`eyebrow-1 ${styles.cardLabel}`}>Warnings</div>
						<div class={`display-1 ${styles.cardValue}`}>
							{formatNumber(summary.issueCounts.warning)}
						</div>
						<div class={`body-2 ${styles.cardNote}`}>Worth reviewing</div>
					</div>
				</article>

				<article class={`${styles.card} ${styles.toneGreen}`}>
					<span class={styles.dot} aria-hidden="true" />
					<div class={styles.cardBody}>
						<div class={`eyebrow-1 ${styles.cardLabel}`}>Passed</div>
						<div class={`display-1 ${styles.cardValue}`}>
							{formatNumber(summary.issueCounts.passed)}
						</div>
						<div class={`body-2 ${styles.cardNote}`}>Healthy signals</div>
					</div>
				</article>

				{summary.estimatedSavingsBytes !== undefined ? (
					<article class={styles.card}>
						<div class={styles.cardBody}>
							<div class={`eyebrow-1 ${styles.cardLabel}`}>Est. savings</div>
							<div class={`display-1 ${styles.cardValue}`}>
								{formatBytes(summary.estimatedSavingsBytes)}
							</div>
							<div class={`body-2 ${styles.cardNote}`}>
								From explicit byte opportunities
							</div>
						</div>
					</article>
				) : null}
			</div>

			<div class={styles.opportunities}>
				<div class={`eyebrow-1 ${styles.sectionTitle}`}>Top opportunities</div>
				{summary.topOpportunities.length === 0 ? (
					<p class={`body-1 ${styles.empty}`}>
						No optimization opportunities detected for this view.
					</p>
				) : (
					<div class={tableStyles.wrap}>
						<table class={`body-1 ${tableStyles.table}`}>
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
												class={`${styles.priority} ${
													item.priority === "critical"
														? styles.priorityCritical
														: styles.priorityWarning
												}`}
											>
												<span class={styles.priorityDot} aria-hidden="true" />
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

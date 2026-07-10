import type { ComponentChildren } from "preact";
import type { IssueSeverity, ReportIssue } from "../../types.js";
import { CardMetric } from "./CardMetric.js";
import type { Tone } from "./tone.js";
import { toneClasses } from "./tone.js";

function severityTone(severity: IssueSeverity): Tone {
	if (severity === "critical") return "red";
	if (severity === "warn") return "yellow";
	return "green";
}

function severityLabel(severity: IssueSeverity): string {
	if (severity === "critical") return "Critical";
	if (severity === "warn") return "Warning";
	return "Passed";
}

export interface IssueCardProps {
	issue: ReportIssue;
	suggestion?: string | ComponentChildren;
}

export function IssueCard({ issue, suggestion }: IssueCardProps) {
	const tone = severityTone(issue.severity);
	const suggestionContent = suggestion ?? issue.suggestion;

	return (
		<CardMetric
			className={toneClasses(
				["grid", "min-h-0", "content-start", "gap-8"],
				tone,
			)}
		>
			<div class="flex items-center gap-8">
				<span class="status-dot shrink-0" aria-hidden="true" />
				<p class="eyebrow-1 m-0 text-muted">{severityLabel(issue.severity)}</p>
			</div>
			<p class="body-1 m-0 min-w-0 text-primary">{issue.message}</p>
			{suggestionContent ? (
				<p class="body-2 m-0 min-w-0 text-muted">{suggestionContent}</p>
			) : null}
		</CardMetric>
	);
}

interface IssueCardListProps {
	issues: ReportIssue[];
}

export function IssueCardList({ issues }: IssueCardListProps) {
	if (issues.length === 0) return null;

	return (
		<div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
			{issues.map((issue) => (
				<IssueCard key={issue.id} issue={issue} />
			))}
		</div>
	);
}

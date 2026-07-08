import { formatDistributionShare, formatNumber } from "../format.js";
import type { ReportViewInput, TopContributors } from "../types.js";
import type {
	DistributionSegment,
	FindingId,
	ReportProblem,
	ReportSummary,
} from "./summarize.js";

export interface ReportInsight {
	text: string;
	kind: "fact" | "health" | "opportunity" | "synthesis";
}

interface NarrativeContext {
	view: ReportViewInput;
	summary: Pick<
		ReportSummary,
		"critical" | "warnings" | "distribution" | "overallHealth"
	>;
	topContributors: TopContributors;
}

interface InsightTemplate {
	kind: ReportInsight["kind"];
	when: (ctx: NarrativeContext) => boolean;
	render: (ctx: NarrativeContext) => string;
	score: (ctx: NarrativeContext) => number;
}

const CONCENTRATION_SHARE = 0.5;
const REASSURING_5XX_RATE = 0.001;

const PRIMARY_OPPORTUNITY_LABEL: Partial<Record<FindingId, string>> = {
	"image-width": "oversized image delivery",
	"image-format": "image CDN settings",
	"image-quality": "image quality settings",
	"groq-spread": "GROQ query efficiency",
	"mp4-transfer": "video delivery format",
	"status-5xx": "server reliability",
	"status-4xx": "client request errors",
};

function dominantSegment(
	segments: DistributionSegment[],
): DistributionSegment | null {
	if (segments.length === 0) return null;
	return segments.reduce((largest, segment) =>
		segment.bytes > largest.bytes ? segment : largest,
	);
}

function primaryProblem(
	problems: ReportProblem[],
): ReportProblem | null {
	if (problems.length === 0) return null;
	return problems.reduce((primary, problem) => {
		const primaryBytes = primary.responseBytes ?? 0;
		const problemBytes = problem.responseBytes ?? 0;
		if (problemBytes !== primaryBytes) {
			return problemBytes > primaryBytes ? problem : primary;
		}
		return (problem.requests ?? 0) > (primary.requests ?? 0)
			? problem
			: primary;
	});
}

function contributorShare(
	contributorBytes: number,
	kindBytes: number,
): number {
	if (kindBytes <= 0) return 0;
	return contributorBytes / kindBytes;
}

function serverErrorCount(view: ReportViewInput): number {
	return view.byStatus
		.filter(({ label }) => Number(label) >= 500)
		.reduce((sum, row) => sum + row.count, 0);
}

const INSIGHT_TEMPLATES: InsightTemplate[] = [
	{
		kind: "fact",
		when: (ctx) => {
			const dominant = dominantSegment(ctx.summary.distribution.segments);
			return dominant !== null && dominant.share >= CONCENTRATION_SHARE;
		},
		render: (ctx) => {
			const dominant = dominantSegment(ctx.summary.distribution.segments);
			if (!dominant) return "";
			const label = dominant.label.toLowerCase();
			return `Bandwidth is dominated by ${label} (${formatDistributionShare(dominant.share)}).`;
		},
		score: (ctx) => {
			const dominant = dominantSegment(ctx.summary.distribution.segments);
			return dominant ? dominant.share * 100 : 0;
		},
	},
	{
		kind: "fact",
		when: (ctx) => {
			const query = ctx.topContributors.query;
			if (!query) return false;
			return (
				contributorShare(
					query.responseBytes,
					ctx.view.byUrlKind.query.responseBytes,
				) >= CONCENTRATION_SHARE
			);
		},
		render: () => "Only one query is responsible for most query bandwidth.",
		score: (ctx) => {
			const query = ctx.topContributors.query;
			if (!query) return 0;
			return (
				contributorShare(
					query.responseBytes,
					ctx.view.byUrlKind.query.responseBytes,
				) * 80
			);
		},
	},
	{
		kind: "fact",
		when: (ctx) => {
			const image = ctx.topContributors.image;
			if (!image) return false;
			return (
				contributorShare(
					image.responseBytes,
					ctx.view.byUrlKind.image.responseBytes,
				) >= CONCENTRATION_SHARE
			);
		},
		render: () => "A single image accounts for most image bandwidth.",
		score: (ctx) => {
			const image = ctx.topContributors.image;
			if (!image) return 0;
			return (
				contributorShare(
					image.responseBytes,
					ctx.view.byUrlKind.image.responseBytes,
				) * 70
			);
		},
	},
	{
		kind: "opportunity",
		when: (ctx) => primaryProblem([...ctx.summary.critical, ...ctx.summary.warnings]) !== null,
		render: (ctx) => {
			const primary = primaryProblem([
				...ctx.summary.critical,
				...ctx.summary.warnings,
			]);
			if (!primary) return "";
			if (primary.id === "image-width") {
				return "Image dimensions appear to be the primary optimization opportunity.";
			}
			if (primary.id === "groq-spread") {
				return "GROQ query shape appears to be the main bandwidth driver.";
			}
			if (primary.id === "image-format" || primary.id === "image-quality") {
				return "Image CDN settings appear to be the primary optimization opportunity.";
			}
			if (primary.id === "mp4-transfer") {
				return "Video delivery format appears to be the primary optimization opportunity.";
			}
			if (primary.id === "status-5xx") {
				return "Server reliability appears to be the most urgent issue.";
			}
			return "Client request errors appear to need attention.";
		},
		score: (ctx) => {
			const primary = primaryProblem([
				...ctx.summary.critical,
				...ctx.summary.warnings,
			]);
			if (!primary) return 0;
			const bytes = primary.responseBytes ?? 0;
			if (ctx.view.responseBytes <= 0) return 50;
			return Math.max(40, (bytes / ctx.view.responseBytes) * 100);
		},
	},
	{
		kind: "health",
		when: (ctx) => {
			const count = serverErrorCount(ctx.view);
			if (count === 0) return false;
			return count / Math.max(ctx.view.requests, 1) < REASSURING_5XX_RATE;
		},
		render: (ctx) => {
			const count = serverErrorCount(ctx.view);
			return `Server health appears normal with only ${formatNumber(count)} 5xx ${count === 1 ? "response" : "responses"}.`;
		},
		score: () => 55,
	},
	{
		kind: "health",
		when: (ctx) => {
			const count = serverErrorCount(ctx.view);
			if (count === 0) return false;
			return count / Math.max(ctx.view.requests, 1) >= REASSURING_5XX_RATE;
		},
		render: () => "Server errors are elevated and likely need investigation.",
		score: () => 90,
	},
	{
		kind: "health",
		when: (ctx) =>
			ctx.summary.critical.length === 0 &&
			ctx.summary.warnings.length === 0,
		render: () => "No major optimization targets stand out in this dataset.",
		score: () => 20,
	},
];

function renderSynthesis(ctx: NarrativeContext): string | null {
	const problems = [...ctx.summary.critical, ...ctx.summary.warnings];
	const primary = primaryProblem(problems);
	const health = ctx.summary.overallHealth;

	if (health === "red" && primary?.id === "status-5xx") {
		return "Server reliability should be addressed before bandwidth optimizations.";
	}

	if (problems.length === 0) {
		return "Overall this dataset looks healthy with no significant issues detected.";
	}

	if (primary) {
		const target = PRIMARY_OPPORTUNITY_LABEL[primary.id];
		if (target) {
			if (health === "green") {
				return `Overall this dataset shows a healthy API with ${target} being the primary optimization target.`;
			}
			return `Overall this dataset is generally healthy, with ${target} as the primary optimization target.`;
		}
	}

	return "Overall this dataset has a mix of issues worth reviewing in the sections below.";
}

export function buildAtAGlance(
	view: ReportViewInput,
	summary: ReportSummary,
): ReportInsight[] {
	const ctx: NarrativeContext = {
		view,
		summary,
		topContributors: summary.topContributors,
	};

	const bullets = INSIGHT_TEMPLATES.filter((template) => template.when(ctx))
		.map((template) => ({
			text: template.render(ctx),
			kind: template.kind,
			score: template.score(ctx),
		}))
		.filter((item) => item.text.length > 0)
		.sort((a, b) => b.score - a.score);

	const selected: ReportInsight[] = [];
	const usedKinds = new Set<ReportInsight["kind"]>();
	for (const item of bullets) {
		if (selected.length >= 4) break;
		if (item.kind !== "health" && usedKinds.has(item.kind)) continue;
		selected.push({ text: item.text, kind: item.kind });
		usedKinds.add(item.kind);
	}

	const synthesis = renderSynthesis(ctx);
	if (synthesis) {
		selected.push({ text: synthesis, kind: "synthesis" });
	}

	return selected;
}

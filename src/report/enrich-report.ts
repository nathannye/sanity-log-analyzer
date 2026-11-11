import type {
	GroqParseFailureReason,
	GroqParseFailures,
	GroqUrlDetails,
	RankedRow,
	ReportData,
	ReportDataInput,
	ReportIssue,
} from "../types.js";
import { analyzeGroqQuery } from "./analyze-groq.js";
import { formatGroqForDisplay } from "./format-groq.js";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";
import { highlightGroq } from "./highlight-groq.js";
import { renderReportMarkdown } from "./markdown.js";
import {
	aggregateUserAgentStats,
	parseUserAgent,
	type ParsedUserAgent,
} from "./parse-user-agent.js";
import {
	buildFileIssues,
	buildImageIssues,
	buildQueryIssues,
	buildResponseStatusIssues,
	buildSummaryMessage,
	buildTrafficIssues,
} from "./summarize.js";

function buildUserAgentByLabel(
	rows: RankedRow[],
): Record<string, ParsedUserAgent> {
	const byLabel: Record<string, ParsedUserAgent> = {};
	for (const row of rows) {
		byLabel[row.label] = parseUserAgent(row.label);
	}
	return byLabel;
}

function collectParseFailures(
	failures: Map<string, GroqParseFailureReason>,
): GroqParseFailures {
	const reasons = [...failures.values()].sort(
		(a, b) => b.count - a.count || a.reason.localeCompare(b.reason),
	);
	return {
		count: reasons.reduce((total, entry) => total + entry.count, 0),
		reasons,
	};
}

function enrichUrlRows(rows: RankedRow[]): {
	rows: RankedRow[];
	groqByUrl: Record<string, GroqUrlDetails>;
	parseFailures: GroqParseFailures;
} {
	const groqByUrl: Record<string, GroqUrlDetails> = {};
	const failures = new Map<string, GroqParseFailureReason>();

	const enrichedRows = rows.map((row) => {
		const query = extractGroqQuery(row.label);
		if (!query) return row;

		const params = extractGroqParams(row.label);
		const formattedQuery = formatGroqForDisplay(query);
		const result = analyzeGroqQuery(formattedQuery, params ?? undefined);
		const analysis = result.ok ? result.analysis : null;
		const parseError = result.ok ? null : result.reason;
		const stats = analysis?.stats ?? null;
		const hasSpreadOperator = (stats?.spreads ?? 0) > 0;

		if (parseError) {
			const existing = failures.get(parseError);
			if (existing) {
				existing.count += 1;
			} else {
				failures.set(parseError, {
					reason: parseError,
					count: 1,
					sampleQuery: formattedQuery,
				});
			}
		}

		groqByUrl[row.label] = {
			query,
			params,
			formattedQuery,
			highlightedQuery: highlightGroq(formattedQuery),
			stats,
			hasSpreadOperator,
			parseError,
		};

		return {
			...row,
			groq: {
				projections: stats?.projections ?? 0,
				arrayTraversals: stats?.arrayTraversals ?? 0,
				dereferences: stats?.dereferences ?? 0,
				issues: analysis?.issues ?? [],
			},
		};
	});

	return {
		rows: enrichedRows,
		groqByUrl,
		parseFailures: collectParseFailures(failures),
	};
}

export function enrichReportData(data: ReportDataInput): ReportData {
	const {
		rows: queryEntries,
		groqByUrl,
		parseFailures,
	} = enrichUrlRows(data.queries.entries);
	const severityCtx = {
		requestCount: data.summary.requestCount,
		bandwidth: data.summary.bandwidth,
	};

	const imagesIssues = buildImageIssues(data.images.entries, severityCtx);
	const filesIssues = buildFileIssues(data.files.entries, severityCtx);
	const queriesIssues = buildQueryIssues(queryEntries, severityCtx);
	const responseIssues = buildResponseStatusIssues(
		data.responseStatuses.entries,
	);
	const trafficIssues = buildTrafficIssues(data.summary);

	const allIssues: ReportIssue[] = [
		...trafficIssues,
		...imagesIssues,
		...filesIssues,
		...queriesIssues,
		...responseIssues,
	];

	const enriched: ReportData = {
		title: data.title,
		sourcePath: data.sourcePath,
		generatedAt: data.generatedAt,
		projectId: data.projectId,
		dateStart: data.dateStart,
		dateEnd: data.dateEnd,
		config: data.config,
		summary: {
			message: buildSummaryMessage(allIssues),
			bandwidth: data.summary.bandwidth,
			requestCount: data.summary.requestCount,
			studioRequestPercent: data.summary.studioRequestPercent,
			cdnDeliveryPercent: data.summary.cdnDeliveryPercent,
			studioBandwidth: data.summary.studioBandwidth,
			cdnBandwidth: data.summary.cdnBandwidth,
			issues: trafficIssues,
		},
		images: {
			entries: data.images.entries,
			issues: imagesIssues,
		},
		files: {
			entries: data.files.entries,
			issues: filesIssues,
		},
		queries: {
			entries: queryEntries,
			issues: queriesIssues,
			groqByUrl,
			parseFailures,
		},
		responseStatuses: {
			entries: data.responseStatuses.entries,
			issues: responseIssues,
		},
		responseSizes: {
			entries: data.responseSizes.entries,
			issues: data.responseSizes.issues ?? [],
		},
		hourlyBandwidth: {
			entries: data.hourlyBandwidth.entries,
			issues: data.hourlyBandwidth.issues ?? [],
		},
		dailyBandwidth: {
			entries: data.dailyBandwidth.entries,
			issues: data.dailyBandwidth.issues ?? [],
		},
		referrers: data.referrers,
		ips: data.ips,
		userAgents: {
			entries: data.userAgents.entries,
			userAgentByLabel: buildUserAgentByLabel(data.userAgents.entries),
			userAgentStats: aggregateUserAgentStats(data.userAgents.entries),
		},
		markdown: "",
	};

	return {
		...enriched,
		markdown: renderReportMarkdown(enriched),
	};
}

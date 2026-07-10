import type {
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

function enrichUrlRows(rows: RankedRow[]): {
	rows: RankedRow[];
	groqByUrl: Record<string, GroqUrlDetails>;
} {
	const groqByUrl: Record<string, GroqUrlDetails> = {};
	const enrichedRows = rows.map((row) => {
		const query = extractGroqQuery(row.label);
		if (!query) return row;

		const params = extractGroqParams(row.label);
		const formattedQuery = formatGroqForDisplay(query);
		const analysis = analyzeGroqQuery(formattedQuery, params ?? undefined);
		const stats = analysis?.stats ?? null;
		const hasSpreadOperator = (stats?.spreads ?? 0) > 0;

		groqByUrl[row.label] = {
			query,
			params,
			formattedQuery,
			highlightedQuery: highlightGroq(formattedQuery),
			stats,
			hasSpreadOperator,
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

	return { rows: enrichedRows, groqByUrl };
}

export function enrichReportData(data: ReportDataInput): ReportData {
	const { rows: queryEntries, groqByUrl } = enrichUrlRows(data.queries.entries);
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

	const allIssues: ReportIssue[] = [
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
		},
		responseStatuses: {
			entries: data.responseStatuses.entries,
			issues: responseIssues,
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

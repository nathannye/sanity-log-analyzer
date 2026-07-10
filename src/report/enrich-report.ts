import type {
	GroqUrlDetails,
	RankedRow,
	ReportData,
	ReportDataInput,
	ReportView,
	ReportViewInput,
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
import { buildReportSummary } from "./summarize.js";

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

export function enrichReportView(view: ReportViewInput): ReportView {
	const { rows: byUrl, groqByUrl } = enrichUrlRows(view.byUrl);
	const withUrls: ReportViewInput = { ...view, byUrl };

	return {
		...withUrls,
		summary: buildReportSummary(withUrls),
		userAgentByLabel: buildUserAgentByLabel(view.byUserAgent),
		userAgentStats: aggregateUserAgentStats(view.byUserAgent),
		groqByUrl,
	};
}

export function enrichReportData(data: ReportDataInput): ReportData {
	const all = enrichReportView(data.all);
	const billable = enrichReportView(data.billable);
	const enriched: ReportData = {
		...data,
		all,
		billable,
		markdown: {
			billable: "",
			all: "",
		},
	};

	return {
		...enriched,
		markdown: {
			billable: renderReportMarkdown(enriched, "billable"),
			all: renderReportMarkdown(enriched, "all"),
		},
	};
}

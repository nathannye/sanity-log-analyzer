import type {
	GroqUrlDetails,
	RankedRow,
	ReportData,
	ReportDataInput,
	ReportView,
	ReportViewInput,
} from "../types.js";
import {
	analyzeGroqQuery,
	hasGroqSpreadOperator,
} from "./analyze-groq.js";
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

function buildGroqByUrl(rows: RankedRow[]): Record<string, GroqUrlDetails> {
	const byUrl: Record<string, GroqUrlDetails> = {};

	for (const row of rows) {
		const query = extractGroqQuery(row.label);
		if (!query) continue;

		const params = extractGroqParams(row.label);
		const formattedQuery = formatGroqForDisplay(query);
		const stats = analyzeGroqQuery(formattedQuery, params ?? undefined);

		byUrl[row.label] = {
			query,
			params,
			formattedQuery,
			highlightedQuery: highlightGroq(formattedQuery),
			stats,
			hasSpreadOperator: hasGroqSpreadOperator(
				formattedQuery,
				params ?? undefined,
			),
		};
	}

	return byUrl;
}

export function enrichReportView(view: ReportViewInput): ReportView {
	return {
		...view,
		summary: buildReportSummary(view),
		userAgentByLabel: buildUserAgentByLabel(view.byUserAgent),
		userAgentStats: aggregateUserAgentStats(view.byUserAgent),
		groqByUrl: buildGroqByUrl(view.byUrl),
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

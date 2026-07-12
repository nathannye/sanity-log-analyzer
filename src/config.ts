import { readFile } from "node:fs/promises";
import { DEFAULT_HISTOGRAM_BUCKETS } from "./response-size-buckets.js";
import type { PartialReportConfig, ReportConfig } from "./types.js";

export const DEFAULT_REPORT_CONFIG: ReportConfig = {
	title: "Sanity Request Log Report",
	topN: 50,
	histogramBuckets: [...DEFAULT_HISTOGRAM_BUCKETS],
	sections: {
		images: true,
		files: true,
		queries: true,
		responseStatuses: true,
		responseSizes: true,
		hourlyBandwidth: true,
		dailyBandwidth: true,
		referrers: true,
		userAgents: true,
		ips: true,
	},
};

export function resolveReportConfig(
	input: PartialReportConfig = {},
): ReportConfig {
	return {
		title: input.title ?? DEFAULT_REPORT_CONFIG.title,
		topN: input.topN ?? DEFAULT_REPORT_CONFIG.topN,
		histogramBuckets:
			input.histogramBuckets ?? DEFAULT_REPORT_CONFIG.histogramBuckets,
		sections: {
			...DEFAULT_REPORT_CONFIG.sections,
			...(input.sections ?? {}),
		},
	};
}

export async function loadReportConfig(
	configPath?: string,
): Promise<ReportConfig> {
	if (!configPath) return resolveReportConfig();
	const text = await readFile(configPath, "utf8");
	if (!text.trim()) return resolveReportConfig();
	return resolveReportConfig(JSON.parse(text) as PartialReportConfig);
}

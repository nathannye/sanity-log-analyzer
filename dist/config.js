import { readFile } from "node:fs/promises";
export const DEFAULT_REPORT_CONFIG = {
    title: "Sanity Request Log Report",
    topN: 50,
    histogramBuckets: [0, 1024, 10_240, 102_400, 1_048_576, 10_485_760, Infinity],
    sections: {
        domain: true,
        endpoint: true,
        date: true,
        hour: true,
        status: true,
        histogram: true,
        urls: true,
        referers: true,
        userAgents: true,
        ips: true,
        billableComparison: true,
    },
};
export function resolveReportConfig(input = {}) {
    return {
        title: input.title ?? DEFAULT_REPORT_CONFIG.title,
        topN: input.topN ?? DEFAULT_REPORT_CONFIG.topN,
        histogramBuckets: input.histogramBuckets ?? DEFAULT_REPORT_CONFIG.histogramBuckets,
        sections: {
            ...DEFAULT_REPORT_CONFIG.sections,
            ...(input.sections ?? {}),
        },
    };
}
export async function loadReportConfig(configPath) {
    if (!configPath)
        return resolveReportConfig();
    const text = await readFile(configPath, "utf8");
    if (!text.trim())
        return resolveReportConfig();
    return resolveReportConfig(JSON.parse(text));
}
//# sourceMappingURL=config.js.map
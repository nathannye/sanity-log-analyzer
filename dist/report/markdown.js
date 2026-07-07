import { formatBytes, formatNumber, formatPercentage, formatReadableDate, } from "../format.js";
import { avgBytesPerRequest } from "../ranked-row.js";
import { aggregateUserAgentStats, parseUserAgent, } from "./parse-user-agent.js";
export function escapeMarkdownCell(value) {
    return value.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}
export function slugifyReportFilename(title) {
    const slug = title
        .toLowerCase()
        .trim()
        .replaceAll(/[^\w\s-]/g, "")
        .replaceAll(/\s+/g, "-")
        .replaceAll(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
    return slug || "report";
}
export function markdownReportFilename(data, view) {
    const base = slugifyReportFilename(data.title);
    const suffix = view === "billable" ? "_billable-only" : "_all";
    return `${base}${suffix}.md`;
}
function rankedTable(title, rows) {
    if (rows.length === 0)
        return "";
    const lines = [
        `### ${title}`,
        "",
        "| Label | Requests | Bandwidth | Avg / req |",
        "| --- | ---: | ---: | ---: |",
    ];
    for (const row of rows) {
        lines.push(`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`);
    }
    lines.push("");
    return lines.join("\n");
}
function userAgentTable(title, rows) {
    if (rows.length === 0)
        return "";
    const stats = aggregateUserAgentStats(rows);
    const lines = [`### ${title}`, ""];
    if (stats.trackableRequests > 0) {
        lines.push(`Mac ${formatPercentage(stats.macPct)} · Windows ${formatPercentage(stats.windowsPct)} · Mobile ${formatPercentage(stats.mobilePct)} · Desktop ${formatPercentage(stats.desktopPct)}`, "");
    }
    lines.push("| Device | Label | Requests | Bandwidth | Avg / req |", "| --- | --- | ---: | ---: | ---: |");
    for (const row of rows) {
        const parsed = parseUserAgent(row.label);
        const device = parsed.deviceKind === "mobile"
            ? "Mobile"
            : parsed.deviceKind === "desktop"
                ? "Desktop"
                : "—";
        lines.push(`| ${device} | ${escapeMarkdownCell(`${parsed.displayLabel} — ${parsed.raw}`)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`);
    }
    lines.push("");
    return lines.join("\n");
}
function countTable(title, rows) {
    if (rows.length === 0)
        return "";
    const lines = [
        `### ${title}`,
        "",
        "| Label | Count |",
        "| --- | ---: |",
    ];
    for (const row of rows) {
        lines.push(`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.count)} |`);
    }
    lines.push("");
    return lines.join("\n");
}
function renderSummary(view) {
    const period = view.firstTimestamp && view.lastTimestamp
        ? `${formatReadableDate(view.firstTimestamp)} → ${formatReadableDate(view.lastTimestamp)}`
        : "No timestamps found";
    return [
        "## Summary",
        "",
        `- Requests: ${formatNumber(view.requests)}`,
        `- Response bandwidth: ${formatBytes(view.responseBytes)}`,
        `- Request bytes: ${formatBytes(view.requestBytes)}`,
        `- Period: ${period}`,
        `- Studio: ${formatNumber(view.studio.requests)} requests, ${formatBytes(view.studio.responseBytes)} response`,
        `- Billable: ${formatNumber(view.nonStudio.requests)} requests, ${formatBytes(view.nonStudio.responseBytes)} response`,
        "",
    ].join("\n");
}
function renderSections(view, sections) {
    const parts = [];
    if (sections.domain)
        parts.push(rankedTable("Top domains", view.byDomain));
    if (sections.endpoint)
        parts.push(rankedTable("Top endpoints", view.byEndpoint));
    if (sections.date)
        parts.push(rankedTable("Daily bandwidth", view.byDate));
    if (sections.hour)
        parts.push(rankedTable("Hourly bandwidth", view.byHour));
    if (sections.status)
        parts.push(countTable("Response codes", view.byStatus));
    if (sections.histogram) {
        parts.push(countTable("Response size buckets", view.responseSizeHistogram));
    }
    if (sections.urls)
        parts.push(rankedTable("Top URLs", view.byUrl));
    if (sections.referers)
        parts.push(rankedTable("Top referers", view.byReferer));
    if (sections.userAgents) {
        parts.push(userAgentTable("Top user agents", view.byUserAgent));
    }
    if (sections.ips)
        parts.push(rankedTable("Top IPs", view.byIp));
    return parts.filter(Boolean).join("\n");
}
export function renderReportMarkdown(data, viewKey) {
    const view = viewKey === "billable" ? data.billable : data.all;
    return [
        `# ${data.title}`,
        "",
        `- Source: \`${data.sourcePath}\``,
        `- Generated: ${data.generatedAt}`,
        `- View: ${view.label}`,
        `- Max table rows: ${data.config.topN}`,
        "",
        renderSummary(view),
        renderSections(view, data.config.sections),
    ].join("\n");
}
//# sourceMappingURL=markdown.js.map
import assert from "node:assert/strict";
import test from "node:test";
import { renderReportHtml } from "./report/render.js";
import { SAMPLE_REPORT } from "./sample-report-data.js";
test("renderReportHtml produces a self-contained html report", () => {
    const html = renderReportHtml(SAMPLE_REPORT);
    assert.ok(html.includes("<!DOCTYPE html>"));
    assert.ok(html.includes("Sanity Log Report"));
    assert.ok(html.includes('id="report-data"'));
    assert.ok(html.includes("Top domains"));
    assert.ok(html.includes("<style>"));
    assert.ok(!html.includes("<details"));
});
test("renderReportHtml includes TOC links for enabled sections", () => {
    const html = renderReportHtml(SAMPLE_REPORT);
    assert.ok(html.includes('aria-label="Report sections"'));
    assert.ok(html.includes('href="#summary"'));
    assert.ok(html.includes('href="#domain"'));
    assert.ok(html.includes('href="#urls"'));
    assert.ok(html.includes('href="#urls/query"'));
    assert.ok(html.includes("data-toc-link"));
});
test("renderReportHtml includes tabbed Top URLs with GROQ flyout", () => {
    const html = renderReportHtml(SAMPLE_REPORT);
    assert.ok(html.includes("data-url-tabs"));
    assert.ok(html.includes('data-url-tab="query"'));
    assert.ok(html.includes("Avg / req"));
    assert.ok(html.includes("language-groq"));
    assert.ok(html.includes("View query"));
    assert.ok(html.includes("<dialog"));
    assert.ok(html.includes("Array Traversals"));
});
test("renderReportHtml omits TOC links for disabled sections", () => {
    const html = renderReportHtml({
        ...SAMPLE_REPORT,
        config: {
            ...SAMPLE_REPORT.config,
            sections: {
                ...SAMPLE_REPORT.config.sections,
                ips: false,
            },
        },
    });
    assert.ok(!html.includes('href="#ips"'));
    assert.ok(html.includes('href="#domain"'));
});
test("renderReportHtml shows billable view by default with toggle", () => {
    const html = renderReportHtml(SAMPLE_REPORT);
    assert.ok(html.includes('id="show-studio-requests"'));
    assert.ok(html.includes("Show non-billable studio requests"));
    assert.match(html, /data-report-view="billable"[^>]*>/);
    assert.match(html, /data-report-view="all"[^>]*hidden/);
});
test("renderReportHtml hides toggle when billableComparison is disabled", () => {
    const html = renderReportHtml({
        ...SAMPLE_REPORT,
        config: {
            ...SAMPLE_REPORT.config,
            sections: {
                ...SAMPLE_REPORT.config.sections,
                billableComparison: false,
            },
        },
    });
    const body = html.slice(0, html.indexOf("<script"));
    assert.ok(!body.includes('id="show-studio-requests"'));
    assert.ok(body.includes('data-report-view="all"'));
    assert.ok(!body.includes('data-report-view="billable"'));
    assert.ok(body.includes('id="download-markdown"'));
});
test("renderReportHtml includes markdown download payload and scripts", () => {
    const html = renderReportHtml(SAMPLE_REPORT);
    assert.ok(html.includes('id="download-markdown"'));
    assert.ok(html.includes("Download markdown for LLM"));
    assert.ok(html.includes('id="report-markdown"'));
    assert.ok(html.includes('"filenameBase":"sanity-log-report"'));
    assert.ok(html.includes("Billable requests"));
    assert.ok(html.includes("All requests"));
    assert.ok(html.includes("window.__showReportToast"));
    assert.ok(html.includes('__showReportToast("Downloaded")'));
});
test("renderReportHtml includes sortable table headers and script", () => {
    const html = renderReportHtml(SAMPLE_REPORT);
    assert.ok(html.includes("data-sortable-table"));
    assert.ok(html.includes('data-sort-key="bandwidth"'));
    assert.ok(html.includes('data-sort-direction="none"'));
    assert.ok(html.includes('data-row-index="0"'));
    assert.ok(html.includes('data-sort-bandwidth="'));
    assert.ok(html.includes("[data-sort-key]"));
});
//# sourceMappingURL=render.test.js.map
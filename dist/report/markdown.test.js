import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { generateMarkdown, markdownReportFilename, writeMarkdownReport, } from "../index.js";
import { SAMPLE_REPORT } from "../sample-report-data.js";
import { escapeMarkdownCell, renderReportMarkdown, slugifyReportFilename, } from "./markdown.js";
test("renderReportMarkdown includes title, summary, and table sections", () => {
    const markdown = renderReportMarkdown(SAMPLE_REPORT, "billable");
    assert.ok(markdown.includes("# Sanity Log Report"));
    assert.ok(markdown.includes("## Summary"));
    assert.ok(markdown.includes("Requests: 8"));
    assert.ok(markdown.includes("### Top domains"));
    assert.ok(markdown.includes("### Top endpoints"));
    assert.ok(markdown.includes("### Top URLs"));
    assert.ok(markdown.includes("| listen |"));
});
test("renderReportMarkdown billable vs all views differ", () => {
    const billable = renderReportMarkdown(SAMPLE_REPORT, "billable");
    const all = renderReportMarkdown(SAMPLE_REPORT, "all");
    assert.ok(billable.includes("Requests: 8"));
    assert.ok(all.includes("Requests: 9"));
    assert.notEqual(billable, all);
});
test("renderReportMarkdown omits disabled sections", () => {
    const markdown = renderReportMarkdown({
        ...SAMPLE_REPORT,
        config: {
            ...SAMPLE_REPORT.config,
            sections: {
                ...SAMPLE_REPORT.config.sections,
                ips: false,
            },
        },
    }, "billable");
    assert.ok(!markdown.includes("### Top IPs"));
    assert.ok(markdown.includes("### Top domains"));
});
test("renderReportMarkdown includes grouped URL sections with issue annotations", () => {
    const markdown = renderReportMarkdown(SAMPLE_REPORT, "billable");
    assert.ok(markdown.includes("#### Images"));
    assert.ok(markdown.includes("#### Files"));
    assert.ok(markdown.includes("#### Other"));
    assert.ok(!markdown.includes("#### Queries"));
    assert.ok(markdown.includes("width exceeds 2000px"));
    assert.ok(markdown.includes("quality exceeds 87"));
    assert.ok(markdown.includes('format should be "auto"'));
    assert.ok(markdown.includes("consider HLS streaming instead of MP4"));
});
test("renderReportMarkdown includes Queries when query URLs are present", () => {
    const markdown = renderReportMarkdown(SAMPLE_REPORT, "all");
    assert.ok(markdown.includes("#### Queries"));
});
test("renderReportMarkdown annotates GROQ queries that use spread operators", () => {
    const spreadQuery = "https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B...%2C%20title%7D";
    const markdown = renderReportMarkdown({
        ...SAMPLE_REPORT,
        all: {
            ...SAMPLE_REPORT.all,
            byUrl: [
                ...SAMPLE_REPORT.all.byUrl,
                { label: spreadQuery, requests: 2, responseBytes: 120 },
            ],
        },
    }, "all");
    assert.ok(markdown.includes("uses the {...} spread operator"));
});
test("escapeMarkdownCell escapes pipes and newlines", () => {
    assert.equal(escapeMarkdownCell("a|b"), "a\\|b");
    assert.equal(escapeMarkdownCell("line\nbreak"), "line break");
});
test("slugifyReportFilename produces safe filenames", () => {
    assert.equal(slugifyReportFilename("Sanity Log Report"), "sanity-log-report");
    assert.equal(slugifyReportFilename("  "), "report");
});
test("markdownReportFilename uses view suffixes", () => {
    assert.equal(markdownReportFilename(SAMPLE_REPORT, "billable"), "sanity-log-report_billable-only.md");
    assert.equal(markdownReportFilename(SAMPLE_REPORT, "all"), "sanity-log-report_all.md");
});
test("generateMarkdown defaults to billable view", () => {
    const markdown = generateMarkdown(SAMPLE_REPORT);
    assert.ok(markdown.includes("Billable requests"));
    assert.ok(markdown.includes("Requests: 8"));
});
test("generateMarkdown supports all view", () => {
    const markdown = generateMarkdown(SAMPLE_REPORT, { view: "all" });
    assert.ok(markdown.includes("All requests"));
    assert.ok(markdown.includes("Requests: 9"));
});
test("writeMarkdownReport writes expected content", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-md-"));
    try {
        const outputPath = join(dir, "report.md");
        await writeMarkdownReport(SAMPLE_REPORT, outputPath, { view: "billable" });
        const written = await readFile(outputPath, "utf8");
        assert.equal(written, generateMarkdown(SAMPLE_REPORT, { view: "billable" }));
    }
    finally {
        await rm(dir, { recursive: true, force: true });
    }
});
//# sourceMappingURL=markdown.test.js.map
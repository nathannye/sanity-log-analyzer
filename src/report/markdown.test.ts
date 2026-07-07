import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
	generateMarkdown,
	markdownReportFilename,
	writeMarkdownReport,
} from "../index.js";
import { SAMPLE_REPORT } from "../sample-report-data.js";
import {
	escapeMarkdownCell,
	renderReportMarkdown,
	slugifyReportFilename,
} from "./markdown.js";

test("renderReportMarkdown includes title, summary, and table sections", () => {
	const markdown = renderReportMarkdown(SAMPLE_REPORT, "billable");

	assert.ok(markdown.includes("# Sanity Log Report"));
	assert.ok(markdown.includes("## Summary"));
	assert.ok(markdown.includes("Requests: 1"));
	assert.ok(markdown.includes("### Top domains"));
	assert.ok(markdown.includes("### Top endpoints"));
	assert.ok(markdown.includes("### Top URLs"));
	assert.ok(markdown.includes("| listen |"));
});

test("renderReportMarkdown billable vs all views differ", () => {
	const billable = renderReportMarkdown(SAMPLE_REPORT, "billable");
	const all = renderReportMarkdown(SAMPLE_REPORT, "all");

	assert.ok(billable.includes("Requests: 1"));
	assert.ok(all.includes("Requests: 2"));
	assert.notEqual(billable, all);
});

test("renderReportMarkdown omits disabled sections", () => {
	const markdown = renderReportMarkdown(
		{
			...SAMPLE_REPORT,
			config: {
				...SAMPLE_REPORT.config,
				sections: {
					...SAMPLE_REPORT.config.sections,
					ips: false,
				},
			},
		},
		"billable",
	);

	assert.ok(!markdown.includes("### Top IPs"));
	assert.ok(markdown.includes("### Top domains"));
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
	assert.equal(
		markdownReportFilename(SAMPLE_REPORT, "billable"),
		"sanity-log-report_billable-only.md",
	);
	assert.equal(
		markdownReportFilename(SAMPLE_REPORT, "all"),
		"sanity-log-report_all.md",
	);
});

test("generateMarkdown defaults to billable view", () => {
	const markdown = generateMarkdown(SAMPLE_REPORT);

	assert.ok(markdown.includes("Billable requests"));
	assert.ok(markdown.includes("Requests: 1"));
});

test("generateMarkdown supports all view", () => {
	const markdown = generateMarkdown(SAMPLE_REPORT, { view: "all" });

	assert.ok(markdown.includes("All requests"));
	assert.ok(markdown.includes("Requests: 2"));
});

test("writeMarkdownReport writes expected content", async () => {
	const dir = await mkdtemp(join(tmpdir(), "sanity-log-md-"));

	try {
		const outputPath = join(dir, "report.md");
		await writeMarkdownReport(SAMPLE_REPORT, outputPath, { view: "billable" });
		const written = await readFile(outputPath, "utf8");

		assert.equal(written, generateMarkdown(SAMPLE_REPORT, { view: "billable" }));
	} finally {
		await rm(dir, { recursive: true, force: true });
	}
});

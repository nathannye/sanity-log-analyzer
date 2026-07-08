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
	assert.ok(markdown.includes("## Executive Summary"));
	assert.ok(markdown.includes("## Summary"));
	assert.ok(markdown.includes("Requests: 8"));
	assert.ok(markdown.includes("### Top domains"));
	assert.ok(markdown.includes("### Top endpoints"));
	assert.ok(markdown.includes("### Top URLs"));
	assert.ok(markdown.includes("| listen |"));
});

test("renderReportMarkdown puts the executive summary before the metrics summary", () => {
	const markdown = renderReportMarkdown(SAMPLE_REPORT, "billable");
	assert.ok(markdown.indexOf("## Executive Summary") < markdown.indexOf("## Summary"));
});

test("renderReportMarkdown billable vs all views differ", () => {
	const billable = renderReportMarkdown(SAMPLE_REPORT, "billable");
	const all = renderReportMarkdown(SAMPLE_REPORT, "all");
	assert.ok(billable.includes("Requests: 8"));
	assert.ok(all.includes("Requests: 9"));
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

test("renderReportMarkdown shows compact summary findings for sample traffic", () => {
	const markdown = renderReportMarkdown(SAMPLE_REPORT, "billable");

	assert.ok(markdown.includes("### Warnings"));
	assert.ok(markdown.includes("### Passed"));
	assert.ok(markdown.includes("image URL requested above 2000px"));
	assert.ok(markdown.includes("image URL missing format=auto"));
	assert.ok(markdown.includes("MP4 URL instead of HLS"));
	assert.ok(markdown.includes("No 5xx responses"));
	assert.ok(markdown.includes("No 4xx responses"));
	assert.ok(
		markdown.includes("80% of image requests avoid explicit non-auto formats"),
	);
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
	const spreadQuery =
		"https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B...%2C%20title%7D";
	const markdown = renderReportMarkdown(
		{
			...SAMPLE_REPORT,
			all: {
				...SAMPLE_REPORT.all,
				byUrl: [
					...SAMPLE_REPORT.all.byUrl,
					{ label: spreadQuery, requests: 2, responseBytes: 120 },
				],
			},
		},
		"all",
	);
	assert.ok(markdown.includes("uses the {...} spread operator"));
});

test("renderReportMarkdown omits empty summary groups when there are no findings", () => {
	const noIssueReport = {
		...SAMPLE_REPORT,
		all: {
			...SAMPLE_REPORT.all,
			requests: 1,
			responseBytes: 120,
			requestBytes: 60,
			byDomain: [],
			byEndpoint: [],
			byDate: [],
			byHour: [],
			byUrl: [],
			byReferer: [],
			byUserAgent: [],
			byIp: [],
			byStatus: [{ label: "200", count: 1 }],
			responseSizeHistogram: [{ label: "0 B - 1 KB", count: 1 }],
		},
		billable: {
			...SAMPLE_REPORT.billable,
			requests: 1,
			responseBytes: 120,
			requestBytes: 60,
			byDomain: [],
			byEndpoint: [],
			byDate: [],
			byHour: [],
			byUrl: [],
			byReferer: [],
			byUserAgent: [],
			byIp: [],
			byStatus: [{ label: "200", count: 1 }],
			responseSizeHistogram: [{ label: "0 B - 1 KB", count: 1 }],
		},
	};

	const markdown = renderReportMarkdown(noIssueReport, "billable");

	assert.ok(markdown.includes("✅ No issues detected"));
	assert.ok(!markdown.includes("### Critical"));
	assert.ok(!markdown.includes("### Warnings"));
	assert.ok(markdown.includes("### Passed"));
});

test("renderReportMarkdown surfaces critical findings for high-bandwidth issues", () => {
	const spreadQuery =
		"https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B...%2Ctitle%7D";
	const criticalReport = {
		...SAMPLE_REPORT,
		all: {
			...SAMPLE_REPORT.all,
			requests: 150,
			responseBytes: 350_000_000,
			requestBytes: 20_000,
			byUrl: [
				{
					label: spreadQuery,
					requests: 100,
					responseBytes: 200_000_000,
				},
				{
					label: "https://cdn.sanity.io/files/project/dataset/clip.mp4",
					requests: 50,
					responseBytes: 150_000_000,
				},
			],
			byStatus: [{ label: "500", count: 3 }],
			responseSizeHistogram: [
				{ label: "0 B - 1 KB", count: 1 },
				{ label: "1 KB - 1 MB", count: 149 },
			],
		},
		billable: {
			...SAMPLE_REPORT.billable,
			requests: 150,
			responseBytes: 350_000_000,
			requestBytes: 20_000,
			byUrl: [
				{
					label: spreadQuery,
					requests: 100,
					responseBytes: 200_000_000,
				},
				{
					label: "https://cdn.sanity.io/files/project/dataset/clip.mp4",
					requests: 50,
					responseBytes: 150_000_000,
				},
			],
			byStatus: [{ label: "500", count: 3 }],
			responseSizeHistogram: [
				{ label: "0 B - 1 KB", count: 1 },
				{ label: "1 KB - 1 MB", count: 149 },
			],
		},
	};

	const markdown = renderReportMarkdown(criticalReport, "billable");

	assert.ok(markdown.includes("### Critical"));
	assert.ok(markdown.includes("GROQ query URL"));
	assert.ok(markdown.includes("MP4 URL"));
	assert.ok(markdown.includes("5xx responses detected"));
	assert.ok(markdown.includes("🚨 4 issues detected"));
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
		assert.equal(
			written,
			generateMarkdown(SAMPLE_REPORT, { view: "billable" }),
		);
	} finally {
		await rm(dir, { recursive: true, force: true });
	}
});

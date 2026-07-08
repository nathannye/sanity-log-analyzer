import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SAMPLE_REPORT } from "../sample-report-data.js";
import { buildReportSummary, summaryHeadline } from "./summarize.js";
import type { ReportView } from "../types.js";

function emptyView(overrides: Partial<ReportView> = {}): ReportView {
	return {
		label: "Empty",
		requests: 1,
		responseBytes: 120,
		requestBytes: 60,
		firstTimestamp: null,
		lastTimestamp: null,
		studio: { requests: 0, responseBytes: 0, requestBytes: 0 },
		nonStudio: { requests: 1, responseBytes: 120, requestBytes: 60 },
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
		...overrides,
	};
}

describe("buildReportSummary", () => {
	it("marks low-signal traffic as green with passed signals", () => {
		const summary = buildReportSummary(emptyView());

		assert.equal(summary.overallHealth, "green");
		assert.equal(summary.issueCounts.critical, 0);
		assert.equal(summary.issueCounts.warning, 0);
		assert.ok(summary.issueCounts.passed > 0);
		assert.equal(summary.topOpportunities.length, 0);
		assert.equal(summary.estimatedSavingsBytes, undefined);
		assert.equal(summaryHeadline(summary), "✅ No issues detected");
	});

	it("surfaces GROQ, MP4, and image findings for sample traffic", () => {
		const summary = buildReportSummary(SAMPLE_REPORT.billable);
		const ids = summary.findings
			.filter((finding) => finding.severity !== "passed")
			.map((finding) => finding.id);

		assert.equal(summary.overallHealth, "yellow");
		assert.ok(ids.includes("mp4-transfer"));
		assert.ok(ids.includes("image-width"));
		assert.ok(ids.includes("image-format"));
		assert.ok(ids.includes("image-quality"));
		assert.ok(ids.includes("image-bandwidth"));
		assert.ok(summary.signals.some((signal) => signal.summary.includes("No 5xx")));
		assert.ok(summary.signals.some((signal) => signal.summary.includes("No 4xx")));
		assert.ok(
			summary.topOpportunities.some((item) => item.issue.includes("MP4")),
		);
		assert.equal(summary.estimatedSavingsBytes, undefined);
	});

	it("marks high-bandwidth GROQ and MP4 traffic red", () => {
		const spreadQuery =
			"https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B...%2Ctitle%7D";
		const summary = buildReportSummary(
			emptyView({
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
			}),
		);

		assert.equal(summary.overallHealth, "red");
		assert.ok(summary.issueCounts.critical >= 3);
		assert.ok(
			summary.findings.some(
				(finding) =>
					finding.id === "groq-spread" && finding.severity === "critical",
			),
		);
		assert.ok(
			summary.findings.some(
				(finding) =>
					finding.id === "mp4-transfer" && finding.severity === "critical",
			),
		);
		assert.ok(
			summary.findings.some(
				(finding) =>
					finding.id === "status-5xx" && finding.severity === "critical",
			),
		);
		assert.ok(summaryHeadline(summary).includes("issues detected"));
	});

	it("only exposes estimated savings when opportunities set an explicit bytes basis", () => {
		const summary = buildReportSummary(SAMPLE_REPORT.billable);
		assert.equal(
			summary.topOpportunities.every(
				(item) => item.estimatedSavingsBytes === undefined,
			),
			true,
		);
		assert.equal(summary.estimatedSavingsBytes, undefined);
	});
});

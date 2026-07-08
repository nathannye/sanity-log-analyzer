import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SAMPLE_REPORT } from "../sample-report-data.js";
import { buildReportSummary, summaryHeadline } from "./summarize.js";
function emptyView(overrides = {}) {
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
        byUrlKind: {
            image: { requests: 0, responseBytes: 0 },
            file: { requests: 0, responseBytes: 0 },
            query: { requests: 0, responseBytes: 0 },
            other: { requests: 0, responseBytes: 0 },
        },
        topContributors: {},
        includesStudio: true,
        ...overrides,
    };
}
describe("buildReportSummary", () => {
    it("marks low-signal traffic as green with healthy signals", () => {
        const summary = buildReportSummary(emptyView());
        assert.equal(summary.overallHealth, "green");
        assert.equal(summary.critical.length, 0);
        assert.equal(summary.warnings.length, 0);
        assert.ok(summary.healthy.length > 0);
        assert.ok(summary.atAGlance.length > 0);
        assert.equal(summaryHeadline(summary), "✅ No issues detected");
    });
    it("surfaces image and MP4 problems for sample traffic", () => {
        const summary = buildReportSummary(SAMPLE_REPORT.billable);
        const problemIds = [...summary.critical, ...summary.warnings].map((problem) => problem.id);
        assert.equal(summary.overallHealth, "yellow");
        assert.ok(problemIds.includes("mp4-transfer"));
        assert.ok(problemIds.includes("image-width"));
        assert.ok(problemIds.includes("image-format"));
        assert.ok(problemIds.includes("image-quality"));
        assert.ok(summary.observations.some((item) => item.summary.includes("Images account")));
        assert.ok(summary.warnings.some((item) => item.summary.includes("exceed 2000px")));
        assert.ok(summary.warnings.some((item) => item.summary.includes("MP4 URL")));
    });
    it("marks high-bandwidth GROQ and MP4 traffic red", () => {
        const spreadQuery = "https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B...%2Ctitle%7D";
        const summary = buildReportSummary(emptyView({
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
            byUrlKind: {
                image: { requests: 0, responseBytes: 0 },
                file: { requests: 50, responseBytes: 150_000_000 },
                query: { requests: 100, responseBytes: 200_000_000 },
                other: { requests: 0, responseBytes: 0 },
            },
            topContributors: {
                query: {
                    label: spreadQuery,
                    requests: 100,
                    responseBytes: 200_000_000,
                },
                file: {
                    label: "https://cdn.sanity.io/files/project/dataset/clip.mp4",
                    requests: 50,
                    responseBytes: 150_000_000,
                },
            },
            byStatus: [{ label: "500", count: 3 }],
            responseSizeHistogram: [
                { label: "0 B - 1 KB", count: 1 },
                { label: "1 KB - 1 MB", count: 149 },
            ],
        }));
        assert.equal(summary.overallHealth, "red");
        assert.ok(summary.critical.length >= 3);
        assert.ok(summary.critical.some((problem) => problem.id === "groq-spread" && problem.severity === "critical"));
        assert.ok(summary.critical.some((problem) => problem.id === "mp4-transfer" && problem.severity === "critical"));
        assert.ok(summary.critical.some((problem) => problem.id === "status-5xx" && problem.severity === "critical"));
        assert.ok(summaryHeadline(summary).includes("issues detected"));
    });
    it("does not emit endpoint concentration problems", () => {
        const summary = buildReportSummary(emptyView({
            byEndpoint: [
                { label: "images", requests: 90, responseBytes: 900 },
                { label: "query", requests: 10, responseBytes: 100 },
            ],
        }));
        const summaries = [...summary.critical, ...summary.warnings].map((item) => item.summary);
        assert.ok(!summaries.some((item) => item.includes("endpoint")));
    });
});
//# sourceMappingURL=summarize.test.js.map
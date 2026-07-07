import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { aggregateLogFile } from "./aggregate.js";
import { resolveReportConfig } from "./config.js";
import { buildReportData } from "./report-data.js";
import { renderReportHtml } from "./report.js";
test("renderReportHtml produces a self-contained html report", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-parser-"));
    const inputPath = join(dir, "sample.ndjson");
    await writeFile(inputPath, JSON.stringify({
        timestamp: "2026-06-14T00:00:00.000Z",
        body: {
            requestSize: 100,
            responseSize: 200,
            status: 200,
            url: "https://example.com/a",
            referer: "",
            userAgent: "UA-1",
            remoteIp: "127.0.0.1",
        },
        attributes: {
            sanity: {
                domain: "api",
                endpoint: "listen",
                studioRequest: false,
            },
        },
    }));
    const summary = await aggregateLogFile(inputPath, [0, 1024, Infinity]);
    const report = buildReportData(summary, resolveReportConfig(), inputPath);
    const html = renderReportHtml(report);
    assert.ok(html.includes("<!DOCTYPE html>"));
    assert.ok(html.includes("Sanity Log Report"));
    assert.ok(html.includes('script type="application/json"'));
    assert.ok(html.includes("Top URLs"));
    assert.ok(html.includes("Studio split"));
    assert.ok(html.includes("Billable requests"));
});
//# sourceMappingURL=report.test.js.map
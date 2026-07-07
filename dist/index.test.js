import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { analyzeLog, writeHtmlReport } from "./index.js";
const SAMPLE_LOG = [
    JSON.stringify({
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
    }),
    "not-json",
    JSON.stringify({
        timestamp: "2026-06-14T01:00:00.000Z",
        body: {
            requestSize: 50,
            responseSize: 75,
            status: 404,
            url: "https://example.com/b",
            referer: "",
            userAgent: "UA-2",
            remoteIp: "127.0.0.2",
        },
        attributes: {
            sanity: {
                domain: "api",
                endpoint: "query",
                studioRequest: true,
            },
        },
    }),
].join("\n");
test("analyzeLog reports byte-based progress ending at 100%", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-analyzer-"));
    const inputPath = join(dir, "sample.ndjson");
    await writeFile(inputPath, SAMPLE_LOG);
    const progressUpdates = [];
    const report = await analyzeLog(inputPath, {
        config: { histogramBuckets: [0, 1024, Infinity] },
        onProgress: (progress) => {
            progressUpdates.push(progress);
        },
    });
    assert.equal(report.all.requests, 2);
    assert.ok(progressUpdates.length > 0);
    const last = progressUpdates.at(-1);
    assert.equal(last?.entriesProcessed, 2);
    assert.equal(last?.percent, 100);
    assert.equal(last?.bytesRead, last?.totalBytes);
});
test("writeHtmlReport writes a self-contained HTML file", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-analyzer-"));
    const inputPath = join(dir, "sample.ndjson");
    const outputPath = join(dir, "report.html");
    await writeFile(inputPath, SAMPLE_LOG);
    const report = await analyzeLog(inputPath, {
        config: { histogramBuckets: [0, 1024, Infinity] },
    });
    await writeHtmlReport(report, outputPath);
    const html = await readFile(outputPath, "utf8");
    assert.ok(html.includes("<!DOCTYPE html>"));
    assert.ok(html.includes("Sanity Log Report"));
});
//# sourceMappingURL=index.test.js.map
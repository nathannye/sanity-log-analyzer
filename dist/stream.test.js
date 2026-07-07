import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { gzipSync } from "node:zlib";
import { streamLogEntries } from "./stream.js";
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
async function collectEntries(inputPath) {
    const entries = [];
    for await (const entry of streamLogEntries(inputPath)) {
        entries.push(entry);
    }
    return entries;
}
test("streamLogEntries reads plain NDJSON", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-analyzer-"));
    const inputPath = join(dir, "sample.ndjson");
    await writeFile(inputPath, SAMPLE_LOG);
    const entries = await collectEntries(inputPath);
    assert.equal(entries.length, 2);
    assert.equal(entries[0]?.status, 200);
    assert.equal(entries[1]?.status, 404);
});
test("streamLogEntries reads gzipped NDJSON", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-analyzer-"));
    const inputPath = join(dir, "sample.ndjson.gz");
    await writeFile(inputPath, gzipSync(SAMPLE_LOG));
    const entries = await collectEntries(inputPath);
    assert.equal(entries.length, 2);
    assert.equal(entries[0]?.url, "https://example.com/a");
    assert.equal(entries[1]?.url, "https://example.com/b");
});
test("streamLogEntries reports compressed-byte progress for gzip input", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-analyzer-"));
    const inputPath = join(dir, "sample.ndjson.gz");
    await writeFile(inputPath, gzipSync(SAMPLE_LOG));
    const progressUpdates = [];
    for await (const _entry of streamLogEntries(inputPath, (progress) => {
        progressUpdates.push(progress);
    })) {
        // consume entries
    }
    assert.ok(progressUpdates.length > 0);
    for (const progress of progressUpdates) {
        assert.ok(progress.bytesRead <= progress.totalBytes);
        assert.ok(progress.percent <= 100);
    }
    const last = progressUpdates.at(-1);
    assert.equal(last?.entriesProcessed, 2);
    assert.equal(last?.percent, 100);
    assert.equal(last?.bytesRead, last?.totalBytes);
});
//# sourceMappingURL=stream.test.js.map
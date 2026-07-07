import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { aggregateLogFile } from "./aggregate.js";
test("aggregateLogFile skips malformed lines and tracks the expected totals", async () => {
    const dir = await mkdtemp(join(tmpdir(), "sanity-log-parser-"));
    const inputPath = join(dir, "sample.ndjson");
    await writeFile(inputPath, [
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
    ].join("\n"));
    const summary = await aggregateLogFile(inputPath, [0, 1024, Infinity]);
    assert.equal(summary.totalRequests, 2);
    assert.equal(summary.totalResponseBytes, 275);
    assert.equal(summary.totalRequestBytes, 150);
    assert.equal(summary.studio.requests, 1);
    assert.equal(summary.nonStudio.requests, 1);
    assert.equal(summary.byDomain.api.requests, 2);
    assert.equal(summary.byEndpoint.listen.requests, 1);
    assert.equal(summary.byEndpoint.query.requests, 1);
    assert.equal(summary.byStatus[200], 1);
    assert.equal(summary.byStatus[404], 1);
    assert.equal(summary.byStatusNonStudio[200], 1);
    assert.equal(summary.responseSizeHistogramNonStudio["0 B - 1 KB"], 1);
});
//# sourceMappingURL=aggregate.test.js.map
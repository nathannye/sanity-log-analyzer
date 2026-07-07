import assert from "node:assert/strict";
import test from "node:test";
import { parseUserAgent, aggregateUserAgentStats } from "./parse-user-agent.js";
const chromeMac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const safariIos = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
test("parseUserAgent formats desktop Chrome on macOS", () => {
    const parsed = parseUserAgent(chromeMac);
    assert.equal(parsed.deviceKind, "desktop");
    assert.equal(parsed.displayLabel, "(macOS Chrome)");
    assert.equal(parsed.raw, chromeMac);
});
test("parseUserAgent formats mobile Safari on iOS", () => {
    const parsed = parseUserAgent(safariIos);
    assert.equal(parsed.deviceKind, "mobile");
    assert.equal(parsed.displayLabel, "(iOS Safari)");
});
test("parseUserAgent handles curl and empty strings", () => {
    assert.equal(parseUserAgent("curl/8.4.0").displayLabel, "(curl)");
    assert.equal(parseUserAgent("").displayLabel, "(Unknown)");
});
test("aggregateUserAgentStats computes request-weighted percentages", () => {
    const chromeMac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
    const safariIos = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
    const windowsChrome = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
    const stats = aggregateUserAgentStats([
        { label: chromeMac, requests: 50 },
        { label: safariIos, requests: 25 },
        { label: windowsChrome, requests: 25 },
    ]);
    assert.equal(stats.totalRequests, 100);
    assert.equal(stats.macPct, 50);
    assert.equal(stats.windowsPct, 25);
    assert.equal(stats.mobilePct, 25);
    assert.equal(stats.desktopPct, 75);
});
//# sourceMappingURL=parse-user-agent.test.js.map
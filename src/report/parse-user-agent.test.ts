import assert from "node:assert/strict";
import test from "node:test";
import { aggregateUserAgentStats, parseUserAgent } from "./parse-user-agent.js";

const chromeMac =
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const safariIos =
	"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

test("parseUserAgent formats desktop Chrome on macOS", () => {
	const parsed = parseUserAgent(chromeMac);
	assert.equal(parsed.deviceKind, "desktop");
	assert.equal(parsed.isTrackable, true);
	assert.equal(parsed.osFamily, "mac");
	assert.equal(parsed.displayLabel, "(macOS Chrome)");
	assert.equal(parsed.raw, chromeMac);
});

test("parseUserAgent formats mobile Safari on iOS", () => {
	const parsed = parseUserAgent(safariIos);
	assert.equal(parsed.deviceKind, "mobile");
	assert.equal(parsed.isTrackable, true);
	assert.equal(parsed.displayLabel, "(iOS Safari)");
});

test("parseUserAgent handles bots and HTTP clients without device icons", () => {
	const curl = parseUserAgent("curl/8.4.0");
	assert.equal(curl.deviceKind, null);
	assert.equal(curl.isTrackable, false);
	assert.equal(curl.displayLabel, "(curl)");

	const sanityClient = parseUserAgent("@sanity/client");
	assert.equal(sanityClient.deviceKind, null);
	assert.equal(sanityClient.isTrackable, false);
	assert.equal(sanityClient.displayLabel, "(@sanity/client)");

	const empty = parseUserAgent("");
	assert.equal(empty.deviceKind, null);
	assert.equal(empty.isTrackable, false);
	assert.equal(empty.displayLabel, "(Unknown)");
});

test("aggregateUserAgentStats excludes bots and clients from percentages", () => {
	const windowsChrome =
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

	const stats = aggregateUserAgentStats([
		{ label: chromeMac, requests: 50 },
		{ label: safariIos, requests: 25 },
		{ label: windowsChrome, requests: 25 },
		{ label: "curl/8.4.0", requests: 200 },
		{ label: "@sanity/client", requests: 100 },
	]);

	assert.equal(stats.trackableRequests, 100);
	assert.equal(stats.macPct, 50);
	assert.equal(stats.windowsPct, 25);
	assert.equal(stats.mobilePct, 25);
	assert.equal(stats.desktopPct, 75);
});

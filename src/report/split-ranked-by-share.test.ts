import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { splitRankedByShare } from "./split-ranked-by-share.js";

describe("splitRankedByShare", () => {
	it("splits rows above the 5% bandwidth threshold", () => {
		const result = splitRankedByShare([
			{ label: "images", requests: 80, responseBytes: 800 },
			{ label: "query", requests: 15, responseBytes: 150 },
			{ label: "listen", requests: 5, responseBytes: 50 },
		]);

		assert.equal(result.major.length, 2);
		assert.deepEqual(
			result.major.map((row) => row.label),
			["images", "query"],
		);
		assert.equal(result.minor.length, 1);
		assert.equal(result.minor[0]?.label, "listen");
		assert.equal(result.minorTotals.responseBytes, 50);
		assert.equal(result.minorTotals.requests, 5);
		assert.equal(result.minorTotals.label, "Show < 5%");
	});
});

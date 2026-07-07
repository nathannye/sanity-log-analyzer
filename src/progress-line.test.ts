import assert from "node:assert/strict";
import test from "node:test";
import { formatBytes, formatPercentage } from "./format.js";
import {
	finishProgressLine,
	formatProgressMessage,
	getSpinnerFrame,
	prefixProgressLine,
	setProgressMessage,
	SPINNER_FRAMES,
	startProgressSpinner,
} from "./progress-line.js";

test("formatProgressMessage builds a compact status line", () => {
	const message = formatProgressMessage(1024, 2048, 50, 1000, formatBytes, formatPercentage);
	assert.match(message, /50\.0%/);
	assert.match(message, /1,000 entries/);
});

test("getSpinnerFrame cycles through braille frames", () => {
	assert.equal(getSpinnerFrame(0), "⠋");
	assert.equal(getSpinnerFrame(7), "⠧");
	assert.equal(getSpinnerFrame(SPINNER_FRAMES.length), "⠋");
});

test("prefixProgressLine formats frame and message", () => {
	assert.equal(
		prefixProgressLine("⠧", "Processed 1 KB / 2 KB (50.0%) — 1 entries"),
		"⠧ Processed 1 KB / 2 KB (50.0%) — 1 entries",
	);
});

test("spinner helpers are no-ops when stdout is not a TTY", () => {
	assert.doesNotThrow(() => {
		startProgressSpinner("Reading sample.ndjson...");
		setProgressMessage("Processed 1 KB / 2 KB (50.0%) — 1 entries");
		finishProgressLine();
	});
});

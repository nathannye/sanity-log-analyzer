import test from "node:test";
import assert from "node:assert/strict";
import { finishProgressLine, formatProgressMessage, updateProgressLine, } from "./progress-line.js";
import { formatBytes, formatPercentage } from "./format.js";
test("formatProgressMessage builds a compact status line", () => {
    const message = formatProgressMessage(1024, 2048, 50, 1000, formatBytes, formatPercentage);
    assert.match(message, /50\.0%/);
    assert.match(message, /1,000 entries/);
});
test("updateProgressLine is a no-op when stdout is not a TTY", () => {
    assert.doesNotThrow(() => {
        updateProgressLine("test");
        finishProgressLine();
    });
});
//# sourceMappingURL=progress-line.test.js.map
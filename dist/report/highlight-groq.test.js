import assert from "node:assert/strict";
import test from "node:test";
import { highlightGroq } from "./highlight-groq.js";
test("highlightGroq wraps GROQ tokens in span elements", () => {
    const html = highlightGroq('*[_type == "post"]');
    assert.match(html, /token wildcard/);
    assert.match(html, /token string/);
    assert.match(html, /token operator/);
});
//# sourceMappingURL=highlight-groq.test.js.map
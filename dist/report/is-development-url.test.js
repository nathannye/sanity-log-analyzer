import assert from "node:assert/strict";
import test from "node:test";
import { isDevelopmentUrl } from "./is-development-url.js";
test("isDevelopmentUrl matches localhost with a port", () => {
    assert.equal(isDevelopmentUrl("http://localhost:3000/"), true);
    assert.equal(isDevelopmentUrl("http://127.0.0.1:5173/app"), true);
});
test("isDevelopmentUrl ignores localhost without a port", () => {
    assert.equal(isDevelopmentUrl("http://localhost/"), false);
    assert.equal(isDevelopmentUrl("http://127.0.0.1/"), false);
});
test("isDevelopmentUrl matches 192.168 addresses", () => {
    assert.equal(isDevelopmentUrl("http://192.168.1.42:3000/"), true);
    assert.equal(isDevelopmentUrl("http://192.168.0.10/"), true);
});
test("isDevelopmentUrl ignores production referers", () => {
    assert.equal(isDevelopmentUrl("https://example.com/"), false);
    assert.equal(isDevelopmentUrl("(empty)"), false);
});
//# sourceMappingURL=is-development-url.test.js.map
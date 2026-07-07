import assert from "node:assert/strict";
import test from "node:test";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";
const QUERY_URL = "https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D";
const PARAMS_URL = "https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5Bslug%20%3D%3D%20%24slug%5D&params=%7B%22slug%22%3A%22hello%22%7D";
test("extractGroqQuery decodes query param", () => {
    assert.equal(extractGroqQuery(QUERY_URL), '*[_type == "post"]');
});
test("extractGroqQuery returns null when param is missing", () => {
    assert.equal(extractGroqQuery("https://abc.api.sanity.io/v2024-01-01/data/query/production"), null);
});
test("extractGroqParams decodes params JSON", () => {
    assert.deepEqual(extractGroqParams(PARAMS_URL), { slug: "hello" });
});
test("extractGroqParams returns null when params are missing", () => {
    assert.equal(extractGroqParams(QUERY_URL), null);
});
test("extractGroqParams returns null for invalid JSON", () => {
    assert.equal(extractGroqParams("https://abc.api.sanity.io/v2024-01-01/data/query/production?params=not-json"), null);
});
//# sourceMappingURL=groq-query.test.js.map
import assert from "node:assert/strict";
import test from "node:test";
import { extractGroqQuery } from "./groq-query.js";
const QUERY_URL = "https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D";
test("extractGroqQuery decodes query param", () => {
    assert.equal(extractGroqQuery(QUERY_URL), '*[_type == "post"]');
});
test("extractGroqQuery returns null when param is missing", () => {
    assert.equal(extractGroqQuery("https://abc.api.sanity.io/v2024-01-01/data/query/production"), null);
});
//# sourceMappingURL=groq-query.test.js.map
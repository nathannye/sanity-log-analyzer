import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { compareSortValues, encodeSortValue, parseSortValue, } from "./sort-table-values.js";
describe("encodeSortValue", () => {
    it("returns empty string for nullish values", () => {
        assert.equal(encodeSortValue(null), "");
        assert.equal(encodeSortValue(undefined), "");
        assert.equal(encodeSortValue(""), "");
    });
    it("stringifies numbers", () => {
        assert.equal(encodeSortValue(42), "42");
        assert.equal(encodeSortValue(0), "0");
    });
});
describe("parseSortValue", () => {
    it("parses empty string as null", () => {
        assert.equal(parseSortValue("", "string"), null);
        assert.equal(parseSortValue("", "number"), null);
    });
    it("parses numbers", () => {
        assert.equal(parseSortValue("42", "number"), 42);
        assert.equal(parseSortValue("not-a-number", "number"), null);
    });
    it("parses strings", () => {
        assert.equal(parseSortValue("alpha", "string"), "alpha");
    });
});
describe("compareSortValues", () => {
    it("sorts strings ascending", () => {
        assert.ok(compareSortValues("a", "b", "string", "asc") < 0);
        assert.ok(compareSortValues("b", "a", "string", "asc") > 0);
    });
    it("sorts strings descending", () => {
        assert.ok(compareSortValues("a", "b", "string", "desc") > 0);
    });
    it("sorts numbers ascending", () => {
        assert.ok(compareSortValues(1, 2, "number", "asc") < 0);
        assert.ok(compareSortValues(2, 1, "number", "asc") > 0);
    });
    it("sorts numbers descending", () => {
        assert.ok(compareSortValues(1, 2, "number", "desc") > 0);
    });
    it("places nulls last in both directions", () => {
        assert.ok(compareSortValues(null, "a", "string", "asc") > 0);
        assert.ok(compareSortValues("a", null, "string", "asc") < 0);
        assert.ok(compareSortValues(null, 1, "number", "desc") > 0);
        assert.ok(compareSortValues(1, null, "number", "desc") < 0);
    });
});
//# sourceMappingURL=sort-table-values.test.js.map
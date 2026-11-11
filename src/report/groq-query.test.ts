import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { extractGroqParams, extractGroqQuery } from "./groq-query.js";

const BASE = "https://example.api.sanity.io/v2025-02-19/data/query/production";

function queryUrl(query: string, extra = ""): string {
	return `${BASE}?query=${encodeURIComponent(query)}${extra}`;
}

describe("extractGroqQuery", () => {
	it("decodes a percent-encoded query", () => {
		assert.equal(
			extractGroqQuery(queryUrl('*[_type == "post"]')),
			'*[_type == "post"]',
		);
	});

	// URLSearchParams already percent-decodes. Decoding a second time threw a
	// URIError here, which was swallowed and silently dropped the query.
	it("keeps a query containing a literal percent sign", () => {
		assert.equal(
			extractGroqQuery(queryUrl('*[title match "100%"]')),
			'*[title match "100%"]',
		);
	});

	it("does not double-decode escape sequences inside the query", () => {
		assert.equal(
			extractGroqQuery(queryUrl('*[slug.current == "a%20b"]')),
			'*[slug.current == "a%20b"]',
		);
	});

	it("returns null when there is no query", () => {
		assert.equal(extractGroqQuery(BASE), null);
		assert.equal(extractGroqQuery("not a url"), null);
	});
});

describe("extractGroqParams", () => {
	// The HTTP API takes GET params as $-prefixed keys with JSON-encoded
	// values; `params` as an object is a POST body field.
	it("reads $-prefixed params with JSON-encoded values", () => {
		const url = queryUrl(
			"*[_type == $type][0...$limit]",
			"&%24limit=10&%24type=%22post%22",
		);
		assert.deepEqual(extractGroqParams(url), { limit: 10, type: "post" });
	});

	it("falls back to the raw string for an unquoted value", () => {
		const url = queryUrl("*[_type == $type]", "&%24type=post");
		assert.deepEqual(extractGroqParams(url), { type: "post" });
	});

	it("still reads a params object blob", () => {
		const url = queryUrl(
			"*[_type == $type]",
			`&params=${encodeURIComponent('{"type":"post"}')}`,
		);
		assert.deepEqual(extractGroqParams(url), { type: "post" });
	});

	it("lets $-prefixed keys win over the params blob", () => {
		const url = queryUrl(
			"*[_type == $type]",
			`&params=${encodeURIComponent('{"type":"page"}')}&%24type=%22post%22`,
		);
		assert.deepEqual(extractGroqParams(url), { type: "post" });
	});

	it("ignores a malformed params blob but keeps $-prefixed keys", () => {
		const url = queryUrl(
			"*[_type == $type]",
			"&params=%7Bnope&%24type=%22post%22",
		);
		assert.deepEqual(extractGroqParams(url), { type: "post" });
	});

	it("returns null when there are no params", () => {
		assert.equal(extractGroqParams(queryUrl('*[_type == "post"]')), null);
		assert.equal(extractGroqParams("not a url"), null);
	});
});

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { GroqAnalysis } from "./analyze-groq.js";
import {
	analyzeGroqQuery,
	GROQ_ISSUE_DEEP_SLICE,
	GROQ_ISSUE_DEREF_IN_FILTER,
	GROQ_ISSUE_NON_LITERAL_COMPARE,
	GROQ_ISSUE_REPEATED_DEREF,
	GROQ_ISSUE_SPREAD,
} from "./analyze-groq.js";

function analyzeOk(
	query: string,
	params?: Record<string, unknown>,
): GroqAnalysis {
	const result = analyzeGroqQuery(query, params);
	assert.ok(
		result.ok,
		`expected parse to succeed: ${result.ok ? "" : result.reason}`,
	);
	return result.analysis;
}

describe("analyzeGroqQuery", () => {
	it("flags spread operators and counts projections", () => {
		const analysis = analyzeOk('*[_type == "product"]{ ..., title }');
		assert.equal(analysis.stats.spreads, 1);
		assert.ok(analysis.stats.projections >= 1);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_SPREAD));
	});

	it("counts arrayTraversals via ArrayCoerce, not top-level filters", () => {
		const plain = analyzeOk('*[_type == "post"]{ title }');
		assert.equal(plain.stats.arrayTraversals, 0);
		assert.ok(plain.stats.filters >= 1);

		const withArray = analyzeOk(
			'*[_type == "product"]{ "categories": categories[]->title }',
		);
		assert.equal(withArray.stats.arrayTraversals, 1);
		assert.ok(withArray.stats.dereferences >= 1);
	});

	it("flags deref inside a filter", () => {
		const analysis = analyzeOk(
			'*[_type == "post" && author->name == "Bob"]{ title }',
		);
		assert.equal(analysis.signals.derefInFilter, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_DEREF_IN_FILTER));
	});

	it("flags repeated resolves of the same reference", () => {
		const analysis = analyzeOk(
			'*[_type == "category"]{ "a": parent->title, "b": parent->slug.current }',
		);
		assert.equal(analysis.signals.repeatedDeref, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_REPEATED_DEREF));
		assert.equal(analysis.stats.dereferences, 2);
	});

	it("flags deep slices used for pagination", () => {
		const analysis = analyzeOk('*[_type == "article"] | order(_id)[100..120]');
		assert.equal(analysis.signals.deepSlice, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_DEEP_SLICE));
	});

	it("does not flag shallow slices", () => {
		const analysis = analyzeOk('*[_type == "article"] | order(_id)[0..20]');
		assert.equal(analysis.signals.deepSlice, false);
		assert.ok(!analysis.issues.includes(GROQ_ISSUE_DEEP_SLICE));
	});

	it("flags non-literal field comparisons in filters", () => {
		const analysis = analyzeOk("*[salePrice < displayPrice]");
		assert.equal(analysis.signals.nonLiteralCompareInFilter, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_NON_LITERAL_COMPARE));
	});

	it("does not flag literal comparisons", () => {
		const analysis = analyzeOk('*[_type == "product"]');
		assert.equal(analysis.signals.nonLiteralCompareInFilter, false);
		assert.ok(!analysis.issues.includes(GROQ_ISSUE_NON_LITERAL_COMPARE));
	});

	it("reports a reason for invalid GROQ instead of throwing", () => {
		const result = analyzeGroqQuery("*[_type ==");
		assert.equal(result.ok, false);
		assert.match(result.reason, /Syntax error/);
	});

	// groq-js throws GroqQueryError (a different class from GroqSyntaxError,
	// and one it does not export) for a parameterized slice. Letting that
	// escape used to abort the whole report run.
	it("reports a reason for a parameterized slice with no params", () => {
		const result = analyzeGroqQuery('*[_type == "example"][0...$limit]');
		assert.equal(result.ok, false);
		assert.equal(result.reason, "slicing must use constant numbers");
	});

	it("reports a reason for an unknown function namespace", () => {
		const result = analyzeGroqQuery(
			'*[_type == "a"]{ "x": mylib::doThing(title) }',
		);
		assert.equal(result.ok, false);
		assert.equal(result.reason, "Undefined namespace: mylib");
	});

	it("parses a parameterized slice when params are supplied", () => {
		const analysis = analyzeOk('*[_type == "example"][0...$limit]', {
			limit: 10,
		});
		assert.equal(analysis.stats.filters >= 1, true);
	});

	it("detects a deep slice through parameterized bounds", () => {
		const analysis = analyzeOk('*[_type == "article"][$offset...$end]', {
			offset: 5000,
			end: 5100,
		});
		assert.equal(analysis.signals.deepSlice, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_DEEP_SLICE));
	});
});

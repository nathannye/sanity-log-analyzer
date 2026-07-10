import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
	analyzeGroqQuery,
	GROQ_ISSUE_DEEP_SLICE,
	GROQ_ISSUE_DEREF_IN_FILTER,
	GROQ_ISSUE_NON_LITERAL_COMPARE,
	GROQ_ISSUE_REPEATED_DEREF,
	GROQ_ISSUE_SPREAD,
} from "./analyze-groq.js";

describe("analyzeGroqQuery", () => {
	it("flags spread operators and counts projections", () => {
		const analysis = analyzeGroqQuery(
			'*[_type == "product"]{ ..., title }',
		);
		assert.ok(analysis);
		assert.equal(analysis.stats.spreads, 1);
		assert.ok(analysis.stats.projections >= 1);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_SPREAD));
	});

	it("counts arrayTraversals via ArrayCoerce, not top-level filters", () => {
		const plain = analyzeGroqQuery('*[_type == "post"]{ title }');
		assert.ok(plain);
		assert.equal(plain.stats.arrayTraversals, 0);
		assert.ok(plain.stats.filters >= 1);

		const withArray = analyzeGroqQuery(
			'*[_type == "product"]{ "categories": categories[]->title }',
		);
		assert.ok(withArray);
		assert.equal(withArray.stats.arrayTraversals, 1);
		assert.ok(withArray.stats.dereferences >= 1);
	});

	it("flags deref inside a filter", () => {
		const analysis = analyzeGroqQuery(
			'*[_type == "post" && author->name == "Bob"]{ title }',
		);
		assert.ok(analysis);
		assert.equal(analysis.signals.derefInFilter, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_DEREF_IN_FILTER));
	});

	it("flags repeated resolves of the same reference", () => {
		const analysis = analyzeGroqQuery(
			'*[_type == "category"]{ "a": parent->title, "b": parent->slug.current }',
		);
		assert.ok(analysis);
		assert.equal(analysis.signals.repeatedDeref, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_REPEATED_DEREF));
		assert.equal(analysis.stats.dereferences, 2);
	});

	it("flags deep slices used for pagination", () => {
		const analysis = analyzeGroqQuery(
			'*[_type == "article"] | order(_id)[100..120]',
		);
		assert.ok(analysis);
		assert.equal(analysis.signals.deepSlice, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_DEEP_SLICE));
	});

	it("does not flag shallow slices", () => {
		const analysis = analyzeGroqQuery(
			'*[_type == "article"] | order(_id)[0..20]',
		);
		assert.ok(analysis);
		assert.equal(analysis.signals.deepSlice, false);
		assert.ok(!analysis.issues.includes(GROQ_ISSUE_DEEP_SLICE));
	});

	it("flags non-literal field comparisons in filters", () => {
		const analysis = analyzeGroqQuery("*[salePrice < displayPrice]");
		assert.ok(analysis);
		assert.equal(analysis.signals.nonLiteralCompareInFilter, true);
		assert.ok(analysis.issues.includes(GROQ_ISSUE_NON_LITERAL_COMPARE));
	});

	it("does not flag literal comparisons", () => {
		const analysis = analyzeGroqQuery('*[_type == "product"]');
		assert.ok(analysis);
		assert.equal(analysis.signals.nonLiteralCompareInFilter, false);
		assert.ok(!analysis.issues.includes(GROQ_ISSUE_NON_LITERAL_COMPARE));
	});

	it("returns null for invalid GROQ", () => {
		assert.equal(analyzeGroqQuery("*[_type =="), null);
	});
});

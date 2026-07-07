import assert from "node:assert/strict";
import test from "node:test";
import { analyzeGroqQuery } from "./analyze-groq.js";

test("analyzeGroqQuery counts structural features", () => {
	const stats = analyzeGroqQuery(
		'*[_type == "post" && defined(slug.current)]{title, "authorName": author->name} | order(publishedAt desc) [0...10]',
	);

	assert.ok(stats);
	assert.ok(stats.arrayTraversals >= 1);
	assert.ok(stats.projections >= 1);
	assert.ok(stats.dereferences >= 1);
	assert.ok(stats.functionCalls.order >= 1);
	assert.ok(
		(stats.functionCalls.defined ?? 0) +
			(stats.functionCalls["global::defined"] ?? 0) >=
			1,
	);
});

test("analyzeGroqQuery returns null for invalid syntax", () => {
	assert.equal(analyzeGroqQuery("*[_type =="), null);
});

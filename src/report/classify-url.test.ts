import assert from "node:assert/strict";
import test from "node:test";
import { classifyUrl } from "./classify-url.js";

test("classifyUrl identifies Sanity API query paths", () => {
	assert.equal(
		classifyUrl(
			"https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*",
		),
		"query",
	);
});

test("classifyUrl identifies CDN image URLs", () => {
	assert.equal(
		classifyUrl(
			"https://cdn.sanity.io/images/project/dataset/abc-100x100.jpg",
		),
		"image",
	);
});

test("classifyUrl identifies video URLs in files path", () => {
	assert.equal(
		classifyUrl("https://cdn.sanity.io/files/project/dataset/clip.mp4"),
		"video",
	);
});

test("classifyUrl identifies file URLs", () => {
	assert.equal(
		classifyUrl("https://cdn.sanity.io/files/project/dataset/doc.pdf"),
		"file",
	);
});

test("classifyUrl returns null for unclassifiable URLs", () => {
	assert.equal(classifyUrl("https://example.com/a"), null);
});

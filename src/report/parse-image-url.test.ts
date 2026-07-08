import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
	hasImageFormatError,
	hasImageQualityError,
	hasImageWidthError,
	parseImageUrl,
} from "./parse-image-url.js";

describe("parseImageUrl", () => {
	it("extracts id and width from the filename suffix", () => {
		const parsed = parseImageUrl(
			"https://cdn.sanity.io/images/project/dataset/photo-400x300.jpg",
		);

		assert.equal(parsed.id, "photo");
		assert.equal(parsed.width, 400);
		assert.equal(parsed.quality, null);
		assert.equal(parsed.format, null);
		assert.equal(parsed.isSvg, false);
	});

	it("prefers the w query param over filename dimensions", () => {
		const parsed = parseImageUrl(
			"https://cdn.sanity.io/images/project/dataset/photo-400x300.jpg?w=1200",
		);

		assert.equal(parsed.width, 1200);
	});

	it("reads quality and format query params", () => {
		const parsed = parseImageUrl(
			"https://cdn.sanity.io/images/project/dataset/photo-400x300.jpg?q=90&fm=webp",
		);

		assert.equal(parsed.quality, 90);
		assert.equal(parsed.format, "webp");
	});

	it("detects svg assets", () => {
		const parsed = parseImageUrl(
			"https://cdn.sanity.io/images/project/dataset/logo-120x40.svg",
		);

		assert.equal(parsed.isSvg, true);
	});
});

describe("image url flags", () => {
	it("flags width, quality, and format issues", () => {
		assert.equal(hasImageWidthError(2001), true);
		assert.equal(hasImageWidthError(2000), false);
		assert.equal(hasImageQualityError(88, false), true);
		assert.equal(hasImageQualityError(88, true), false);
		assert.equal(hasImageFormatError("webp"), true);
		assert.equal(hasImageFormatError("auto"), false);
		assert.equal(hasImageFormatError(null), false);
	});
});

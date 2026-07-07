import assert from "node:assert/strict";
import test from "node:test";
import { formatGroqForDisplay } from "./format-groq.js";

test("formatGroqForDisplay removes uneven leading indentation", () => {
	const input = `*[_type == "post"][0]{
          "socials": icon{url, name} | order(orderRank),
"name": title,
          "extraLinks": select(
true => additionalLinks.events,
true => additionalLinks.resources
          )
        }`;

	const output = formatGroqForDisplay(input);

	assert.ok(!output.includes('          "socials"'));
	assert.ok(output.startsWith('*"socials"') || output.includes('"socials": icon'));
	for (const line of output.split("\n")) {
		assert.ok(!line.startsWith("          "), `line still over-indented: ${line}`);
	}
});

test("formatGroqForDisplay normalizes tabs and trims outer whitespace", () => {
	assert.equal(formatGroqForDisplay("\t*[_type == \"post\"]\n"), '*[_type == "post"]');
});

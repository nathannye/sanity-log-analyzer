/**
 * Normalize GROQ text for display. Log URLs often preserve uneven indentation
 * from editors or minifiers; left-aligning lines keeps the flyout readable.
 */
export function formatGroqForDisplay(query: string): string {
	const normalized = query.replace(/\r\n?/g, "\n").replace(/\t/g, "  ");
	const lines = normalized.split("\n").map((line) => line.trimEnd());

	while (lines.length > 0 && lines[0] === "") lines.shift();
	while (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();

	const nonEmpty = lines.filter((line) => line.trim().length > 0);
	if (nonEmpty.length === 0) return "";

	const minIndent = Math.min(
		...nonEmpty.map((line) => line.match(/^ */)?.[0].length ?? 0),
	);

	const dedented = lines.map((line) => {
		if (line.trim().length === 0) return "";
		return line.slice(Math.min(minIndent, line.length)).trimStart();
	});

	return dedented.join("\n").trim();
}

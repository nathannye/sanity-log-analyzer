import Prism from "prismjs";
import "@sanity/prism-groq";

export function highlightGroq(query: string): string {
	return Prism.highlight(query, Prism.languages.groq, "groq");
}

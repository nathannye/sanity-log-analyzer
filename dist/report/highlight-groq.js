import Prism from "prismjs";
import "@sanity/prism-groq";
export function highlightGroq(query) {
    return Prism.highlight(query, Prism.languages.groq, "groq");
}
//# sourceMappingURL=highlight-groq.js.map
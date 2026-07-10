export const GROQ_SPREAD_WARNING =
	"uses the {...} spread operator and may waste bandwidth by fetching more fields than needed";

export const GROQ_ISSUE_SPREAD = "Uses the {...} spread operator";
export const GROQ_ISSUE_DEREF_IN_FILTER =
	"Resolves references inside a filter";
export const GROQ_ISSUE_REPEATED_DEREF =
	"Repeatedly resolves the same reference";
export const GROQ_ISSUE_DEEP_SLICE = "Uses a deep slice for pagination";
export const GROQ_ISSUE_NON_LITERAL_COMPARE =
	"Compares two unknown field values in a filter";

export const GROQ_DEEP_SLICE_THRESHOLD = 100;

export const COMPARISON_OPS = new Set([
	"==",
	"!=",
	"<",
	"<=",
	">",
	">=",
]);

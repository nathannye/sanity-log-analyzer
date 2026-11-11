export function extractGroqQuery(url: string): string | null {
	try {
		const parsed = new URL(url);
		const raw = parsed.searchParams.get("query");
		if (!raw) return null;

		const trimmed = raw.trim();
		return trimmed.length > 0 ? trimmed : null;
	} catch {
		return null;
	}
}

function parseParamValue(raw: string): unknown {
	try {
		return JSON.parse(raw) as unknown;
	} catch {
		// The API rejects unquoted string values, but logs can still contain
		// them. Keep the raw string rather than discarding the whole param set.
		return raw;
	}
}

export function extractGroqParams(url: string): Record<string, unknown> | null {
	try {
		const parsed = new URL(url);
		const params: Record<string, unknown> = {};

		// POST-style `params={...}` object. Not emitted by the HTTP API on GET
		// requests, but kept as a fallback for non-standard log producers.
		const blob = parsed.searchParams.get("params");
		if (blob) {
			try {
				const value: unknown = JSON.parse(blob.trim());
				if (value && typeof value === "object" && !Array.isArray(value)) {
					Object.assign(params, value as Record<string, unknown>);
				}
			} catch {
				// Malformed object blob must not discard the $-prefixed params.
			}
		}

		// GET-style `$name=<json>` keys, which is what Sanity's Query API uses.
		for (const [key, value] of parsed.searchParams) {
			if (!key.startsWith("$") || key.length < 2) continue;
			params[key.slice(1)] = parseParamValue(value);
		}

		return Object.keys(params).length > 0 ? params : null;
	} catch {
		return null;
	}
}

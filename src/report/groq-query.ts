function decodeSearchParam(raw: string): string {
	return decodeURIComponent(raw.replace(/\+/g, " "));
}

export function extractGroqQuery(url: string): string | null {
	try {
		const parsed = new URL(url);
		const raw = parsed.searchParams.get("query");
		if (!raw) return null;

		const trimmed = decodeSearchParam(raw).trim();
		return trimmed.length > 0 ? trimmed : null;
	} catch {
		return null;
	}
}

export function extractGroqParams(url: string): Record<string, unknown> | null {
	try {
		const parsed = new URL(url);
		const raw = parsed.searchParams.get("params");
		if (!raw) return null;

		const decoded = decodeSearchParam(raw).trim();
		if (!decoded) return null;

		const value: unknown = JSON.parse(decoded);
		if (!value || typeof value !== "object" || Array.isArray(value)) return null;

		return value as Record<string, unknown>;
	} catch {
		return null;
	}
}

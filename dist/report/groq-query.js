export function extractGroqQuery(url) {
    try {
        const parsed = new URL(url);
        const raw = parsed.searchParams.get("query");
        if (!raw)
            return null;
        const decoded = decodeURIComponent(raw.replace(/\+/g, " "));
        const trimmed = decoded.trim();
        return trimmed.length > 0 ? trimmed : null;
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=groq-query.js.map
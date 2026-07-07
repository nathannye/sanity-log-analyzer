function decodeSearchParam(raw) {
    return decodeURIComponent(raw.replace(/\+/g, " "));
}
export function extractGroqQuery(url) {
    try {
        const parsed = new URL(url);
        const raw = parsed.searchParams.get("query");
        if (!raw)
            return null;
        const trimmed = decodeSearchParam(raw).trim();
        return trimmed.length > 0 ? trimmed : null;
    }
    catch {
        return null;
    }
}
export function extractGroqParams(url) {
    try {
        const parsed = new URL(url);
        const raw = parsed.searchParams.get("params");
        if (!raw)
            return null;
        const decoded = decodeSearchParam(raw).trim();
        if (!decoded)
            return null;
        const value = JSON.parse(decoded);
        if (!value || typeof value !== "object" || Array.isArray(value))
            return null;
        return value;
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=groq-query.js.map
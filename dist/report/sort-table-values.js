export function encodeSortValue(value) {
    if (value === null || value === undefined || value === "")
        return "";
    return String(value);
}
export function parseSortValue(raw, type) {
    if (raw === "")
        return null;
    if (type === "number") {
        const parsed = Number(raw);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return raw;
}
export function compareSortValues(a, b, type, direction) {
    const mult = direction === "asc" ? 1 : -1;
    if (a === null && b === null)
        return 0;
    if (a === null)
        return 1;
    if (b === null)
        return -1;
    if (type === "string") {
        return String(a).localeCompare(String(b)) * mult;
    }
    return (Number(a) - Number(b)) * mult;
}
//# sourceMappingURL=sort-table-values.js.map
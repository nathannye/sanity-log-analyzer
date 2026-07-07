export function avgBytesPerRequest(row) {
    return row.requests > 0 ? row.responseBytes / row.requests : 0;
}
//# sourceMappingURL=ranked-row.js.map
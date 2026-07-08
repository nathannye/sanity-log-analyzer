import { PALETTE_COLOR_NAMES, colorVar, } from "./styles/colors.js";
export const ENDPOINT_SHARE_THRESHOLD = 0.05;
export function splitRankedByShare(rows, threshold = ENDPOINT_SHARE_THRESHOLD) {
    const totalBytes = rows.reduce((sum, row) => sum + row.responseBytes, 0);
    const major = [];
    const minor = [];
    for (const [index, row] of rows.entries()) {
        const share = totalBytes > 0 ? row.responseBytes / totalBytes : 0;
        if (share > threshold) {
            const colorName = PALETTE_COLOR_NAMES[index % PALETTE_COLOR_NAMES.length] ?? "blue";
            major.push({
                ...row,
                share,
                color: colorVar(colorName),
            });
        }
        else if (row.responseBytes > 0 || row.requests > 0) {
            minor.push(row);
        }
    }
    const minorTotals = minor.reduce((totals, row) => ({
        label: totals.label,
        requests: totals.requests + row.requests,
        responseBytes: totals.responseBytes + row.responseBytes,
    }), { label: `Show < ${Math.round(threshold * 100)}%`, requests: 0, responseBytes: 0 });
    return { totalBytes, major, minor, minorTotals };
}
//# sourceMappingURL=split-ranked-by-share.js.map
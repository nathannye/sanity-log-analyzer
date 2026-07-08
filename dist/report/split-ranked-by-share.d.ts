import type { RankedRow } from "../types.js";
export declare const ENDPOINT_SHARE_THRESHOLD = 0.05;
export interface ColoredRankedRow extends RankedRow {
    share: number;
    color: string;
}
export interface SplitRankedByShareResult {
    totalBytes: number;
    major: ColoredRankedRow[];
    minor: RankedRow[];
    minorTotals: RankedRow;
}
export declare function splitRankedByShare(rows: RankedRow[], threshold?: number): SplitRankedByShareResult;
//# sourceMappingURL=split-ranked-by-share.d.ts.map
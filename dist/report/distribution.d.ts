import type { CountRow, RankedRow } from "../types.js";
import type { DistributionSegment } from "./summarize.js";
export declare function dominantSegment(segments: DistributionSegment[]): DistributionSegment | null;
export declare function dominantRankedRow(rows: RankedRow[], metric: "requests" | "responseBytes"): {
    label: string;
    value: number;
    total: number;
    share: number;
} | null;
export declare function dominantCountRow(rows: CountRow[]): {
    label: string;
    count: number;
    total: number;
    share: number;
} | null;

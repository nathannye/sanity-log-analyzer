import type { RankedRow } from "../types.js";
export type UrlTab = "image" | "file" | "query" | "other";
declare const EMPTY_GROUPS: Record<UrlTab, RankedRow[]>;
export declare function groupUrlsByKind(rows: RankedRow[]): Record<UrlTab, RankedRow[]>;
export declare function defaultUrlTab(groups: Record<UrlTab, RankedRow[]>): UrlTab;
export { EMPTY_GROUPS };
//# sourceMappingURL=group-urls-by-kind.d.ts.map
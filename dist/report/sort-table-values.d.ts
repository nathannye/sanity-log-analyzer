export type SortType = "string" | "number";
export type SortDirection = "asc" | "desc";
export declare function encodeSortValue(value: string | number | null | undefined): string;
export declare function parseSortValue(raw: string, type: SortType): string | number | null;
export declare function compareSortValues(a: string | number | null, b: string | number | null, type: SortType, direction: SortDirection): number;
//# sourceMappingURL=sort-table-values.d.ts.map
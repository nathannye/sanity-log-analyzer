export interface GroqQueryStats {
    dereferences: number;
    projections: number;
    subqueries: number;
    spreads: number;
    arrayTraversals: number;
    functionCalls: Record<string, number>;
}
export declare function analyzeGroqQuery(query: string): GroqQueryStats | null;
//# sourceMappingURL=analyze-groq.d.ts.map
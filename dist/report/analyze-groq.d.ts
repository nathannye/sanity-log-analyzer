export interface GroqQueryStats {
    dereferences: number;
    projections: number;
    subqueries: number;
    spreads: number;
    arrayTraversals: number;
    functionCalls: Record<string, number>;
}
export declare function analyzeGroqQuery(query: string, params?: Record<string, unknown>): GroqQueryStats | null;
//# sourceMappingURL=analyze-groq.d.ts.map
export interface GroqQueryStats {
    dereferences: number;
    projections: number;
    subqueries: number;
    spreads: number;
    arrayTraversals: number;
    functionCalls: Record<string, number>;
}
export declare const GROQ_SPREAD_WARNING = "uses {...} spread operator \u2014 may fetch more fields than needed, wasting bandwidth";
export declare function analyzeGroqQuery(query: string, params?: Record<string, unknown>): GroqQueryStats | null;
export declare function hasGroqSpreadOperator(query: string, params?: Record<string, unknown>): boolean;
//# sourceMappingURL=analyze-groq.d.ts.map
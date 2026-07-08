import { GROQ_SPREAD_WARNING } from "./groq-constants.js";
export { GROQ_SPREAD_WARNING };
export interface GroqQueryStats {
    dereferences: number;
    projections: number;
    subqueries: number;
    spreads: number;
    arrayTraversals: number;
    functionCalls: Record<string, number>;
}
export declare function analyzeGroqQuery(query: string, params?: Record<string, unknown>): GroqQueryStats | null;
export declare function hasGroqSpreadOperator(query: string, params?: Record<string, unknown>): boolean;

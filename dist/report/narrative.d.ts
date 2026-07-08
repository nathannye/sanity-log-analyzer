import type { ReportViewInput } from "../types.js";
import type { ReportSummary } from "./summarize.js";
export interface ReportInsight {
    text: string;
    kind: "fact" | "health" | "opportunity" | "synthesis";
}
export declare function buildAtAGlance(view: ReportViewInput, summary: ReportSummary): ReportInsight[];

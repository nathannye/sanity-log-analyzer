import type { ReportView } from "../types.js";
import type { ReportSummary } from "./summarize.js";
export interface ReportInsight {
    text: string;
    kind: "fact" | "health" | "opportunity" | "synthesis";
}
export declare function buildAtAGlance(view: ReportView, summary: ReportSummary): ReportInsight[];
//# sourceMappingURL=narrative.d.ts.map
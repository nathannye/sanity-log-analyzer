import type { ReportSections } from "../types.js";
export interface TocSection {
    slug: string;
    label: string;
    children?: TocSection[];
}
export declare function getVisibleTocSections(sections: ReportSections): TocSection[];
//# sourceMappingURL=sections.d.ts.map
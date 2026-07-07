import type { AggregationSummary, LogProgress } from "./types.js";
export declare function formatBucketLabel(lower: number, upper: number): string;
export declare function createSummary(histogramBuckets: number[]): AggregationSummary;
export declare function aggregateLogFile(inputPath: string, histogramBuckets: number[], onProgress?: (progress: LogProgress) => void): Promise<AggregationSummary>;
//# sourceMappingURL=aggregate.d.ts.map
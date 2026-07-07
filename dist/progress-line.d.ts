export declare const SPINNER_FRAMES: readonly ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
export declare function getSpinnerFrame(index: number): string;
export declare function prefixProgressLine(frame: string, message: string): string;
export declare function updateProgressLine(message: string): void;
export declare function startProgressSpinner(initialMessage: string): void;
export declare function setProgressMessage(message: string): void;
export declare function finishProgressLine(): void;
export declare function formatProgressMessage(bytesRead: number, totalBytes: number, percent: number, entriesProcessed: number, formatBytes: (bytes: number) => string, formatPercentage: (value: number) => string): string;
//# sourceMappingURL=progress-line.d.ts.map
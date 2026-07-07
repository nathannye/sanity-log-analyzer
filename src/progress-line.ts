let progressLineActive = false;

export function updateProgressLine(message: string): void {
  if (!process.stdout.isTTY) return;
  process.stdout.write(`\x1b[2K\r${message}`);
  progressLineActive = true;
}

export function finishProgressLine(): void {
  if (!progressLineActive) return;
  process.stdout.write("\n");
  progressLineActive = false;
}

export function formatProgressMessage(
  bytesRead: number,
  totalBytes: number,
  percent: number,
  entriesProcessed: number,
  formatBytes: (bytes: number) => string,
  formatPercentage: (value: number) => string,
): string {
  return `Processed ${formatBytes(bytesRead)} / ${formatBytes(totalBytes)} (${formatPercentage(percent)}) — ${entriesProcessed.toLocaleString()} entries`;
}

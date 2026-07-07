let progressLineActive = false;
export function updateProgressLine(message) {
    if (!process.stdout.isTTY)
        return;
    process.stdout.write(`\x1b[2K\r${message}`);
    progressLineActive = true;
}
export function finishProgressLine() {
    if (!progressLineActive)
        return;
    process.stdout.write("\n");
    progressLineActive = false;
}
export function formatProgressMessage(bytesRead, totalBytes, percent, entriesProcessed, formatBytes, formatPercentage) {
    return `Processed ${formatBytes(bytesRead)} / ${formatBytes(totalBytes)} (${formatPercentage(percent)}) — ${entriesProcessed.toLocaleString()} entries`;
}
//# sourceMappingURL=progress-line.js.map
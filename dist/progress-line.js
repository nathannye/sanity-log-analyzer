export const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const SPINNER_INTERVAL_MS = 80;
let progressLineActive = false;
let spinnerInterval;
let spinnerFrameIndex = 0;
let spinnerMessage = "";
export function getSpinnerFrame(index) {
    return SPINNER_FRAMES[index % SPINNER_FRAMES.length];
}
export function prefixProgressLine(frame, message) {
    return `${frame} ${message}`;
}
function clearSpinnerInterval() {
    if (spinnerInterval !== undefined) {
        clearInterval(spinnerInterval);
        spinnerInterval = undefined;
    }
}
function renderSpinnerLine() {
    if (!process.stdout.isTTY)
        return;
    const frame = getSpinnerFrame(spinnerFrameIndex);
    process.stdout.write(`\x1b[2K\r${prefixProgressLine(frame, spinnerMessage)}`);
    progressLineActive = true;
    spinnerFrameIndex += 1;
}
export function updateProgressLine(message) {
    if (!process.stdout.isTTY)
        return;
    process.stdout.write(`\x1b[2K\r${message}`);
    progressLineActive = true;
}
export function startProgressSpinner(initialMessage) {
    if (!process.stdout.isTTY)
        return;
    clearSpinnerInterval();
    spinnerMessage = initialMessage;
    spinnerFrameIndex = 0;
    renderSpinnerLine();
    spinnerInterval = setInterval(renderSpinnerLine, SPINNER_INTERVAL_MS);
}
export function setProgressMessage(message) {
    if (!process.stdout.isTTY)
        return;
    spinnerMessage = message;
}
export function finishProgressLine() {
    clearSpinnerInterval();
    if (!progressLineActive)
        return;
    process.stdout.write("\n");
    progressLineActive = false;
    spinnerMessage = "";
    spinnerFrameIndex = 0;
}
export function formatProgressMessage(bytesRead, totalBytes, percent, entriesProcessed, formatBytes, formatPercentage) {
    return `Processed ${formatBytes(bytesRead)} / ${formatBytes(totalBytes)} (${formatPercentage(percent)}) — ${entriesProcessed.toLocaleString()} entries`;
}
//# sourceMappingURL=progress-line.js.map
export const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"] as const;

const SPINNER_INTERVAL_MS = 80;

let progressLineActive = false;
let spinnerInterval: ReturnType<typeof setInterval> | undefined;
let spinnerFrameIndex = 0;
let spinnerMessage = "";

export function getSpinnerFrame(index: number): string {
	return SPINNER_FRAMES[index % SPINNER_FRAMES.length];
}

export function prefixProgressLine(frame: string, message: string): string {
	return `${frame} ${message}`;
}

function clearSpinnerInterval(): void {
	if (spinnerInterval !== undefined) {
		clearInterval(spinnerInterval);
		spinnerInterval = undefined;
	}
}

function renderSpinnerLine(): void {
	if (!process.stdout.isTTY) return;
	const frame = getSpinnerFrame(spinnerFrameIndex);
	process.stdout.write(`\x1b[2K\r${prefixProgressLine(frame, spinnerMessage)}`);
	progressLineActive = true;
	spinnerFrameIndex += 1;
}

export function updateProgressLine(message: string): void {
	if (!process.stdout.isTTY) return;
	process.stdout.write(`\x1b[2K\r${message}`);
	progressLineActive = true;
}

export function startProgressSpinner(initialMessage: string): void {
	if (!process.stdout.isTTY) return;

	clearSpinnerInterval();
	spinnerMessage = initialMessage;
	spinnerFrameIndex = 0;
	renderSpinnerLine();
	spinnerInterval = setInterval(renderSpinnerLine, SPINNER_INTERVAL_MS);
}

export function setProgressMessage(message: string): void {
	if (!process.stdout.isTTY) return;
	spinnerMessage = message;
}

export function finishProgressLine(): void {
	clearSpinnerInterval();
	if (!progressLineActive) return;
	process.stdout.write("\n");
	progressLineActive = false;
	spinnerMessage = "";
	spinnerFrameIndex = 0;
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

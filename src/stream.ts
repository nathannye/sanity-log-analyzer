import { access, stat } from "node:fs/promises";
import { createInterface } from "node:readline";
import { createReadStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { parseLogEntry } from "./log-entry.js";
import type { LogEntry, LogProgress } from "./types.js";

function isGzipPath(inputPath: string): boolean {
  return inputPath.toLowerCase().endsWith(".gz");
}

const READ_BUFFER_BYTES = 4 * 1024 * 1024;
const PROGRESS_BYTE_INTERVAL = 50 * 1024 * 1024;
const PROGRESS_ENTRY_INTERVAL = 100_000;
const PROGRESS_MIN_INTERVAL_MS = 250;

function createProgressReporter(
  byteSource: { bytesRead: number },
  totalBytes: number,
  onProgress?: (progress: LogProgress) => void,
) {
  let lastReportedBytes = 0;
  let lastReportedEntries = 0;
  let lastReportedAt = 0;

  return (entriesProcessed: number, force = false): void => {
    if (!onProgress) return;

    const bytesRead = byteSource.bytesRead;
    const bytesDelta = bytesRead - lastReportedBytes;
    const entriesDelta = entriesProcessed - lastReportedEntries;
    const shouldReport =
      force ||
      bytesDelta >= PROGRESS_BYTE_INTERVAL ||
      entriesDelta >= PROGRESS_ENTRY_INTERVAL;

    if (!shouldReport) return;

    const now = Date.now();
    if (!force && now - lastReportedAt < PROGRESS_MIN_INTERVAL_MS) return;

    lastReportedBytes = bytesRead;
    lastReportedEntries = entriesProcessed;
    lastReportedAt = now;
    const percent =
      totalBytes > 0 ? Math.min(100, (bytesRead / totalBytes) * 100) : 100;

    onProgress({ bytesRead, totalBytes, percent, entriesProcessed });
  };
}

export async function* streamLogEntries(
  inputPath: string,
  onProgress?: (progress: LogProgress) => void,
): AsyncGenerator<LogEntry> {
  await access(inputPath);
  const { size: totalBytes } = await stat(inputPath);
  const fileStream = createReadStream(inputPath, {
    highWaterMark: READ_BUFFER_BYTES,
  });
  const input = isGzipPath(inputPath)
    ? fileStream.pipe(createGunzip())
    : fileStream.setEncoding("utf8");
  const rl = createInterface({ input, crlfDelay: Infinity });
  const reportProgress = createProgressReporter(fileStream, totalBytes, onProgress);
  let entriesProcessed = 0;

  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const raw: unknown = JSON.parse(trimmed);
      const entry = parseLogEntry(raw);
      if (entry) {
        yield entry;
        entriesProcessed += 1;
        reportProgress(entriesProcessed);
      }
    } catch {
      // skip malformed lines
    }
  }

  reportProgress(entriesProcessed, true);
}

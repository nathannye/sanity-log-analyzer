import { access } from "node:fs/promises";
import { createInterface } from "node:readline";
import { createReadStream } from "node:fs";
import { parseLogEntry } from "./log-entry.js";
import type { LogEntry } from "./types.js";

export async function* streamLogEntries(inputPath: string): AsyncGenerator<LogEntry> {
  await access(inputPath);
  const input = createReadStream(inputPath, { encoding: "utf8" });
  const rl = createInterface({ input, crlfDelay: Infinity });

  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const raw: unknown = JSON.parse(trimmed);
      const entry = parseLogEntry(raw);
      if (entry) yield entry;
    } catch {
      // skip malformed lines
    }
  }
}

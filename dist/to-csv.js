#!/usr/bin/env node
/**
 * Stream NDJSON Sanity request logs to a flat CSV file.
 */
import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { streamLogEntries } from "./stream.js";
const CSV_COLUMNS = [
    "timestamp",
    "insertId",
    "method",
    "status",
    "url",
    "referer",
    "userAgent",
    "remoteIp",
    "requestSize",
    "responseSize",
    "duration",
    "projectId",
    "dataset",
    "domain",
    "endpoint",
    "groqQueryIdentifier",
    "apiVersion",
    "tags",
    "studioRequest",
];
function escapeCsv(value) {
    if (value === null || value === undefined)
        return "";
    const s = String(value);
    if (s.includes(",") || s.includes('"') || s.includes("\n") || s.includes("\r")) {
        return '"' + s.replaceAll('"', '""') + '"';
    }
    return s;
}
function flattenRow(entry) {
    return [
        escapeCsv(entry.timestamp),
        escapeCsv(entry.insertId),
        escapeCsv(entry.method),
        escapeCsv(entry.status),
        escapeCsv(entry.url),
        escapeCsv(entry.referer),
        escapeCsv(entry.userAgent),
        escapeCsv(entry.remoteIp),
        escapeCsv(entry.requestSize),
        escapeCsv(entry.responseSize),
        escapeCsv(entry.duration),
        escapeCsv(entry.projectId),
        escapeCsv(entry.dataset),
        escapeCsv(entry.domain),
        escapeCsv(entry.endpoint),
        escapeCsv(entry.groqQueryIdentifier),
        escapeCsv(entry.apiVersion),
        escapeCsv(entry.tags.join(";")),
        escapeCsv(entry.studioRequest),
    ];
}
async function main() {
    const inputPath = process.argv[2] ?? "r19ry25y-2026-03-05-2026-03-12.ndjson";
    const outputPath = "./output/logs.csv";
    console.log(`Reading ${inputPath}...`);
    await mkdir(dirname(outputPath), { recursive: true });
    const writer = createWriteStream(outputPath, { encoding: "utf8" });
    writer.write(CSV_COLUMNS.join(",") + "\n");
    let lineCount = 0;
    for await (const entry of streamLogEntries(inputPath)) {
        writer.write(flattenRow(entry).join(",") + "\n");
        lineCount += 1;
        if (lineCount % 100_000 === 0) {
            process.stdout.write(`\rWrote ${lineCount.toLocaleString()} rows...`);
        }
    }
    await new Promise((resolve, reject) => {
        writer.end((err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
    console.log(`\nDone. Wrote ${lineCount.toLocaleString()} rows to ${outputPath}`);
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=to-csv.js.map
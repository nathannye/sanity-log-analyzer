#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { aggregateLogFile } from "./aggregate.js";
import { loadReportConfig } from "./config.js";
import { buildReportData } from "./report-data.js";
import { renderReportHtml } from "./report.js";

const DEFAULT_INPUT_PATH = "sample.ndjson";
const DEFAULT_OUTPUT_PATH = "output/report.html";
const DEFAULT_PORT = 3001;

interface AnalyzeOptions {
  inputPath: string;
  outputPath: string;
  configPath?: string;
  preview: boolean;
  port: number;
}

function printHelp(): void {
  console.log(`Usage:
  sanity-log-parser [input.ndjson] [--out report.html] [--config config.json] [--preview] [--port 3001]

Options:
  --out       Write the HTML report to this path (default: ${DEFAULT_OUTPUT_PATH})
  --config    Load a JSON config file
  --preview   Serve the generated report locally after writing it
  --port      Port for --preview (default: ${DEFAULT_PORT})
  --help      Show this message
`);
}

function parseArgs(argv: string[]): AnalyzeOptions {
  const positional: string[] = [];
  let outputPath = DEFAULT_OUTPUT_PATH;
  let configPath: string | undefined;
  let preview = false;
  let port = DEFAULT_PORT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
    if (arg === "--out") {
      outputPath = argv[++i] ?? outputPath;
      continue;
    }
    if (arg === "--config") {
      configPath = argv[++i];
      continue;
    }
    if (arg === "--preview") {
      preview = true;
      continue;
    }
    if (arg === "--port") {
      port = Number.parseInt(argv[++i] ?? "", 10) || port;
      continue;
    }
    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }
    positional.push(arg);
  }

  return {
    inputPath: positional[0] ?? DEFAULT_INPUT_PATH,
    outputPath,
    configPath,
    preview,
    port,
  };
}

async function writeReport(outputPath: string, html: string): Promise<void> {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

async function servePreview(html: string, port: number): Promise<void> {
  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" || req.url === "/index.html") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  });

  await new Promise<void>((resolve) => {
    server.listen(port, resolve);
  });

  console.log(`Preview server: http://localhost:${port}`);
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const config = await loadReportConfig(options.configPath);

  console.log(`Reading ${options.inputPath}...`);
  const start = Date.now();
  const summary = await aggregateLogFile(
    options.inputPath,
    config.histogramBuckets,
    (count) => {
      process.stdout.write(`\rProcessed ${count.toLocaleString()} lines...`);
    },
  );
  process.stdout.write("\n");

  const reportData = buildReportData(summary, config, options.inputPath);
  const html = renderReportHtml(reportData);

  await writeReport(options.outputPath, html);

  console.log(
    `Wrote ${options.outputPath} in ${((Date.now() - start) / 1000).toFixed(1)}s (${summary.totalRequests.toLocaleString()} requests).`,
  );

  if (options.preview) {
    await servePreview(html, options.port);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});

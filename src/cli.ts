#!/usr/bin/env node
import { resolve } from "node:path";
import open from "open";
import { loadReportConfig } from "./config.js";
import { formatBytes, formatPercentage } from "./format.js";
import { analyzeLog, writeHtmlReport } from "./index.js";
import {
	finishProgressLine,
	formatProgressMessage,
	setProgressMessage,
	startProgressSpinner,
} from "./progress-line.js";

interface CliOptions {
	inputPath: string;
	outputPath: string;
	configPath?: string;
	open: boolean;
}

function printHelp(): void {
	console.log(`Usage:
  sanity-log-analyzer <input.ndjson|.ndjson.gz> <output.html> [--config config.json] [--open]

Options:
  --config    Load a JSON config file
  --open      Open the generated report in your default browser
  --help      Show this message
`);
}

function parseArgs(argv: string[]): CliOptions {
	const positional: string[] = [];
	let configPath: string | undefined;
	let openReport = false;

	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		if (arg === "--help" || arg === "-h") {
			printHelp();
			process.exit(0);
		}
		if (arg === "--config") {
			configPath = argv[++i];
			continue;
		}
		if (arg === "--open") {
			openReport = true;
			continue;
		}
		if (arg.startsWith("-")) {
			throw new Error(`Unknown option: ${arg}`);
		}
		positional.push(arg);
	}

	if (positional.length < 2) {
		printHelp();
		throw new Error(
			"Expected positional arguments: <input.ndjson|.ndjson.gz> <output.html>",
		);
	}

	return {
		inputPath: positional[0],
		outputPath: positional[1],
		configPath,
		open: openReport,
	};
}

async function main(): Promise<void> {
	const options = parseArgs(process.argv.slice(2));
	const config = await loadReportConfig(options.configPath);

	startProgressSpinner(`Reading ${options.inputPath}...`);
	const start = Date.now();
	const report = await analyzeLog(options.inputPath, {
		config,
		onProgress: (progress) => {
			setProgressMessage(
				formatProgressMessage(
					progress.bytesRead,
					progress.totalBytes,
					progress.percent,
					progress.entriesProcessed,
					formatBytes,
					formatPercentage,
				),
			);
		},
	});
	finishProgressLine();

	await writeHtmlReport(report, options.outputPath);

	console.log(
		`Wrote ${options.outputPath} in ${((Date.now() - start) / 1000).toFixed(1)}s (${report.summary.requestCount.toLocaleString()} requests).`,
	);

	if (options.open) {
		await open(resolve(options.outputPath));
	}
}

main().catch((error: unknown) => {
	console.error(error);
	process.exit(1);
});

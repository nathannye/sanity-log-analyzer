#!/usr/bin/env node
import { loadReportConfig } from "./config.js";
import { formatBytes, formatPercentage } from "./format.js";
import { analyzeLog, writeHtmlReport } from "./index.js";
import {
	finishProgressLine,
	formatProgressMessage,
	updateProgressLine,
} from "./progress-line.js";

interface CliOptions {
	inputPath: string;
	outputPath: string;
	configPath?: string;
}

function printHelp(): void {
	console.log(`Usage:
  sanity-log-analyzer <input.ndjson> <output.html> [--config config.json]

Options:
  --config    Load a JSON config file
  --help      Show this message
`);
}

function parseArgs(argv: string[]): CliOptions {
	const positional: string[] = [];
	let configPath: string | undefined;

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
		if (arg.startsWith("-")) {
			throw new Error(`Unknown option: ${arg}`);
		}
		positional.push(arg);
	}

	if (positional.length < 2) {
		printHelp();
		throw new Error(
			"Expected positional arguments: <input.ndjson> <output.html>",
		);
	}

	return {
		inputPath: positional[0],
		outputPath: positional[1],
		configPath,
	};
}

async function main(): Promise<void> {
	const options = parseArgs(process.argv.slice(2));
	const config = await loadReportConfig(options.configPath);

	updateProgressLine(`Reading ${options.inputPath}...`);
	const start = Date.now();
	const report = await analyzeLog(options.inputPath, {
		config,
		onProgress: (progress) => {
			updateProgressLine(
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
		`Wrote ${options.outputPath} in ${((Date.now() - start) / 1000).toFixed(1)}s (${report.all.requests.toLocaleString()} requests).`,
	);
}

main().catch((error: unknown) => {
	console.error(error);
	process.exit(1);
});

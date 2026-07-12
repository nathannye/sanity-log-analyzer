# sanity-log-analyzer
Analyze Sanity request logs and generate an offline report to help triage bandwidth usage, expensive queries, and oversized images. No server required.

<br/>
<img width="1346" height="702" alt="example" src="https://github.com/user-attachments/assets/41de4e16-7169-4a28-9168-d470dddb0210" />

## Why this exists
Sanity's request logs contain a huge amount of operational data, but they're difficult to inspect manually. This package turns raw NDJSON logs into visual reports that surface common fixes for out-of-control bandwidth.

## Features
- Interactive self-contained HTML report
- Structured Markdown export for analysis with LLMs
- Detects common bandwidth hogs
- Highlights oversized image requests
- Identifies expensive GROQ queries
- GROQ query viewer with syntax highlighting
- Streams multi-GB NDJSON logs without loading them into memory
- Analysis happens entirely on your machine. Request logs are never uploaded or transmitted

## Requirements
- Node.js >= 22

## Install

```bash
npm install sanity-log-analyzer
bun install sanity-log-analyzer
yarn add sanity-log-analyzer
pnpm add sanity-log-analyzer

```

## CLI

```

npx sanity-log-analyzer input.ndjson output.html --open

⠴ Processed 1.2 GB / 1.2 GB (98.9%) — 1,264,879 entries
Wrote output.html in 6.6s (1,284,676 requests).

```

### HTML report

```bash
sanity-log-analyzer <input.ndjson|.ndjson.gz> <output.html> [--config config.json] [--open]
```

- Streams large NDJSON files without loading everything into memory
- Writes a self-contained HTML file (inline CSS, no server required)
- `--config` — optional JSON file to customize title, sections, and top-N
- `--open` — open the report in your default browser after writing

## Config

```
// Minimal config:

{
  "title": "Production Report",
  "topN": 50,
  "sections": {
    "images": true,
    "referrers": false
  }
}
```

Optional JSON file passed via `--config`. Merges with defaults.

- `title` — report heading
- `topN` — max rows per breakdown table (default: 50)
- `sections` — toggle individual report sections on/off (`images`, `files`, `queries`, `responseStatuses`, `hourlyBandwidth`, `dailyBandwidth`, `referrers`, `userAgents`, `ips`)

## Programmatic API

```ts
import { analyzeLog, writeHtmlReport } from "sanity-log-analyzer";

const report = await analyzeLog("logs.ndjson", {
  config: { title: "My Report" },
  onProgress: (p) => console.log(p.percent),
});

await writeHtmlReport(report, "report.html");
```

- `analyzeLog(inputPath, options?)` — returns `ReportData`
- `writeHtmlReport(report, outputPath)` — writes self-contained HTML
- `generateMarkdown(report, options?)` — returns the report markdown
- `writeMarkdownReport(report, outputPath, options?)` — writes markdown to disk
- `markdownReportFilename(report)` — derives the markdown filename from the report title
- `resolveReportConfig(partial)` / `loadReportConfig(path)` — config helpers

### Markdown export

```ts
import { analyzeLog, generateMarkdown, writeMarkdownReport } from "sanity-log-analyzer";

const report = await analyzeLog("logs.ndjson");

const markdown = generateMarkdown(report);

await writeMarkdownReport(report, "report.md");
```

The HTML report includes a **Download markdownM** button that downloads a .md file.

## Input format

- Newline-delimited JSON (`.ndjson`) or gzip-compressed (`.ndjson.gz`)
- One Sanity API request log entry per line

## Roadmap
- [ ] Support Sanity [request tagging](https://www.sanity.io/docs/platform-management/reference-api-request-tags) via the `?tag=...` param
- [ ] Rewrite parser in Rust

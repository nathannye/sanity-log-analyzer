# sanity-log-analyzer

Parse Sanity request logs (NDJSON) into an offline HTML report.

## Requirements

- Node.js >= 24

## Install

- `npm install sanity-log-analyzer` (when published)
- Or clone and `npm install && npm run build`

## CLI

### HTML report

```bash
sanity-log-analyzer <input.ndjson|.ndjson.gz> <output.html> [--config config.json] [--open]
```

- Streams large NDJSON files without loading everything into memory
- Writes a self-contained HTML file (inline CSS, no server required)
- `--config` — optional JSON file to customize title, sections, top-N, histogram buckets
- `--open` — open the report in your default browser after writing

## Config

Optional JSON file passed via `--config`. Merges with defaults.

- `title` — report heading
- `topN` — max rows per breakdown table (default: 50)
- `histogramBuckets` — response-size bucket boundaries (bytes)
- `sections` — toggle individual report sections on/off (`domain`, `endpoint`, `date`, `hour`, `status`, `histogram`, `urls`, `referers`, `userAgents`, `ips`, `billableComparison`)

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
- `generateMarkdown(report, options?)` — returns LLM-friendly markdown for a report view (`billable` by default, or `all`)
- `writeMarkdownReport(report, outputPath, options?)` — writes markdown to disk
- `markdownReportFilename(report, view)` — derives a filename with `_billable-only` or `_all` suffix
- `resolveReportConfig(partial)` / `loadReportConfig(path)` — config helpers

### Markdown export

```ts
import { analyzeLog, generateMarkdown, writeMarkdownReport } from "sanity-log-analyzer";

const report = await analyzeLog("logs.ndjson");

const billableMd = generateMarkdown(report);
const allMd = generateMarkdown(report, { view: "all" });

await writeMarkdownReport(report, "report_billable-only.md", { view: "billable" });
```

The HTML report also includes a **Download markdown for LLM** button that exports whichever view is currently shown.

## Development

- `npm run build` — compile TypeScript + bundle report renderer
- `npm test` — run test suite
- `npm run preview:report` — Vite dev server for report UI development
- `npm run analyze` — build and run the CLI

## Input format

- Newline-delimited JSON (`.ndjson`) or gzip-compressed (`.ndjson.gz`)
- One Sanity API request log entry per line

## Roadmap
- [ ] Redesign of components and layout
- [ ] Support Sanity (request tagging)[https://www.sanity.io/docs/platform-management/reference-api-request-tags]
- [ ] Rewrite json and gz parser in Rust or Go
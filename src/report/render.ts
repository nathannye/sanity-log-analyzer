import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "preact-render-to-string";
import { escapeHtml, escapeJsonForHtml } from "../format.js";
import type { ReportData } from "../types.js";
import { slugifyReportFilename } from "./report-filename.js";
import { ReportApp } from "./ReportApp.js";

let runtimeScript: string | null = null;
let reportCss: string | null = null;

function getBuiltReportDir(): string {
	return dirname(fileURLToPath(import.meta.url));
}

function getRuntimeScript(): string {
	if (runtimeScript === null) {
		runtimeScript = readFileSync(resolve(getBuiltReportDir(), "runtime.js"), "utf8");
	}
	return runtimeScript;
}

function getReportCss(): string {
	if (reportCss === null) {
		reportCss = readFileSync(resolve(getBuiltReportDir(), "runtime.css"), "utf8");
	}

	return reportCss;
}

export function renderReportHtml(data: ReportData): string {
	const body = render(ReportApp({ data }));
	const json = escapeJsonForHtml(data);
	const markdownPayload = escapeJsonForHtml({
		filenameBase: slugifyReportFilename(data.title),
		markdown: data.markdown,
	});

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(data.title)}</title>
  <script>
    try {
      if (localStorage.getItem("sanity-log-parser-theme") === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      }
    } catch (e) {}
  </script>
  <style>${getReportCss()}</style>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Geist+Mono&family=Geist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
${body}
  <script type="application/json" id="report-data">${json}</script>
  <script type="application/json" id="report-markdown">${markdownPayload}</script>
  <script>${getRuntimeScript()}</script>
</body>
</html>`;
}

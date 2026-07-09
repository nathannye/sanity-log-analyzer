import { render } from "preact-render-to-string";
import { escapeJsonForHtml } from "../format.js";
import type { ReportData } from "../types.js";
import { slugifyReportFilename } from "./report-filename.js";
import { ReportApp } from "./ReportApp.js";
import { reportScript } from "./scripts/collect-scripts.js";
import { reportCss } from "./styles/collect-css.js";

export function renderReportHtml(data: ReportData): string {
	const body = render(<ReportApp data={data} />);
	const json = escapeJsonForHtml(data);
	const markdownPayload = escapeJsonForHtml({
		filenameBase: slugifyReportFilename(data.title),
		billable: data.markdown.billable,
		all: data.markdown.all,
	});

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${data.title}</title>
  <style>${reportCss}</style>
</head>
<body>
${body}
  <script type="application/json" id="report-data">${json}</script>
  <script type="application/json" id="report-markdown">${markdownPayload}</script>
  <script>${reportScript}</script>
</body>
</html>`;
}

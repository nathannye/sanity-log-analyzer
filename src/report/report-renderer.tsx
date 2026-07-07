import { render } from "preact-render-to-string";
import { escapeJsonForHtml } from "../format.js";
import type { ReportData } from "../types.js";
import { renderReportMarkdown, slugifyReportFilename } from "./markdown.js";
import { ReportApp } from "./ReportApp.js";
import { copyButtonsScript } from "./scripts/copy-buttons.js";
import { groqFlyoutScript } from "./scripts/groq-flyout.js";
import { markdownDownloadScript } from "./scripts/markdown-download.js";
import { toastScript } from "./scripts/toast.js";
import { tocNavScript } from "./scripts/toc-nav.js";
import { urlTabsScript } from "./scripts/url-tabs.js";
import { viewToggleScript } from "./scripts/view-toggle.js";
import { reportCss } from "./styles/collect-css.js";

export function renderReportHtml(data: ReportData): string {
	const body = render(<ReportApp data={data} />);
	const json = escapeJsonForHtml(data);
	const markdownPayload = escapeJsonForHtml({
		filenameBase: slugifyReportFilename(data.title),
		billable: renderReportMarkdown(data, "billable"),
		all: renderReportMarkdown(data, "all"),
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
  <script>${toastScript}</script>
  <script>${copyButtonsScript}</script>
  <script>${viewToggleScript}</script>
  <script>${markdownDownloadScript}</script>
  <script>${urlTabsScript}</script>
  <script>${groqFlyoutScript}</script>
  <script>${tocNavScript}</script>
</body>
</html>`;
}

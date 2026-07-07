import { render } from "preact-render-to-string";
import { escapeJsonForHtml } from "../format.js";
import type { ReportData } from "../types.js";
import { ReportApp } from "./ReportApp.js";
import { copyButtonsScript } from "./scripts/copy-buttons.js";
import { reportCss } from "./styles/collect-css.js";

export function renderReportHtml(data: ReportData): string {
  const body = render(<ReportApp data={data} />);
  const json = escapeJsonForHtml(data);

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
  <script>${copyButtonsScript}</script>
</body>
</html>`;
}

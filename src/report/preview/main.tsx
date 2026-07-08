import { render } from "preact";
import { enrichReportData } from "../enrich-report.js";
import { ReportApp } from "../ReportApp.js";
import fixture from "../fixtures/sample-report.json";
import type { ReportDataInput } from "../../types.js";
import { copyButtonsScript } from "../scripts/copy-buttons.js";
import { tocNavScript } from "../scripts/toc-nav.js";
import { viewToggleScript } from "../scripts/view-toggle.js";
import "../styles/theme.css";

new Function(copyButtonsScript)();
new Function(viewToggleScript)();
new Function(tocNavScript)();

const root = document.getElementById("app");
if (root) {
  render(<ReportApp data={enrichReportData(fixture as ReportDataInput)} />, root);
}

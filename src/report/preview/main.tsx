import { render } from "preact";
import { ReportApp } from "../ReportApp.js";
import fixture from "../fixtures/sample-report.json";
import type { ReportData } from "../../types.js";
import { copyButtonsScript } from "../scripts/copy-buttons.js";
import { tocNavScript } from "../scripts/toc-nav.js";
import { viewToggleScript } from "../scripts/view-toggle.js";
import "../styles/theme.css";

new Function(copyButtonsScript)();
new Function(viewToggleScript)();
new Function(tocNavScript)();

const root = document.getElementById("app");
if (root) {
  render(<ReportApp data={fixture as ReportData} />, root);
}

import { render } from "preact";
import { ReportApp } from "../ReportApp.js";
import fixture from "../fixtures/sample-report.json";
import type { ReportData } from "../../types.js";
import { copyButtonsScript } from "../scripts/copy-buttons.js";
import "../styles/global.css";

new Function(copyButtonsScript)();

const root = document.getElementById("app");
if (root) {
  render(<ReportApp data={fixture as ReportData} />, root);
}

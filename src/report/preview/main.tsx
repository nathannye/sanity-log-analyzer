import { render } from "preact";
import { ReportApp } from "../ReportApp.js";
import fixture from "../fixtures/sample-report.json";
import type { ReportData } from "../../types.js";
import "../styles/global.css";

const root = document.getElementById("app");
if (root) {
  render(<ReportApp data={fixture as ReportData} />, root);
}

import { render } from "preact";
import { enrichReportData } from "../enrich-report.js";
import { ReportApp } from "../ReportApp.js";
import fixture from "../fixtures/sample-report.json";
import type { ReportDataInput } from "../../types.js";
import { initReportModules } from "../runtime-core.js";
import "../styles/report-styles.js";

const root = document.getElementById("app");
if (root) {
	render(<ReportApp data={enrichReportData(fixture as ReportDataInput)} />, root);
	initReportModules(root);
}

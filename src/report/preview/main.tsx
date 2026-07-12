import { render } from "preact";
import { enrichReportData } from "../enrich-report.js";
import { buildGeistFontFaceCss } from "../geist-fonts.js";
import { ReportApp } from "../ReportApp.js";
import fixture from "../fixtures/sample-report.json";
import type { ReportDataInput } from "../../types.js";
import { initReportModules } from "../runtime-core.js";
import geistMonoUrl from "../../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2?url";
import geistSansUrl from "../../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2?url";
import "../styles/report-styles.js";

const root = document.getElementById("app");
if (root) {
	const fontStyle = document.createElement("style");
	fontStyle.id = "geist-fonts";
	fontStyle.textContent = buildGeistFontFaceCss(geistSansUrl, geistMonoUrl);
	document.head.prepend(fontStyle);

	render(<ReportApp data={enrichReportData(fixture as ReportDataInput)} />, root);
	initReportModules(root);
}

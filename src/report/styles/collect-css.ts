import barListCss from "../components/BarList.module.css?inline";
import dataTableCss from "../components/DataTable.module.css?inline";
import donutCss from "../components/Donut.module.css?inline";
import headerCss from "../components/Header.module.css?inline";
import markdownDownloadCss from "../components/MarkdownDownload.module.css?inline";
import metricCss from "../components/Metric.module.css?inline";
import reportControlsCss from "../components/ReportControls.module.css?inline";
import tableOfContentsCss from "../components/TableOfContents.module.css?inline";
import viewSectionCss from "../components/ViewSection.module.css?inline";
import viewToggleCss from "../components/ViewToggle.module.css?inline";
import reportAppCss from "../ReportApp.module.css?inline";
import globalCss from "./global.css?inline";

export const reportCss = [
	globalCss,
	reportAppCss,
	headerCss,
	tableOfContentsCss,
	reportControlsCss,
	viewToggleCss,
	markdownDownloadCss,
	viewSectionCss,
	metricCss,
	donutCss,
	barListCss,
	dataTableCss,
].join("\n");

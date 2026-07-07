import verticalBarChartCss from "../components/VerticalBarChart.module.css?inline";
import barListCss from "../components/BarList.module.css?inline";
import dataTableCss from "../components/DataTable.module.css?inline";
import refererDataTableCss from "../components/RefererDataTable.module.css?inline";
import donutCss from "../components/Donut.module.css?inline";
import groqQueryFlyoutCss from "../components/GroqQueryFlyout.module.css?inline";
import groqQueryStatsCss from "../components/GroqQueryStats.module.css?inline";
import headerCss from "../components/Header.module.css?inline";
import markdownDownloadCss from "../components/MarkdownDownload.module.css?inline";
import metricCss from "../components/Metric.module.css?inline";
import reportControlsCss from "../components/ReportControls.module.css?inline";
import tableOfContentsCss from "../components/TableOfContents.module.css?inline";
import urlDataTableCss from "../components/UrlDataTable.module.css?inline";
import urlTabsSectionCss from "../components/UrlTabsSection.module.css?inline";
import userAgentDataTableCss from "../components/UserAgentDataTable.module.css?inline";
import viewSectionCss from "../components/ViewSection.module.css?inline";
import viewToggleCss from "../components/ViewToggle.module.css?inline";
import reportAppCss from "../ReportApp.module.css?inline";
import globalCss from "./global.css?inline";
import prismGroqCss from "./prism-groq.css?inline";

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
	verticalBarChartCss,
	dataTableCss,
	refererDataTableCss,
	userAgentDataTableCss,
	urlTabsSectionCss,
	urlDataTableCss,
	groqQueryFlyoutCss,
	groqQueryStatsCss,
	prismGroqCss,
].join("\n");

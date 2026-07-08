import themeCss from "./theme.css?inline";
import verticalBarChartCss from "../components/VerticalBarChart.module.css?inline";
import tooltipCss from "../components/Tooltip.module.css?inline";
import donutCss from "../components/Donut.module.css?inline";

export const reportCss = [
	themeCss,
	verticalBarChartCss,
	tooltipCss,
	donutCss,
].join("\n");

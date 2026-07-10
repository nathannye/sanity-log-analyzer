import type { ReportData } from "../types.js";
import { Header } from "./components/Header.js";
import { ReportControls } from "./components/ReportControls.js";
import { TableOfContents } from "./components/TableOfContents.js";
import { ViewSection } from "./components/ViewSection.js";
import { paletteColorVars } from "./styles/colors.js";

interface ReportAppProps {
	data: ReportData;
}

export function ReportApp({ data }: ReportAppProps) {
	const colorStyle = paletteColorVars();

	return (
		<main
			class="mx-auto max-w-1600 px-20 pb-56 pt-32"
			style={colorStyle}
			data-module="toast markdown-download toc-nav"
		>
			<Header data={data} />
			<div class="grid grid-cols-1 items-start gap-24 lg:grid-cols-[22rem_minmax(0,1fr)]">
				<TableOfContents sections={data.config.sections} />
				<div class="min-w-0">
					<ReportControls />
					<ViewSection data={data} sections={data.config.sections} />
				</div>
			</div>
		</main>
	);
}

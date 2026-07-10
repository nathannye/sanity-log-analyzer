import type { ReportData } from "../types.js";
import { Header } from "./components/Header.js";
import { ReportControls } from "./components/ReportControls.js";
import { TableOfContents } from "./components/TableOfContents.js";
import { Topbar } from "./components/Topbar.js";
import { ViewSection } from "./components/ViewSection.js";
import { paletteColorVars } from "./styles/colors.js";

interface ReportAppProps {
	data: ReportData;
}

export function ReportApp({ data }: ReportAppProps) {
	const colorStyle = paletteColorVars();

	return (
		<main
			class="mx-auto max-w-1920 pb-56"
			style={colorStyle}
			data-module="toast markdown-download toc-nav"
		>
			<Topbar {...data} />
			
			<div class="items-start gap-margin-2 pr-margin-2 flex">
				<TableOfContents sections={data.config.sections} />
				<div class="min-w-0">
					<Header data={data} />
					<ViewSection data={data} sections={data.config.sections} />
				</div>
			</div>
		</main>
	);
}

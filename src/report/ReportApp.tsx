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
	const colorStyle = paletteColorVars(data.config.palette);
	const showBillableComparison = data.config.sections.billableComparison;
	const tocUrlRows = showBillableComparison
		? data.billable.byUrl
		: data.all.byUrl;

	return (
		<main
			class="mx-auto max-w-1600 px-20 pb-56 pt-32"
			style={colorStyle}
		>
			<Header data={data} />
			<div class="grid grid-cols-1 items-start gap-24 lg:grid-cols-[22rem_minmax(0,1fr)]">
				<TableOfContents
					sections={data.config.sections}
					urlRows={tocUrlRows}
				/>
				<div class="min-w-0">
					<ReportControls showToggle={showBillableComparison} />
					{showBillableComparison ? (
						<>
							<ViewSection
								view={data.billable}
								sections={data.config.sections}
								viewKey="billable"
							/>
							<ViewSection
								view={data.all}
								sections={data.config.sections}
								viewKey="all"
								hidden
							/>
						</>
					) : (
						<ViewSection
							view={data.all}
							sections={data.config.sections}
							viewKey="all"
						/>
					)}
					<div class="body-2 mt-24 text-muted">
						Raw report payload is embedded in{" "}
						<code>&lt;script type="application/json"&gt;</code> for downstream
						automation.
					</div>
				</div>
			</div>
		</main>
	);
}

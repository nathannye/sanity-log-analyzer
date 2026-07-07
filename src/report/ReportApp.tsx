import type { ReportData } from "../types.js";
import { Header } from "./components/Header.js";
import { ViewSection } from "./components/ViewSection.js";
import styles from "./ReportApp.module.css";
import { paletteColorVars } from "./styles/colors.js";

interface ReportAppProps {
	data: ReportData;
}

export function ReportApp({ data }: ReportAppProps) {
	const colorStyle = paletteColorVars(data.config.palette);

	return (
		<main class={styles.page} style={colorStyle}>
			<Header data={data} />
			<ViewSection view={data.all} sections={data.config.sections} />
			{data.config.sections.billableComparison ? (
				<ViewSection view={data.billable} sections={data.config.sections} />
			) : null}
			<div class={`body-2 ${styles.footer}`}>
				Raw report payload is embedded in{" "}
				<code>&lt;script type="application/json"&gt;</code> for downstream
				automation.
			</div>
		</main>
	);
}

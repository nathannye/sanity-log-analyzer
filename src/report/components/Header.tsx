import type { ReportData } from "../../types.js";
import styles from "./Header.module.css";

interface HeaderProps {
	data: ReportData;
}

export function Header({ data }: HeaderProps) {
	return (
		<header class={styles.header}>
			<div>
				<h1 class={`heading-1 ${styles.title}`}>{data.title}</h1>
				<div class={`body-1 ${styles.subtitle}`}>
					Generated from {data.sourcePath}. The report is self-contained and
					includes the normalized summary JSON payload inline.
				</div>
			</div>
			<div class={`body-2 ${styles.meta}`}>
				<div>Generated {data.generatedAt}</div>
				<div>Top N: {String(data.config.topN)}</div>
				<div>
					{data.config.sections.billableComparison
						? "Billable comparison enabled"
						: "Billable comparison disabled"}
				</div>
			</div>
		</header>
	);
}

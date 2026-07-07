import { MarkdownDownload } from "./MarkdownDownload.js";
import { ViewToggle } from "./ViewToggle.js";
import styles from "./ReportControls.module.css";

interface ReportControlsProps {
	showToggle: boolean;
}

export function ReportControls({ showToggle }: ReportControlsProps) {
	return (
		<div class={styles.row}>
			{showToggle ? <ViewToggle /> : null}
			<MarkdownDownload />
		</div>
	);
}

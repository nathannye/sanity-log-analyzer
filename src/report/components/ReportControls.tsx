import { MarkdownDownload } from "./MarkdownDownload.js";
import { ViewToggle } from "./ViewToggle.js";

interface ReportControlsProps {
	showToggle: boolean;
}

export function ReportControls({ showToggle }: ReportControlsProps) {
	return (
		<div class="mb-24 flex flex-wrap items-center gap-12 [&>:first-child]:min-w-0 [&>:first-child]:flex-1 [&>:first-child]:basis-240">
			{showToggle ? <ViewToggle /> : null}
			<MarkdownDownload />
		</div>
	);
}

import { Button } from "./Button.js";
import { DownloadIcon } from "./icons.js";

export function MarkdownDownload() {
	return (
		<Button id="download-markdown" icon={<DownloadIcon />}>
			Download markdown for LLM
		</Button>
	);
}

import styles from "./MarkdownDownload.module.css";

function DownloadIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<path d="M12 3v12" />
			<path d="m7 10 5 5 5-5" />
			<path d="M5 21h14" />
		</svg>
	);
}

export function MarkdownDownload() {
	return (
		<button type="button" id="download-markdown" class={styles.button}>
			<DownloadIcon />
			<span>Download markdown for LLM</span>
		</button>
	);
}

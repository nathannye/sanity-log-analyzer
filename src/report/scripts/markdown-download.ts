import type { ReportModuleInit } from "./module.js";

interface MarkdownPayload {
	filenameBase?: string;
	markdown?: string;
}

export const initMarkdownDownload: ReportModuleInit = (node) => {
	const button = node.querySelector<HTMLButtonElement>("#download-markdown");
	const doc = node.ownerDocument ?? document;
	const payloadEl = doc.getElementById("report-markdown");

	if (!button || !payloadEl) {
		return;
	}

	const onClick = () => {
		let payload: MarkdownPayload | null = null;

		try {
			payload = JSON.parse(payloadEl.textContent || "") as MarkdownPayload;
		} catch {
			return;
		}

		if (!payload?.filenameBase || !payload.markdown) return;

		const filename = `${payload.filenameBase}.md`;
		const blob = new Blob([payload.markdown], {
			type: "text/markdown;charset=utf-8",
		});
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		link.click();
		URL.revokeObjectURL(url);
		window.__showReportToast?.("Downloaded");
	};

	button.addEventListener("click", onClick);

	return () => {
		button.removeEventListener("click", onClick);
	};
};

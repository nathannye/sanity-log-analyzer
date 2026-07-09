import type { ReportModuleInit } from "./module.js";

interface MarkdownPayload {
	filenameBase?: string;
	billable?: string;
	all?: string;
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

		if (!payload?.filenameBase) return;

		const checkbox = node.querySelector<HTMLInputElement>("#show-studio-requests");
		const view = checkbox && checkbox.checked ? "all" : "billable";
		const markdown = view === "all" ? payload.all : payload.billable;
		if (!markdown) return;

		const suffix = view === "all" ? "_all" : "_billable-only";
		const filename = `${payload.filenameBase}${suffix}.md`;
		const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
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

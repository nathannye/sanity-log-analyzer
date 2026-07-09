import type { ReportModuleInit } from "./module.js";

export const initCopyButtons: ReportModuleInit = (node) => {
	const onClick = (event: MouseEvent) => {
		const target = event.target;
		if (!(target instanceof Element)) return;

		const button = target.closest<HTMLElement>("[data-copy-value]");
		if (!button || !node.contains(button)) return;

		event.preventDefault();

		const value = button.getAttribute("data-copy-value");
		if (!value) return;

		const message = button.getAttribute("data-copy-toast") || "Copied";
		navigator.clipboard.writeText(value).then(() => {
			window.__showReportToast?.(message);
		}).catch(() => {
			// Ignore clipboard failures.
		});
	};

	node.addEventListener("click", onClick);

	return () => {
		node.removeEventListener("click", onClick);
	};
};

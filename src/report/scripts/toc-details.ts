import type { ReportModuleInit } from "./module.js";

const DESKTOP_MQ = "(min-width: 1024px)";

export const initTocDetails: ReportModuleInit = (node) => {
	const detailsList = node.matches("details.toc-details")
		? [node as HTMLDetailsElement]
		: Array.from(node.querySelectorAll<HTMLDetailsElement>("details.toc-details"));

	if (detailsList.length === 0) return;

	const mq = window.matchMedia(DESKTOP_MQ);
	const cleanups: Array<() => void> = [];

	for (const details of detailsList) {
		const syncOpen = () => {
			if (mq.matches) details.open = true;
		};

		const onToggle = () => {
			if (mq.matches && !details.open) details.open = true;
		};

		syncOpen();
		mq.addEventListener("change", syncOpen);
		details.addEventListener("toggle", onToggle);

		cleanups.push(() => {
			mq.removeEventListener("change", syncOpen);
			details.removeEventListener("toggle", onToggle);
		});
	}

	return () => {
		for (const cleanup of cleanups) cleanup();
	};
};

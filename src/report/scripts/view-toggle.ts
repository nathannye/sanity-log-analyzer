import type { ReportModuleInit } from "./module.js";

export const initViewToggle: ReportModuleInit = (node) => {
	const checkbox = node.querySelector<HTMLInputElement>("#show-studio-requests");
	const billableView = node.querySelector<HTMLElement>(
		'[data-report-view="billable"]',
	);
	const allView = node.querySelector<HTMLElement>('[data-report-view="all"]');

	if (!checkbox || !billableView || !allView) {
		return;
	}

	const storageKey = "sanity-log-report-show-studio";

	const setView = (showAll: boolean) => {
		billableView.hidden = showAll;
		allView.hidden = !showAll;
		try {
			sessionStorage.setItem(storageKey, showAll ? "1" : "0");
		} catch {
			// Ignore storage failures in private browsing or restricted contexts.
		}
	};

	let saved: string | null = null;
	try {
		saved = sessionStorage.getItem(storageKey);
	} catch {
		// Ignore storage failures in private browsing or restricted contexts.
	}

	if (saved === "1") {
		checkbox.checked = true;
		setView(true);
	}

	const onChange = () => {
		setView(checkbox.checked);
	};

	checkbox.addEventListener("change", onChange);

	return () => {
		checkbox.removeEventListener("change", onChange);
	};
};

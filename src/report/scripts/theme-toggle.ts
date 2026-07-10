import type { ReportModuleInit } from "./module.js";

const STORAGE_KEY = "sanity-log-parser-theme";

export type ReportTheme = "dark" | "light";

function readStoredTheme(): ReportTheme | null {
	try {
		const value = localStorage.getItem(STORAGE_KEY);
		if (value === "dark" || value === "light") return value;
	} catch {
		// ignore storage access errors
	}
	return null;
}

function writeStoredTheme(theme: ReportTheme): void {
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// ignore storage access errors
	}
}

export function getReportTheme(): ReportTheme {
	const stored = readStoredTheme();
	if (stored) return stored;
	return document.documentElement.getAttribute("data-theme") === "light"
		? "light"
		: "dark";
}

export function setReportTheme(theme: ReportTheme): void {
	if (theme === "light") {
		document.documentElement.setAttribute("data-theme", "light");
	} else {
		document.documentElement.removeAttribute("data-theme");
	}
	writeStoredTheme(theme);
}

export function toggleReportTheme(): ReportTheme {
	const next: ReportTheme = getReportTheme() === "dark" ? "light" : "dark";
	setReportTheme(next);
	return next;
}

export const initThemeToggle: ReportModuleInit = (node) => {
	const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
	if (!button) return;

	const syncLabel = (theme: ReportTheme) => {
		const nextLabel =
			theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
		button.setAttribute("aria-label", nextLabel);
		button.setAttribute("title", nextLabel);
		button.dataset.theme = theme;
	};

	syncLabel(getReportTheme());

	const onClick = () => {
		syncLabel(toggleReportTheme());
	};

	button.addEventListener("click", onClick);

	return () => {
		button.removeEventListener("click", onClick);
	};
};

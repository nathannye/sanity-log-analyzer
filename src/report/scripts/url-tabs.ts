import type { ReportModuleInit } from "./module.js";

interface UrlTabGroup {
	id: string;
	label: string;
}

declare global {
	interface Window {
		__activateUrlTab?: (tab?: string | null) => void;
	}
}

function visibleUrlTabsSection(): HTMLElement | null {
	return document.querySelector<HTMLElement>(
		'[data-report-view]:not([hidden]) [data-url-tabs]',
	);
}

function activateUrlTab(section: HTMLElement, tab?: string | null): void {
	const resolved =
		tab ||
		section.getAttribute("data-default-url-tab") ||
		"image";
	const fallback =
		section.getAttribute("data-default-url-tab") || "image";
	const effectiveTab = section.querySelector(`[data-url-tab="${resolved}"]`)
		? resolved
		: fallback;

	const tabs = section.querySelectorAll<HTMLElement>("[data-url-tab]");
	const panels = section.querySelectorAll<HTMLElement>("[data-url-panel]");

	tabs.forEach((button) => {
		const isActive = button.getAttribute("data-url-tab") === effectiveTab;
		button.setAttribute("aria-selected", isActive ? "true" : "false");
	});

	panels.forEach((panel) => {
		panel.hidden = panel.getAttribute("data-url-panel") !== effectiveTab;
	});

	section.setAttribute("data-active-url-tab", effectiveTab);
}

window.__activateUrlTab = (tab?: string | null) => {
	const section = visibleUrlTabsSection();
	if (!section) return;
	activateUrlTab(section, tab);
};

export const initUrlTabs: ReportModuleInit = (node) => {
	const tabs = node.querySelectorAll<HTMLElement>("[data-url-tab]");
	if (tabs.length === 0) return;

	const activeTab =
		node.getAttribute("data-default-url-tab") ||
		node.querySelector<HTMLElement>("[data-url-tab]")?.getAttribute("data-url-tab") ||
		"image";

	activateUrlTab(node, activeTab);

	const onClick = (event: MouseEvent) => {
		const target = event.target;
		if (!(target instanceof Element)) return;

		const tabButton = target.closest<HTMLElement>("[data-url-tab]");
		if (!tabButton || !node.contains(tabButton)) return;

		const tab = tabButton.getAttribute("data-url-tab");
		if (!tab) return;

		event.preventDefault();
		activateUrlTab(node, tab);

		const suffix = tab === "image" ? "" : `/${tab}`;
		if (history.replaceState) {
			history.replaceState(
				null,
				"",
				`${window.location.pathname}${window.location.search}#urls${suffix}`,
			);
		}
	};

	node.addEventListener("click", onClick);

	return () => {
		node.removeEventListener("click", onClick);
	};
};

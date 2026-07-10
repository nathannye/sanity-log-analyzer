import type { ReportModuleInit } from "./module.js";

declare global {
	interface Window {
		__activateUrlTab?: (tab?: string | null) => void;
	}
}

function visibleTabsSection(): HTMLElement | null {
	return document.querySelector<HTMLElement>("[data-url-tabs]");
}

function activateUrlTab(section: HTMLElement, tab?: string | null): void {
	const resolved =
		tab || section.getAttribute("data-default-url-tab") || "referrers";
	const fallback =
		section.getAttribute("data-default-url-tab") || "referrers";
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
	const section = visibleTabsSection();
	if (!section) return;
	activateUrlTab(section, tab);
};

export const initUrlTabs: ReportModuleInit = (node) => {
	const tabs = node.querySelectorAll<HTMLElement>("[data-url-tab]");
	if (tabs.length === 0) return;

	const activeTab =
		node.getAttribute("data-default-url-tab") ||
		node.querySelector<HTMLElement>("[data-url-tab]")?.getAttribute("data-url-tab") ||
		"referrers";

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

		const suffix = tab === "referrers" ? "" : `/${tab}`;
		if (history.replaceState) {
			history.replaceState(
				null,
				"",
				`${window.location.pathname}${window.location.search}#traffic${suffix}`,
			);
		}
	};

	node.addEventListener("click", onClick);

	return () => {
		node.removeEventListener("click", onClick);
	};
};

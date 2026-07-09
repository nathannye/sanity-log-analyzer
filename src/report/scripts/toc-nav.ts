import type { ReportModuleInit } from "./module.js";

interface ParsedHash {
	section: string;
	urlTab: string | null;
	full: string;
}

declare global {
	interface Window {
		__activateUrlTab?: (tab?: string | null) => void;
	}
}

function parseHash(hash: string): ParsedHash {
	const raw = (hash || "").replace(/^#/, "");
	if (!raw) return { section: "", urlTab: null, full: "" };
	if (raw.startsWith("urls/")) {
		return { section: "urls", urlTab: raw.slice(5), full: raw };
	}
	if (raw === "urls") {
		return { section: "urls", urlTab: null, full: "urls" };
	}
	return { section: raw, urlTab: null, full: raw };
}

function scrollToSection(node: HTMLElement, section: string, fullHash: string): void {
	const target = node.querySelector<HTMLElement>(
		`[data-report-view]:not([hidden]) [data-section="${section}"]`,
	);
	if (!target) return;

	target.scrollIntoView({ behavior: "smooth", block: "start" });

	if (history.replaceState) {
		history.replaceState(
			null,
			"",
			`${window.location.pathname}${window.location.search}#${fullHash}`,
		);
	} else {
		window.location.hash = fullHash;
	}
}

function navigate(node: HTMLElement, hash: string): void {
	const parsed = parseHash(hash);
	if (!parsed.section) return;

	scrollToSection(node, parsed.section, parsed.full);

	if (parsed.section === "urls") {
		window.__activateUrlTab?.(parsed.urlTab);
	}
}

export const initTocNav: ReportModuleInit = (node) => {
	const onClick = (event: MouseEvent) => {
		const target = event.target;
		if (!(target instanceof Element)) return;

		const link = target.closest<HTMLAnchorElement>("[data-toc-link]");
		if (!link || !node.contains(link)) return;

		const slug = (link.getAttribute("href") || "").replace(/^#/, "");
		if (!slug) return;

		event.preventDefault();
		navigate(node, `#${slug}`);
	};

	node.addEventListener("click", onClick);

	const initialHash = window.location.hash;
	if (initialHash) {
		requestAnimationFrame(() => {
			navigate(node, initialHash);
		});
	}

	return () => {
		node.removeEventListener("click", onClick);
	};
};

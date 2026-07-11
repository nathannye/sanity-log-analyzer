import type { ReportModuleInit } from "./module.js";

interface ParsedHash {
	section: string;
	tab: string | null;
	full: string;
}

declare global {
	interface Window {
		__activateUrlTab?: (tab?: string | null) => void;
	}
}

function parseHash(hash: string): ParsedHash {
	const raw = (hash || "").replace(/^#/, "");
	if (!raw) return { section: "", tab: null, full: "" };
	if (raw.startsWith("traffic/")) {
		return { section: "traffic", tab: raw.slice(8), full: raw };
	}
	if (raw === "traffic") {
		return { section: "traffic", tab: null, full: "traffic" };
	}
	return { section: raw, tab: null, full: raw };
}

function scrollToSection(node: HTMLElement, section: string, fullHash: string): void {
	if (section === "summary") {
		window.scrollTo({ top: 0, behavior: "smooth" });
		if (history.replaceState) {
			history.replaceState(
				null,
				"",
				`${window.location.pathname}${window.location.search}`,
			);
		} else {
			window.location.hash = "";
		}
		return;
	}

	const target = node.querySelector<HTMLElement>(`[data-section="${section}"]`);
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

	if (parsed.section === "traffic") {
		window.__activateUrlTab?.(parsed.tab);
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

		const tocDetails = link.closest<HTMLDetailsElement>("details.toc-details");
		if (
			tocDetails &&
			window.matchMedia("(max-width: 1023px)").matches
		) {
			tocDetails.open = false;
		}
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

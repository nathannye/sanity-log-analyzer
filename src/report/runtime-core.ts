import { initCopyButtons } from "./scripts/copy-buttons.js";
import { initGroqFlyout } from "./scripts/groq-flyout.js";
import { initMarkdownDownload } from "./scripts/markdown-download.js";
import type { ReportModuleCleanup, ReportModuleInit } from "./scripts/module.js";
import { initTableSort } from "./scripts/table-sort.js";
import { initTocNav } from "./scripts/toc-nav.js";
import { initToast } from "./scripts/toast.js";
import { initUrlTabs } from "./scripts/url-tabs.js";

const moduleRegistry: Record<string, ReportModuleInit> = {
	"copy-buttons": initCopyButtons,
	"groq-flyout": initGroqFlyout,
	"markdown-download": initMarkdownDownload,
	"table-sort": initTableSort,
	"toc-nav": initTocNav,
	toast: initToast,
	"url-tabs": initUrlTabs,
};

function collectModuleNodes(root: ParentNode): HTMLElement[] {
	if (root instanceof HTMLElement) {
		const nodes = root.matches("[data-module]")
			? [root, ...root.querySelectorAll<HTMLElement>("[data-module]")]
			: Array.from(root.querySelectorAll<HTMLElement>("[data-module]"));
		return nodes;
	}

	return Array.from(root.querySelectorAll<HTMLElement>("[data-module]"));
}

function parseModuleNames(node: HTMLElement): string[] {
	return node
		.getAttribute("data-module")
		?.split(/\s+/)
		.map((name) => name.trim())
		.filter(Boolean) ?? [];
}

export function initReportModules(root: ParentNode = document): () => void {
	const cleanups: ReportModuleCleanup[] = [];

	for (const node of collectModuleNodes(root)) {
		for (const moduleName of parseModuleNames(node)) {
			const init = moduleRegistry[moduleName];
			if (!init) continue;

			const cleanup = init(node);
			if (typeof cleanup === "function") {
				cleanups.push(cleanup);
			}
		}
	}

	return () => {
		while (cleanups.length > 0) {
			cleanups.pop()?.();
		}
	};
}

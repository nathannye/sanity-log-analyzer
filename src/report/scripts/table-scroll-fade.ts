import type { ReportModuleInit } from "./module.js";

const SCROLL_FADE_EPSILON = 1;

function canScrollDown(el: HTMLElement): boolean {
	return el.scrollHeight - el.scrollTop - el.clientHeight > SCROLL_FADE_EPSILON;
}

function updateScrollFade(el: HTMLElement): void {
	el.toggleAttribute("data-can-scroll-down", canScrollDown(el));
}

function bindTableScrollFade(el: HTMLElement): () => void {
	const onScroll = () => updateScrollFade(el);
	el.addEventListener("scroll", onScroll, { passive: true });

	const resizeObserver = new ResizeObserver(() => updateScrollFade(el));
	resizeObserver.observe(el);
	for (const child of el.children) {
		if (child instanceof Element) resizeObserver.observe(child);
	}

	updateScrollFade(el);

	return () => {
		el.removeEventListener("scroll", onScroll);
		resizeObserver.disconnect();
		el.removeAttribute("data-can-scroll-down");
	};
}

export const initTableScrollFade: ReportModuleInit = (node) => {
	const wraps = node.matches(".data-table-wrap")
		? [node]
		: Array.from(node.querySelectorAll<HTMLElement>(".data-table-wrap"));

	if (wraps.length === 0) return;

	const cleanups = wraps.map(bindTableScrollFade);

	return () => {
		for (const cleanup of cleanups) cleanup();
	};
};

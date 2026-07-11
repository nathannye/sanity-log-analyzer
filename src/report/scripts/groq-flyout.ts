import type { ReportModuleInit } from "./module.js";

let lockedScrollY: number | null = null;

function lockBodyScroll(): void {
	if (lockedScrollY !== null) return;
	lockedScrollY = window.scrollY;
	const { body } = document;
	body.style.position = "fixed";
	body.style.top = `-${lockedScrollY}px`;
	body.style.left = "0";
	body.style.right = "0";
	body.style.width = "100%";
	body.style.overflow = "hidden";
}

function unlockBodyScroll(): void {
	if (lockedScrollY === null) return;
	const y = lockedScrollY;
	lockedScrollY = null;
	const { body } = document;
	body.style.position = "";
	body.style.top = "";
	body.style.left = "";
	body.style.right = "";
	body.style.width = "";
	body.style.overflow = "";
	window.scrollTo(0, y);
}

function openFlyout(dialog: HTMLDialogElement): void {
	if (typeof dialog.showModal !== "function") return;
	if (dialog.open) return;

	lockBodyScroll();
	dialog.addEventListener("close", unlockBodyScroll, { once: true });
	dialog.showModal();
}

export const initGroqFlyout: ReportModuleInit = (node) => {
	const onClick = (event: MouseEvent) => {
		const target = event.target;
		if (!(target instanceof Element)) return;

		const trigger = target.closest<HTMLElement>("[data-groq-flyout-target]");
		if (trigger && node.contains(trigger)) {
			event.preventDefault();
			const id = trigger.getAttribute("data-groq-flyout-target");
			if (!id) return;
			const dialog = document.getElementById(id);
			if (dialog instanceof HTMLDialogElement) {
				openFlyout(dialog);
			}
			return;
		}

		const closeTrigger = target.closest<HTMLElement>("[data-groq-flyout-close]");
		if (closeTrigger && node.contains(closeTrigger)) {
			const closeDialog = closeTrigger.closest("dialog[data-groq-flyout]");
			if (closeDialog instanceof HTMLDialogElement) {
				closeDialog.close();
			}
			return;
		}

		if (
			target instanceof HTMLDialogElement &&
			target.hasAttribute("data-groq-flyout") &&
			event.target === target
		) {
			target.close();
		}
	};

	node.addEventListener("click", onClick);

	return () => {
		node.removeEventListener("click", onClick);
		unlockBodyScroll();
	};
};

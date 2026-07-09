import type { ReportModuleInit } from "./module.js";

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
			if (dialog && typeof (dialog as HTMLDialogElement).showModal === "function") {
				(dialog as HTMLDialogElement).showModal();
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
	};
};

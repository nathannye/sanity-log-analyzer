import type { ReportModuleInit } from "./module.js";

declare global {
	interface Window {
		__showReportToast?: (message?: string) => void;
	}
}

export const initToast: ReportModuleInit = (node) => {
	const doc = node.ownerDocument ?? document;
	const globalWindow = doc.defaultView ?? window;
	let toast: HTMLDivElement | null = null;
	let hideTimer: number | null = null;
	const supportsPopover =
		typeof (
			HTMLElement.prototype as HTMLElement & {
				showPopover?: () => void;
			}
		).showPopover === "function";

	globalWindow.__showReportToast = (message) => {
		if (!toast) {
			toast = doc.createElement("div");
			toast.className = "copy-toast";
			toast.setAttribute("role", "status");
			toast.setAttribute("aria-live", "polite");
			if (supportsPopover) {
				toast.setAttribute("popover", "manual");
			}
			doc.body.appendChild(toast);
		}

		toast.textContent = message || "Done";

		if (supportsPopover) {
			const popoverToast = toast as HTMLDivElement & {
				showPopover?: () => void;
				hidePopover?: () => void;
			};
			if (toast.matches(":popover-open")) popoverToast.hidePopover?.();
			popoverToast.showPopover?.();
		}

		toast.classList.add("copy-toast--visible");

		if (hideTimer) {
			globalWindow.clearTimeout(hideTimer);
		}

		hideTimer = globalWindow.setTimeout(() => {
			if (!toast) return;
			toast.classList.remove("copy-toast--visible");
			if (supportsPopover) {
				const popoverToast = toast as HTMLDivElement & {
					hidePopover?: () => void;
				};
				if (toast.matches(":popover-open")) popoverToast.hidePopover?.();
			}
		}, 1500);
	};

	return () => {
		if (hideTimer) {
			globalWindow.clearTimeout(hideTimer);
		}
		if (toast) {
			toast.remove();
		}
		if (globalWindow.__showReportToast) {
			delete globalWindow.__showReportToast;
		}
	};
};

import { copyButtonsScript } from "./copy-buttons.js";
import { groqFlyoutScript } from "./groq-flyout.js";
import { markdownDownloadScript } from "./markdown-download.js";
import { tableSortScript } from "./table-sort.js";
import { toastScript } from "./toast.js";
import { tocNavScript } from "./toc-nav.js";
import { urlTabsScript } from "./url-tabs.js";
import { viewToggleScript } from "./view-toggle.js";

export const reportScript = [
	toastScript,
	copyButtonsScript,
	viewToggleScript,
	markdownDownloadScript,
	urlTabsScript,
	tableSortScript,
	groqFlyoutScript,
	tocNavScript,
].join("\n");

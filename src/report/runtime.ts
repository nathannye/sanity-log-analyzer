import "./styles/report-styles.js";
import { initReportModules } from "./runtime-core.js";

let hasBootstrapped = false;

function bootstrap(): void {
	if (hasBootstrapped) return;
	hasBootstrapped = true;
	initReportModules(document);
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
	bootstrap();
}

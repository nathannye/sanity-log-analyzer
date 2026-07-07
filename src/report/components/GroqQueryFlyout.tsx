import { formatBytes, formatNumber } from "../../format.js";
import { analyzeGroqQuery } from "../analyze-groq.js";
import { formatGroqForDisplay } from "../format-groq.js";
import { highlightGroq } from "../highlight-groq.js";
import { GroqQueryStatsView } from "./GroqQueryStats.js";
import styles from "./GroqQueryFlyout.module.css";

interface GroqQueryFlyoutProps {
	id: string;
	query: string;
	params?: Record<string, unknown> | null;
	requests: number;
	responseBytes: number;
}

function CopyIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</svg>
	);
}

export function GroqQueryFlyout({
	id,
	query,
	params = null,
	requests,
	responseBytes,
}: GroqQueryFlyoutProps) {
	const formatted = formatGroqForDisplay(query);
	const highlighted = highlightGroq(formatted);
	const stats = analyzeGroqQuery(formatted, params ?? undefined);
	const avgBytes = requests > 0 ? responseBytes / requests : 0;
	const formattedParams =
		params && Object.keys(params).length > 0
			? JSON.stringify(params, null, 2)
			: null;

	return (
		<dialog id={id} class={styles.dialog} data-groq-flyout>
			<div class={styles.panel}>
				<div class={styles.header}>
					<h4 class={`heading-3 ${styles.title}`}>GROQ query</h4>
					<button
						type="button"
						class={styles.copyButton}
						data-copy-value={formatted}
						data-copy-toast="Copied query"
						aria-label="Copy query"
					>
						<span class={styles.copyButtonLabel}>Copy query</span>
						<CopyIcon />
					</button>
					<button
						type="button"
						class={styles.iconButton}
						data-groq-flyout-close
						aria-label="Close"
					>
						×
					</button>
				</div>
				<div class={styles.section}>
					<div class={`eyebrow-1 ${styles.sectionLabel}`}>Usage</div>
					<dl class={styles.stats}>
						<div class={styles.stat}>
							<dt class={styles.statLabel}>Bandwidth</dt>
							<dd class={styles.statValue}>{formatBytes(responseBytes)}</dd>
						</div>
						<div class={styles.stat}>
							<dt class={styles.statLabel}>Requests</dt>
							<dd class={styles.statValue}>{formatNumber(requests)}</dd>
						</div>
						<div class={styles.stat}>
							<dt class={styles.statLabel}>Avg / req</dt>
							<dd class={styles.statValue}>{formatBytes(avgBytes)}</dd>
						</div>
					</dl>
				</div>
				<div class={styles.section}>
					<div class={`eyebrow-1 ${styles.sectionLabel}`}>Query</div>
					<pre class={styles.pre}>
						<code
							class="language-groq"
							dangerouslySetInnerHTML={{ __html: highlighted }}
						/>
					</pre>
				</div>
				{formattedParams ? (
					<div class={styles.section}>
						<div class={`eyebrow-1 ${styles.sectionLabel}`}>Params</div>
						<pre class={styles.pre}>
							<code>{formattedParams}</code>
						</pre>
					</div>
				) : null}
				<div class={styles.section}>
					<div class={`eyebrow-1 ${styles.sectionLabel}`}>Structure</div>
					{stats ? (
						<GroqQueryStatsView stats={stats} />
					) : (
						<p class={styles.error}>Could not analyze query structure.</p>
					)}
				</div>
			</div>
		</dialog>
	);
}

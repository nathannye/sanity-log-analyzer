import { analyzeGroqQuery } from "../analyze-groq.js";
import { formatGroqForDisplay } from "../format-groq.js";
import { highlightGroq } from "../highlight-groq.js";
import { GroqQueryStatsView } from "./GroqQueryStats.js";
import styles from "./GroqQueryFlyout.module.css";

interface GroqQueryFlyoutProps {
	id: string;
	query: string;
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

export function GroqQueryFlyout({ id, query }: GroqQueryFlyoutProps) {
	const formatted = formatGroqForDisplay(query);
	const highlighted = highlightGroq(formatted);
	const stats = analyzeGroqQuery(formatted);

	return (
		<dialog id={id} class={styles.dialog} data-groq-flyout>
			<div class={styles.panel}>
				<div class={styles.header}>
					<h4 class={`heading-3 ${styles.title}`}>GROQ query</h4>
					<button
						type="button"
						class={styles.iconButton}
						data-copy-value={formatted}
						aria-label="Copy GROQ query"
						title="Copy query"
					>
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
					<div class={`eyebrow-1 ${styles.sectionLabel}`}>Query</div>
					<pre class={styles.pre}>
						<code
							class="language-groq"
							dangerouslySetInnerHTML={{ __html: highlighted }}
						/>
					</pre>
				</div>
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

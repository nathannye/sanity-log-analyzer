import { formatBytes, formatNumber } from "../../format.js";
import { analyzeGroqQuery } from "../analyze-groq.js";
import { formatGroqForDisplay } from "../format-groq.js";
import { highlightGroq } from "../highlight-groq.js";
import { Button } from "./Button.js";
import styles from "./GroqQueryFlyout.module.css";
import { GroqQueryStatsView } from "./GroqQueryStats.js";
import { CopyIcon } from "./icons.js";

interface GroqQueryFlyoutProps {
	id: string;
	query: string;
	params?: Record<string, unknown> | null;
	requests: number;
	responseBytes: number;
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
					<Button
						variant="outline-pill"
						icon={<CopyIcon />}
						iconPosition="end"
						data-copy-value={formatted}
						data-copy-toast="Copied query"
						aria-label="Copy query"
					>
						Copy query
					</Button>
					<Button
						variant="ghost-icon"
						icon="×"
						data-groq-flyout-close
						aria-label="Close"
					/>
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
				<p class={styles.note}>
					Want to learn more about making efficient queries? Check out Sanity's
					guide on{" "}
					<a
						href="https://www.sanity.io/docs/developer-guides/high-performance-groq"
						target="_blank"
						rel="noopener noreferrer"
					>
						how to optimize groq queries.
					</a>
					.
				</p>
			</div>
		</dialog>
	);
}

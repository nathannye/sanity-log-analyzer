import { formatBytes, formatNumber } from "../../format.js";
import type { GroqUrlDetails } from "../../types.js";
import { GROQ_SPREAD_WARNING } from "../groq-constants.js";
import { Button } from "./Button.js";
import { GroqQueryStatsView } from "./GroqQueryStats.js";
import { CopyIcon } from "./icons.js";

interface GroqQueryFlyoutProps {
	id: string;
	details: GroqUrlDetails;
	requests: number;
	responseBytes: number;
}

export function GroqQueryFlyout({
	id,
	details,
	requests,
	responseBytes,
}: GroqQueryFlyoutProps) {
	const {
		formattedQuery,
		highlightedQuery,
		stats,
		hasSpreadOperator,
		params,
	} = details;
	const avgBytes = requests > 0 ? responseBytes / requests : 0;
	const formattedParams =
		params && Object.keys(params).length > 0
			? JSON.stringify(params, null, 2)
			: null;

	return (
		<dialog
			id={id}
			class="dialog border border-border-faint bg-panel p-0 text-text shadow-[0_1.6rem_4.8rem_rgba(0,0,0,0.45)] rounded-md"
			data-groq-flyout
		>
			<div class="px-16 pt-12 pb-16">
				<div class="mb-12 flex items-center gap-8">
					<h4 class="heading-3 mb-0 flex-1 text-[1.4rem]">GROQ query</h4>
					<Button
						variant="outline-pill"
						icon={<CopyIcon />}
						iconPosition="end"
						data-copy-value={formattedQuery}
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
				<div>
					<div class="eyebrow-1 mb-8 text-muted">Usage</div>
					<dl class="m-0 grid grid-cols-3 gap-8">
						<div class="m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10">
							<dt class="m-0 text-muted" style={{ fontSize: "var(--text-size-xs)" }}>
								Bandwidth
							</dt>
							<dd class="body-2 mt-4 mb-0 tabular-nums">
								{formatBytes(responseBytes)}
							</dd>
						</div>
						<div class="m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10">
							<dt class="m-0 text-muted" style={{ fontSize: "var(--text-size-xs)" }}>
								Requests
							</dt>
							<dd class="body-2 mt-4 mb-0 tabular-nums">
								{formatNumber(requests)}
							</dd>
						</div>
						<div class="m-0 rounded-sm border border-border-subtle bg-black/20 px-12 py-10">
							<dt class="m-0 text-muted" style={{ fontSize: "var(--text-size-xs)" }}>
								Avg / req
							</dt>
							<dd class="body-2 mt-4 mb-0 tabular-nums">
								{formatBytes(avgBytes)}
							</dd>
						</div>
					</dl>
				</div>
				{hasSpreadOperator ? (
					<p class="body-2 mt-22 mb-14 rounded-sm border border-[var(--color-amber,#f59e0b)] px-10 py-8 leading-[1.5] text-[var(--color-amber)] bg-[var(--color-amber-light,rgba(245,158,11,0.12))]">
						This query {GROQ_SPREAD_WARNING}.
					</p>
				) : null}
				<div class="mt-16 border-t border-border-subtle pt-16">
					<div class="eyebrow-1 mb-8 text-muted">Query</div>
					<pre class="body-2 m-0 max-h-240 overflow-auto rounded-sm border border-border-subtle bg-black/35 p-12 font-mono leading-[1.5] break-words whitespace-pre-wrap">
						<code
							class="language-groq"
							dangerouslySetInnerHTML={{ __html: highlightedQuery }}
						/>
					</pre>
				</div>
				{formattedParams ? (
					<div class="mt-16 border-t border-border-subtle pt-16">
						<div class="eyebrow-1 mb-8 text-muted">Params</div>
						<pre class="body-2 m-0 max-h-240 overflow-auto rounded-sm border border-border-subtle bg-black/35 p-12 font-mono leading-[1.5] break-words whitespace-pre-wrap">
							<code>{formattedParams}</code>
						</pre>
					</div>
				) : null}
				<div class="mt-16 border-t border-border-subtle pt-16">
					<div class="eyebrow-1 mb-8 text-muted">Structure</div>
					{stats ? (
						<GroqQueryStatsView stats={stats} />
					) : (
						<p class="body-2 empty m-0">Could not analyze query structure.</p>
					)}
				</div>
				<p class="body-2 mt-22 text-muted">
					Want to learn more about making efficient queries? Check out Sanity's
					guide on{" "}
					<a
						href="https://www.sanity.io/docs/developer-guides/high-performance-groq"
						target="_blank"
						class="underline"
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

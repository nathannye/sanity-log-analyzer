import type { ComponentChildren } from "preact";
import { Button } from "./Button.js";
import { CopyIcon, ExternalLinkIcon } from "./icons.js";

interface LabelActionsProps {
	value: string;
	copyToast?: string;
	href?: string;
	externalLinkLabel?: string;
	children: ComponentChildren;
	adornments?: ComponentChildren;
}

export function LabelActions({
	value,
	copyToast,
	href,
	externalLinkLabel,
	children,
	adornments,
}: LabelActionsProps) {
	return (
		<div class="flex min-w-0 items-center gap-6">
			<Button
				variant="ghost-icon-sm"
				icon={<CopyIcon />}
				data-copy-value={value}
				{...(copyToast ? { "data-copy-toast": copyToast } : {})}
				aria-label={`Copy "${value}"`}
				title="Copy to clipboard"
			/>
			{href ? (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-ghost-sm"
					aria-label={`Open "${externalLinkLabel ?? value}" in new tab`}
					title="Open in new tab"
				>
					<span class="btn-icon">
						<ExternalLinkIcon />
					</span>
				</a>
			) : null}
			{children}
			{adornments}
		</div>
	);
}

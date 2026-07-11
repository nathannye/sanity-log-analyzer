import type { ComponentChildren } from "preact";
import { Button } from "./Button.js";
import { CopyIcon } from "./icons.js";

interface LabelActionsProps {
	value: string;
	copyToast?: string;
	href?: string;
	externalLinkLabel?: string;
	children: ComponentChildren;
	adornments?: ComponentChildren;
	actions?: ComponentChildren;
}

export function LabelActions({
	value,
	copyToast,
	href,
	externalLinkLabel,
	children,
	adornments,
	actions,
}: LabelActionsProps) {
	const label = href ? (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			class="flex min-w-0 flex-1 items-center gap-6 text-inherit no-underline"
			aria-label={`Open "${externalLinkLabel ?? value}" in new tab`}
			title="Open in new tab"
		>
			{children}
		</a>
	) : (
		children
	);

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
			{actions}
			{label}
			{adornments}
		</div>
	);
}

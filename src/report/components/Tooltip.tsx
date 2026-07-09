import type { ComponentChildren } from "preact";

export interface TooltipProps {
	content: ComponentChildren;
	children: ComponentChildren;
	placement?: "top" | "bottom";
	class?: string;
}

export function Tooltip({
	content,
	children,
	placement = "top",
	class: className,
}: TooltipProps) {
	const placementClass =
		placement === "bottom" ? "placementBottom" : "placementTop";
	return (
		<span
			class={["wrap", placementClass, className].filter(Boolean).join(" ")}
		>
			{children}
			<span class="tooltip" role="tooltip">
				{content}
			</span>
		</span>
	);
}

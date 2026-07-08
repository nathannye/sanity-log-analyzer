import type { ComponentChildren } from "preact";
import styles from "./Tooltip.module.css";

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
		placement === "bottom" ? styles.placementBottom : styles.placementTop;
	return (
		<span
			class={[styles.wrap, placementClass, className].filter(Boolean).join(" ")}
		>
			{children}
			<span class={styles.tooltip} role="tooltip">
				{content}
			</span>
		</span>
	);
}

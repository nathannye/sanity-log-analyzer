import type { ComponentChildren, JSX } from "preact";
import styles from "./Button.module.css";

export type ButtonVariant =
	| "default"
	| "ghost-icon"
	| "ghost-icon-sm"
	| "outline-pill"
	| "outline-pill-accent"
	| "tab";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
	default: styles.default,
	"ghost-icon": styles.ghostIcon,
	"ghost-icon-sm": styles.ghostIconSm,
	"outline-pill": styles.outlinePill,
	"outline-pill-accent": styles.outlinePillAccent,
	tab: styles.tab,
};

export interface ButtonProps
	extends Omit<JSX.HTMLAttributes<HTMLButtonElement>, "icon"> {
	variant?: ButtonVariant;
	icon?: ComponentChildren;
	iconPosition?: "start" | "end";
	children?: ComponentChildren;
}

export function Button({
	variant = "default",
	icon,
	iconPosition = "start",
	children,
	class: className,
	type = "button",
	...rest
}: ButtonProps) {
	const classes = [styles.button, VARIANT_CLASS[variant], className]
		.filter(Boolean)
		.join(" ");

	return (
		<button type={type} class={classes} {...rest}>
			{icon && iconPosition === "start" ? (
				<span class={styles.icon}>{icon}</span>
			) : null}
			{children ? <span class={styles.label}>{children}</span> : null}
			{icon && iconPosition === "end" ? (
				<span class={styles.icon}>{icon}</span>
			) : null}
		</button>
	);
}

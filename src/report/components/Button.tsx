import type { ComponentChildren, JSX } from "preact";

export type ButtonVariant =
	| "default"
	| "ghost-icon"
	| "ghost-icon-sm"
	| "outline-pill"
	| "outline-pill-accent"
	| "tab";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
	default: "btn",
	"ghost-icon": "btn-ghost",
	"ghost-icon-sm": "btn-ghost-sm",
	"outline-pill": "btn-pill",
	"outline-pill-accent": "btn-accent",
	tab: "btn-tab",
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
	const classes = [VARIANT_CLASS[variant], className].filter(Boolean).join(" ");

	return (
		<button type={type} class={classes} {...rest}>
			{icon && iconPosition === "start" ? (
				<span class="btn-icon translate-y-2">{icon}</span>
			) : null}
			{children ? <span class="btn-label">{children}</span> : null}
			{icon && iconPosition === "end" ? (
				<span class="btn-icon translate-y-2">{icon}</span>
			) : null}
		</button>
	);
}

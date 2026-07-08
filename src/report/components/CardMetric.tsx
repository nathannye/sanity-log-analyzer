import type { ComponentChildren } from "preact";

interface CardMetricProps {
	children: ComponentChildren;
	className?: string;
}

export function CardMetric({ children, className }: CardMetricProps) {
	const classes = ["card", "card-metric"];
	if (className) {
		classes.push(className);
	}

	return <article class={classes.join(" ")}>{children}</article>;
}

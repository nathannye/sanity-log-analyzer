interface MetricProps {
	label: string;
	value: string;
	note?: string;
}

export function Metric({ label, value, note }: MetricProps) {
	return (
		<article class="card card-metric grid content-between gap-0">
			<div class="eyebrow-1 text-muted">{label}</div>
			<div class="display-1 mt-auto pt-10">{value}</div>
			{note ? <div class="body-2 mt-8 text-muted">{note}</div> : null}
		</article>
	);
}

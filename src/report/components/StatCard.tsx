export function StatCard({ label, value }: { label: string, value: string }) {
	return (
    <div class="bg-primary/7 border-primary/7 border flex items-center gap-8 rounded-sm py-8 px-10">
      <dt class="eyebrow-1 shrink-0 w-grid-1-w text-muted">{label}</dt>
      <dd>{value || 'N/A'}</dd>
    </div>
	);
}
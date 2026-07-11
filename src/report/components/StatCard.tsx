import cx from "classix"
import { Tone, toneClasses } from "./tone";

export function StatCard({ label, value, tone, className }: { label: string, value: string, tone?: Tone, className?: string }) {

  
	return (
    <div class={cx("bg-primary/7 border-primary/7 border flex items-center gap-8 rounded-sm py-8 px-10", toneClasses(tone), className)}>
      <dt class="eyebrow-1 shrink-0 min-w-grid-1-w text-muted">{label}</dt>
      <dd class="shrink-0 body-1">{value || 'N/A'}</dd>
    </div>
	);
}
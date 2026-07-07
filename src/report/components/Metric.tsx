import styles from "./Metric.module.css";

interface MetricProps {
  label: string;
  value: string;
  note?: string;
}

export function Metric({ label, value, note }: MetricProps) {
  return (
    <article class={styles.metric}>
      <div class={`eyebrow-1 ${styles.label}`}>{label}</div>
      <div class={`display-1 ${styles.value}`}>{value}</div>
      {note ? <div class={`body-2 ${styles.note}`}>{note}</div> : null}
    </article>
  );
}

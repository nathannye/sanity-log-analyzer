import styles from "./Metric.module.css";

interface MetricProps {
  label: string;
  value: string;
  note?: string;
}

export function Metric({ label, value, note }: MetricProps) {
  return (
    <article class={styles.metric}>
      <div class={styles.label}>{label}</div>
      <div class={styles.value}>{value}</div>
      {note ? <div class={styles.note}>{note}</div> : null}
    </article>
  );
}

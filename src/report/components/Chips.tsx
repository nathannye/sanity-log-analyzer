import styles from "./Chips.module.css";

const CHIP_LABELS = [
  "Offline HTML",
  "Streaming NDJSON",
  "Configurable sections",
  "Embedded JSON payload",
];

export function Chips() {
  return (
    <div class={styles.chips}>
      {CHIP_LABELS.map((label) => (
        <div class={styles.chip} key={label}>
          {label}
        </div>
      ))}
    </div>
  );
}

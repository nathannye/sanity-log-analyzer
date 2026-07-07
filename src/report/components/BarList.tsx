import { formatBytes, formatNumber } from "../../format.js";
import type { RankedRow } from "../../types.js";
import styles from "./BarList.module.css";

interface BarListProps {
  title: string;
  rows: RankedRow[];
  accent: string;
}

export function BarList({ title, rows, accent }: BarListProps) {
  const max = rows.reduce((largest, row) => Math.max(largest, row.responseBytes), 0);

  return (
    <section class="card">
      <h3 class="heading-3">{title}</h3>
      <div class={styles.bars}>
        {rows.map((row) => {
          const pct = max > 0 ? (row.responseBytes / max) * 100 : 0;
          return (
            <div class={styles.row} key={row.label}>
              <div class={styles.head}>
                <span class={styles.label} title={row.label}>
                  {row.label}
                </span>
                <span class={styles.value}>
                  {formatBytes(row.responseBytes)}{" "}
                  <span class={styles.meta}>{formatNumber(row.requests)}</span>
                </span>
              </div>
              <div class={styles.track}>
                <div
                  class={styles.fill}
                  style={{ width: `${pct.toFixed(2)}%`, background: accent }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

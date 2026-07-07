import { formatNumber } from "../../format.js";
import type { CountRow } from "../../types.js";
import styles from "./BarList.module.css";

interface CountBarsProps {
  title: string;
  rows: CountRow[];
  accent: string;
}

export function CountBars({ title, rows, accent }: CountBarsProps) {
  const max = rows.reduce((largest, row) => Math.max(largest, row.count), 0);

  return (
    <section class="card">
      <h3>{title}</h3>
      <div class={styles.bars}>
        {rows.map((row) => {
          const pct = max > 0 ? (row.count / max) * 100 : 0;
          return (
            <div class={styles.row} key={row.label}>
              <div class={styles.head}>
                <span class={styles.label}>{row.label}</span>
                <span class={styles.value}>{formatNumber(row.count)}</span>
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

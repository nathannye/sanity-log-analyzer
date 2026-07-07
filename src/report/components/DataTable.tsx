import { formatBytes, formatNumber } from "../../format.js";
import type { RankedRow } from "../../types.js";
import styles from "./DataTable.module.css";

interface DataTableProps {
  title: string;
  rows: RankedRow[];
}

export function DataTable({ title, rows }: DataTableProps) {
  return (
    <section class="card">
      <h3 class="heading-3">{title}</h3>
      <div class={styles.wrap}>
        <table class={`body-1 ${styles.table}`}>
          <thead>
            <tr>
              <th>Label</th>
              <th class="num">Bandwidth</th>
              <th class="num">Requests</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td class={styles.labelCell} title={row.label}>
                  {row.label}
                </td>
                <td class="num">{formatBytes(row.responseBytes)}</td>
                <td class="num">{formatNumber(row.requests)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

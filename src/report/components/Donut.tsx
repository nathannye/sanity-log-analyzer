import { formatBytes, formatPercentage } from "../../format.js";
import { styleForShare } from "../utils/styleForShare.js";
import styles from "./Donut.module.css";

interface DonutSlice {
  label: string;
  value: number;
}

interface DonutColors {
  primary: string;
  secondary: string;
}

interface DonutProps {
  title: string;
  primary: DonutSlice;
  secondary: DonutSlice;
  colors: DonutColors;
}

export function Donut({ title, primary, secondary, colors }: DonutProps) {
  const total = primary.value + secondary.value;
  const primaryPct = total > 0 ? (primary.value / total) * 100 : 0;

  return (
    <article class="card">
      <h3 class="heading-3">{title}</h3>
      <div class={styles.wrap}>
        <div
          class={styles.donut}
          style={styleForShare(primary.value, secondary.value, colors.primary, colors.secondary)}
        >
          <div class={`body-1 ${styles.center}`}>
            <strong class="heading-4">{formatBytes(total)}</strong>
            <span>{formatPercentage(primaryPct)}</span>
          </div>
        </div>
        <div class={`body-1 ${styles.legend}`}>
          <div>
            <span class={styles.swatch} style={{ background: colors.primary }} />
            {primary.label} <strong>{formatBytes(primary.value)}</strong>
          </div>
          <div>
            <span class={styles.swatch} style={{ background: colors.secondary }} />
            {secondary.label} <strong>{formatBytes(secondary.value)}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

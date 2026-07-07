import type { ReportData } from "../types.js";
import { Chips } from "./components/Chips.js";
import { Header } from "./components/Header.js";
import { ViewSection } from "./components/ViewSection.js";
import styles from "./ReportApp.module.css";

interface ReportAppProps {
  data: ReportData;
}

export function ReportApp({ data }: ReportAppProps) {
  const { palette } = data.config;
  const chartStyle = {
    "--chart-1": palette[0],
    "--chart-2": palette[1],
    "--chart-3": palette[2],
    "--chart-4": palette[3],
    "--chart-5": palette[4],
    "--chart-6": palette[5],
    "--chart-7": palette[6],
  } as Record<string, string>;

  return (
    <main class={styles.page} style={chartStyle}>
      <Header data={data} />
      <Chips />
      <ViewSection view={data.all} palette={palette} sections={data.config.sections} />
      {data.config.sections.billableComparison ? (
        <ViewSection view={data.billable} palette={palette} sections={data.config.sections} />
      ) : null}
      <div class={styles.footer}>
        Raw report payload is embedded in <code>&lt;script type="application/json"&gt;</code> for
        downstream automation.
      </div>
    </main>
  );
}

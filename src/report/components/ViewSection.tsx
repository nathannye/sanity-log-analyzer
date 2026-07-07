import { formatBytes, formatNumber } from "../../format.js";
import type { ReportSections, ReportView } from "../../types.js";
import { BarList } from "./BarList.js";
import { CountBars } from "./CountBars.js";
import { DataTable } from "./DataTable.js";
import { Donut } from "./Donut.js";
import { Metric } from "./Metric.js";
import styles from "./ViewSection.module.css";

interface ViewSectionProps {
  view: ReportView;
  palette: string[];
  sections: ReportSections;
}

export function ViewSection({ view, palette, sections }: ViewSectionProps) {
  const [primary, secondary, tertiary, quaternary, quinary, senary] = palette;
  const summaryNote =
    view.firstTimestamp && view.lastTimestamp
      ? `${view.firstTimestamp} → ${view.lastTimestamp}`
      : "No timestamps found";

  return (
    <details class={styles.section} open>
      <summary>{view.label}</summary>
      <div class={styles.viewGrid}>
        <Metric label="Requests" value={formatNumber(view.requests)} note={summaryNote} />
        <Metric
          label="Bandwidth"
          value={formatBytes(view.responseBytes)}
          note="Response size total"
        />
        <Metric
          label="Request bytes"
          value={formatBytes(view.requestBytes)}
          note="Inbound payload total"
        />
        <Metric
          label="Studio"
          value={formatBytes(view.studio.responseBytes)}
          note={`${formatNumber(view.studio.requests)} requests`}
        />
        <Metric
          label="Billable"
          value={formatBytes(view.nonStudio.responseBytes)}
          note={`${formatNumber(view.nonStudio.requests)} requests`}
        />
        <Donut
          title="Studio split"
          primary={{ label: "Studio", value: view.studio.responseBytes }}
          secondary={{ label: "Billable", value: view.nonStudio.responseBytes }}
          colors={{ primary, secondary }}
        />
      </div>
      <div class={styles.grid2}>
        <div class={styles.stack}>
          <div class={styles.sectionTitle}>Charts</div>
          <div class={styles.grid2}>
            {sections.domain ? (
              <BarList title="Top domains" rows={view.byDomain} accent={primary} />
            ) : null}
            {sections.endpoint ? (
              <BarList title="Top endpoints" rows={view.byEndpoint} accent={secondary} />
            ) : null}
          </div>
          <div class={styles.grid2}>
            {sections.date ? (
              <BarList title="Daily bandwidth" rows={view.byDate} accent={tertiary} />
            ) : null}
            {sections.hour ? (
              <BarList title="Hourly bandwidth" rows={view.byHour} accent={quaternary} />
            ) : null}
          </div>
          <div class={styles.grid2}>
            {sections.status ? (
              <CountBars title="Response codes" rows={view.byStatus} accent={quinary} />
            ) : null}
            {sections.histogram ? (
              <CountBars
                title="Response size buckets"
                rows={view.responseSizeHistogram}
                accent={senary}
              />
            ) : null}
          </div>
        </div>
        <div class={styles.stack}>
          <div class={styles.sectionTitle}>Top lists</div>
          {sections.urls ? <DataTable title="Top URLs" rows={view.byUrl} /> : null}
          {sections.referers ? (
            <DataTable title="Top referers" rows={view.byReferer} />
          ) : null}
          {sections.userAgents ? (
            <DataTable title="Top user agents" rows={view.byUserAgent} />
          ) : null}
          {sections.ips ? <DataTable title="Top IPs" rows={view.byIp} /> : null}
        </div>
      </div>
    </details>
  );
}

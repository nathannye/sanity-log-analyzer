import { escapeHtml, escapeJsonForHtml, formatBytes, formatNumber, formatPercentage } from "./format.js";
import type { CountRow, RankedRow, ReportConfig, ReportData, ReportSections, ReportView } from "./types.js";

interface DonutSlice {
  label: string;
  value: number;
}

interface DonutColors {
  primary: string;
  secondary: string;
}

function styleForShare(
  filled: number,
  empty: number,
  filledColor: string,
  emptyColor: string,
): string {
  const total = filled + empty;
  if (total <= 0) return `background: ${emptyColor};`;
  const filledPercent = (filled / total) * 100;
  return `background: conic-gradient(${filledColor} 0 ${filledPercent}%, ${emptyColor} ${filledPercent}% 100%);`;
}

function renderMetric(label: string, value: string, note?: string): string {
  return `
    <article class="metric">
      <div class="metric-label">${escapeHtml(label)}</div>
      <div class="metric-value">${escapeHtml(value)}</div>
      ${note ? `<div class="metric-note">${escapeHtml(note)}</div>` : ""}
    </article>
  `;
}

function renderDonut(title: string, primary: DonutSlice, secondary: DonutSlice, colors: DonutColors): string {
  const total = primary.value + secondary.value;
  const primaryPct = total > 0 ? (primary.value / total) * 100 : 0;
  return `
    <article class="card">
      <h3>${escapeHtml(title)}</h3>
      <div class="donut-wrap">
        <div class="donut" style="${styleForShare(primary.value, secondary.value, colors.primary, colors.secondary)}">
          <div class="donut-center">
            <strong>${escapeHtml(formatBytes(total))}</strong>
            <span>${escapeHtml(formatPercentage(primaryPct))}</span>
          </div>
        </div>
        <div class="legend">
          <div><span class="swatch" style="background:${colors.primary}"></span>${escapeHtml(primary.label)} <strong>${escapeHtml(formatBytes(primary.value))}</strong></div>
          <div><span class="swatch" style="background:${colors.secondary}"></span>${escapeHtml(secondary.label)} <strong>${escapeHtml(formatBytes(secondary.value))}</strong></div>
        </div>
      </div>
    </article>
  `;
}

function renderBarList(title: string, rows: RankedRow[], accent: string): string {
  const max = rows.reduce((largest, row) => Math.max(largest, row.responseBytes), 0);
  return `
    <section class="card">
      <h3>${escapeHtml(title)}</h3>
      <div class="bars">
        ${rows
          .map((row) => {
            const pct = max > 0 ? (row.responseBytes / max) * 100 : 0;
            return `
              <div class="bar-row">
                <div class="bar-head">
                  <span class="bar-label" title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</span>
                  <span class="bar-value">${escapeHtml(formatBytes(row.responseBytes))} <span class="bar-meta">${escapeHtml(formatNumber(row.requests))}</span></span>
                </div>
                <div class="bar-track"><div class="bar-fill" style="width:${pct.toFixed(2)}%;background:${accent};"></div></div>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderCountBars(title: string, rows: CountRow[], accent: string): string {
  const max = rows.reduce((largest, row) => Math.max(largest, row.count), 0);
  return `
    <section class="card">
      <h3>${escapeHtml(title)}</h3>
      <div class="bars">
        ${rows
          .map((row) => {
            const pct = max > 0 ? (row.count / max) * 100 : 0;
            return `
              <div class="bar-row">
                <div class="bar-head">
                  <span class="bar-label">${escapeHtml(row.label)}</span>
                  <span class="bar-value">${escapeHtml(formatNumber(row.count))}</span>
                </div>
                <div class="bar-track"><div class="bar-fill" style="width:${pct.toFixed(2)}%;background:${accent};"></div></div>
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderTable(title: string, rows: RankedRow[]): string {
  return `
    <section class="card">
      <h3>${escapeHtml(title)}</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th class="num">Bandwidth</th>
              <th class="num">Requests</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                <tr>
                  <td class="label-cell" title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</td>
                  <td class="num">${escapeHtml(formatBytes(row.responseBytes))}</td>
                  <td class="num">${escapeHtml(formatNumber(row.requests))}</td>
                </tr>
              `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderView(view: ReportView, palette: string[], sections: ReportSections): string {
  const [primary, secondary, tertiary, quaternary, quinary, senary] = palette;
  const summaryNote =
    view.firstTimestamp && view.lastTimestamp
      ? `${view.firstTimestamp} → ${view.lastTimestamp}`
      : "No timestamps found";

  return `
    <details class="view-section" open>
      <summary>${escapeHtml(view.label)}</summary>
      <div class="view-grid">
        ${renderMetric("Requests", formatNumber(view.requests), summaryNote)}
        ${renderMetric("Bandwidth", formatBytes(view.responseBytes), "Response size total")}
        ${renderMetric("Request bytes", formatBytes(view.requestBytes), "Inbound payload total")}
        ${renderMetric("Studio", formatBytes(view.studio.responseBytes), `${formatNumber(view.studio.requests)} requests`)}
        ${renderMetric("Billable", formatBytes(view.nonStudio.responseBytes), `${formatNumber(view.nonStudio.requests)} requests`)}
        ${renderDonut(
          "Studio split",
          { label: "Studio", value: view.studio.responseBytes },
          { label: "Billable", value: view.nonStudio.responseBytes },
          { primary, secondary },
        )}
      </div>
      <div class="grid-2">
        <div class="stack">
          <div class="section-title">Charts</div>
          <div class="grid-2">
            ${sections.domain ? renderBarList("Top domains", view.byDomain, primary) : ""}
            ${sections.endpoint ? renderBarList("Top endpoints", view.byEndpoint, secondary) : ""}
          </div>
          <div class="grid-2">
            ${sections.date ? renderBarList("Daily bandwidth", view.byDate, tertiary) : ""}
            ${sections.hour ? renderBarList("Hourly bandwidth", view.byHour, quaternary) : ""}
          </div>
          <div class="grid-2">
            ${sections.status ? renderCountBars("Response codes", view.byStatus, quinary) : ""}
            ${sections.histogram ? renderCountBars("Response size buckets", view.responseSizeHistogram, senary) : ""}
          </div>
        </div>
        <div class="stack">
          <div class="section-title">Top lists</div>
          ${sections.urls ? renderTable("Top URLs", view.byUrl) : ""}
          ${sections.referers ? renderTable("Top referers", view.byReferer) : ""}
          ${sections.userAgents ? renderTable("Top user agents", view.byUserAgent) : ""}
          ${sections.ips ? renderTable("Top IPs", view.byIp) : ""}
        </div>
      </div>
    </details>
  `;
}

export function renderReportHtml(data: ReportData): string {
  const json = escapeJsonForHtml(data);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(data.title)}</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #09090b;
      --panel: rgba(24, 24, 27, 0.9);
      --panel-border: rgba(63, 63, 70, 0.9);
      --text: #f4f4f5;
      --muted: #a1a1aa;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(14, 165, 233, 0.16), transparent 30%),
        radial-gradient(circle at 85% 15%, rgba(168, 85, 247, 0.14), transparent 28%),
        linear-gradient(180deg, #050507, #0d0d12 40%, #101016);
    }
    .page {
      max-width: 1440px;
      margin: 0 auto;
      padding: 32px 20px 56px;
    }
    header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      align-items: end;
      margin-bottom: 24px;
    }
    h1 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3.25rem);
      letter-spacing: -0.05em;
      line-height: 0.95;
    }
    .subtitle {
      margin-top: 10px;
      color: var(--muted);
      max-width: 72ch;
    }
    .meta {
      display: grid;
      gap: 8px;
      justify-items: end;
      text-align: right;
      color: var(--muted);
      font-size: 0.95rem;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0 28px;
    }
    .chip {
      padding: 8px 12px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      color: var(--text);
      font-size: 0.9rem;
    }
    .view-section {
      margin-bottom: 24px;
      border: 1px solid var(--panel-border);
      border-radius: 24px;
      background: linear-gradient(180deg, rgba(24,24,27,0.92), rgba(17,17,23,0.92));
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
      overflow: clip;
    }
    .view-section > summary {
      list-style: none;
      cursor: pointer;
      padding: 18px 20px;
      font-size: 1.2rem;
      font-weight: 700;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .view-section > summary::-webkit-details-marker { display: none; }
    .view-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      padding: 20px;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }
    @media (max-width: 1100px) {
      .grid-2 { grid-template-columns: 1fr; }
      .meta { justify-items: start; text-align: left; }
      header { align-items: start; }
    }
    .stack {
      display: grid;
      gap: 16px;
    }
    .section-title {
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.74rem;
      margin: 8px 0 -4px;
      padding-left: 4px;
    }
    .card {
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      background: var(--panel);
      padding: 16px;
      backdrop-filter: blur(8px);
    }
    .metric {
      min-height: 120px;
      display: grid;
      align-content: space-between;
    }
    .metric-label {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--muted);
      font-size: 0.72rem;
    }
    .metric-value {
      font-size: clamp(1.45rem, 2vw, 2.2rem);
      font-weight: 800;
      margin-top: 10px;
    }
    .metric-note {
      color: var(--muted);
      margin-top: 8px;
      font-size: 0.92rem;
    }
    .donut-wrap {
      display: grid;
      gap: 16px;
      justify-items: center;
      margin-top: 12px;
    }
    .donut {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      padding: 22px;
      display: grid;
      place-items: center;
      position: relative;
    }
    .donut::after {
      content: "";
      position: absolute;
      inset: 24px;
      border-radius: 50%;
      background: rgba(10, 10, 12, 0.95);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .donut-center {
      position: relative;
      z-index: 1;
      display: grid;
      justify-items: center;
      gap: 4px;
      text-align: center;
      font-size: 0.95rem;
    }
    .donut-center strong {
      font-size: 1.3rem;
    }
    .legend {
      display: grid;
      gap: 10px;
      width: 100%;
      color: var(--muted);
      font-size: 0.92rem;
    }
    .legend strong { color: var(--text); }
    .swatch {
      display: inline-block;
      width: 11px;
      height: 11px;
      border-radius: 999px;
      margin-right: 8px;
      vertical-align: -1px;
    }
    .bars {
      display: grid;
      gap: 10px;
      margin-top: 12px;
    }
    .bar-row {
      display: grid;
      gap: 6px;
    }
    .bar-head {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: baseline;
    }
    .bar-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--text);
    }
    .bar-value, .bar-meta, .num {
      color: var(--muted);
      font-variant-numeric: tabular-nums;
    }
    .bar-track {
      width: 100%;
      height: 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      overflow: hidden;
    }
    .bar-fill {
      height: 100%;
      border-radius: inherit;
    }
    .table-wrap {
      overflow: auto;
      max-height: 420px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.08);
      margin-top: 12px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    th, td {
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      text-align: left;
      vertical-align: top;
    }
    th {
      position: sticky;
      top: 0;
      background: rgba(12, 12, 16, 0.96);
      color: var(--muted);
      font-weight: 600;
      backdrop-filter: blur(12px);
    }
    .label-cell {
      max-width: 520px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .footer {
      margin-top: 24px;
      color: var(--muted);
      font-size: 0.9rem;
    }
    code, pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
  </style>
</head>
<body>
  <main class="page">
    <header>
      <div>
        <h1>${escapeHtml(data.title)}</h1>
        <div class="subtitle">Generated from ${escapeHtml(data.sourcePath)}. The report is self-contained and includes the normalized summary JSON payload inline.</div>
      </div>
      <div class="meta">
        <div>Generated ${escapeHtml(data.generatedAt)}</div>
        <div>Top N: ${escapeHtml(String(data.config.topN))}</div>
        <div>${escapeHtml(data.config.sections.billableComparison ? "Billable comparison enabled" : "Billable comparison disabled")}</div>
      </div>
    </header>

    <div class="chips">
      <div class="chip">Offline HTML</div>
      <div class="chip">Streaming NDJSON</div>
      <div class="chip">Configurable sections</div>
      <div class="chip">Embedded JSON payload</div>
    </div>

    ${renderView(data.all, data.config.palette, data.config.sections)}
    ${data.config.sections.billableComparison ? renderView(data.billable, data.config.palette, data.config.sections) : ""}

    <div class="footer">
      Raw report payload is embedded in <code>&lt;script type="application/json"&gt;</code> for downstream automation.
    </div>
  </main>

  <script type="application/json" id="report-data">${json}</script>
</body>
</html>`;
}

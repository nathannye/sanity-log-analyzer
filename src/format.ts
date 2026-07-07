export function escapeHtml(value: unknown): string {
  const s = value === null || value === undefined ? "" : String(value);
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function escapeJsonForHtml(value: unknown): string {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

export function formatNumber(value: number): string {
  return Number(value).toLocaleString();
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes)) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const abs = Math.abs(bytes);
  let unitIndex = 0;
  let scaled = abs;
  while (scaled >= 1024 && unitIndex < units.length - 1) {
    scaled /= 1024;
    unitIndex += 1;
  }
  const rendered = unitIndex === 0 ? String(Math.round(scaled)) : scaled.toFixed(1);
  return `${bytes < 0 ? "-" : ""}${rendered} ${units[unitIndex]}`;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

const readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatReadableDate(timestamp: string): string {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "";
  return readableDateFormatter.format(date);
}

export function formatIsoDate(isoDate: string): string {
  if (!isoDate) return "";
  return formatReadableDate(`${isoDate}T00:00:00Z`);
}

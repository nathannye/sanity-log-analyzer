export function escapeHtml(value) {
    const s = value === null || value === undefined ? "" : String(value);
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
export function escapeJsonForHtml(value) {
    return JSON.stringify(value).replaceAll("<", "\\u003c");
}
export function formatNumber(value) {
    return Number(value).toLocaleString();
}
export function formatBytes(bytes) {
    if (!Number.isFinite(bytes))
        return "0 B";
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
export function formatPercentage(value) {
    return `${value.toFixed(1)}%`;
}
export function formatDistributionShare(share) {
    const percent = share * 100;
    if (percent > 0 && percent < 1)
        return "<1%";
    return `${Math.round(percent)}%`;
}
export function formatPeakHour(hourLabel) {
    const hour = Number.parseInt(hourLabel.split(":")[0] ?? "", 10);
    if (!Number.isFinite(hour))
        return hourLabel;
    if (hour === 0)
        return "12AM";
    if (hour === 12)
        return "12PM";
    return hour < 12 ? `${hour}AM` : `${hour - 12}PM`;
}
const readableDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});
export function formatReadableDate(timestamp) {
    if (!timestamp)
        return "";
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime()))
        return "";
    return readableDateFormatter.format(date);
}
export function formatIsoDate(isoDate) {
    if (!isoDate)
        return "";
    const date = new Date(`${isoDate}T00:00:00Z`);
    if (Number.isNaN(date.getTime()))
        return "";
    const weekday = date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
    return `${weekday} ${readableDateFormatter.format(date)}`;
}
//# sourceMappingURL=format.js.map
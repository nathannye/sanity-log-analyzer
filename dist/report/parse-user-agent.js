import { UAParser } from "ua-parser-js";
function normalizeBrowserName(name) {
    if (!name)
        return undefined;
    return name.replace(/^Mobile\s+/i, "");
}
function normalizeOsName(name) {
    if (!name)
        return undefined;
    if (name === "Mac OS")
        return "macOS";
    return name;
}
function classifyOsFamily(osName) {
    if (!osName)
        return "other";
    if (osName === "macOS")
        return "mac";
    if (osName === "Windows")
        return "windows";
    return "other";
}
function isMobileDeviceType(type) {
    return type === "mobile" || type === "tablet" || type === "wearable";
}
function fallbackDisplayLabel(raw) {
    if (!raw)
        return "(Unknown)";
    if (/^curl\b/i.test(raw))
        return "(curl)";
    if (/postman/i.test(raw))
        return "(Postman)";
    if (/^axios\b/i.test(raw) || /node-fetch/i.test(raw) || /^got\//i.test(raw)) {
        return "(HTTP client)";
    }
    if (/python-requests|aiohttp|httpx/i.test(raw))
        return "(Python client)";
    if (/^Go-http-client/i.test(raw))
        return "(Go client)";
    if (raw.length > 48)
        return `(${raw.slice(0, 45)}…)`;
    return `(${raw})`;
}
function buildDisplayLabel(osName, browserName, raw) {
    const parts = [osName, browserName].filter(Boolean);
    if (parts.length === 0)
        return fallbackDisplayLabel(raw);
    return `(${parts.join(" ")})`;
}
export function parseUserAgent(raw) {
    const trimmed = raw.trim();
    if (!trimmed) {
        return {
            deviceKind: "desktop",
            osFamily: "other",
            displayLabel: "(Unknown)",
            raw,
        };
    }
    const { browser, os, device } = new UAParser(trimmed).getResult();
    const osName = normalizeOsName(os.name);
    const browserName = normalizeBrowserName(browser.name);
    const deviceKind = isMobileDeviceType(device.type)
        ? "mobile"
        : "desktop";
    const osFamily = classifyOsFamily(osName);
    return {
        deviceKind,
        osFamily,
        displayLabel: buildDisplayLabel(osName, browserName, trimmed),
        raw,
    };
}
export function aggregateUserAgentStats(rows) {
    let totalRequests = 0;
    let macRequests = 0;
    let windowsRequests = 0;
    let mobileRequests = 0;
    let desktopRequests = 0;
    for (const row of rows) {
        const parsed = parseUserAgent(row.label);
        totalRequests += row.requests;
        if (parsed.osFamily === "mac")
            macRequests += row.requests;
        if (parsed.osFamily === "windows")
            windowsRequests += row.requests;
        if (parsed.deviceKind === "mobile")
            mobileRequests += row.requests;
        else
            desktopRequests += row.requests;
    }
    const toPct = (count) => totalRequests > 0 ? (count / totalRequests) * 100 : 0;
    return {
        totalRequests,
        macPct: toPct(macRequests),
        windowsPct: toPct(windowsRequests),
        mobilePct: toPct(mobileRequests),
        desktopPct: toPct(desktopRequests),
    };
}
//# sourceMappingURL=parse-user-agent.js.map
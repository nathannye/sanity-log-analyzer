import { UAParser } from "ua-parser-js";
import { isBot } from "ua-parser-js/bot-detection";

export type DeviceKind = "desktop" | "mobile";
export type OsFamily = "mac" | "windows" | "other";

export interface ParsedUserAgent {
	/** Set when the UA has an explicit mobile/desktop signal and is a browser. */
	deviceKind: DeviceKind | null;
	osFamily: OsFamily | null;
	/** Browser traffic only; bots and HTTP clients are excluded from summary stats. */
	isTrackable: boolean;
	displayLabel: string;
	raw: string;
}

export interface UserAgentAggregateStats {
	trackableRequests: number;
	macPct: number;
	windowsPct: number;
	mobilePct: number;
	desktopPct: number;
}

const NON_BROWSER_CLIENT =
	/^@sanity\/client\b|\bsanity\/client\b|^curl\b|^axios\b|node-fetch|^got\/|python-requests|aiohttp|httpx|^Go-http-client|^okhttp\b|^Java\/|^libwww-perl|postmanruntime/i;

const EXPLICIT_MOBILE =
	/\bMobile\b|iPhone|iPod|Android.+Mobile|Windows Phone/i;
const EXPLICIT_DESKTOP =
	/Macintosh|Windows NT|Win64|X11; Linux|X11; Ubuntu|CrOS/i;

function normalizeBrowserName(name: string | undefined): string | undefined {
	if (!name) return undefined;
	return name.replace(/^Mobile\s+/i, "");
}

function normalizeOsName(name: string | undefined): string | undefined {
	if (!name) return undefined;
	if (name === "Mac OS") return "macOS";
	return name;
}

function classifyOsFamily(osName: string | undefined): OsFamily {
	if (!osName) return "other";
	if (osName === "macOS") return "mac";
	if (osName === "Windows") return "windows";
	return "other";
}

function isMobileDeviceType(type: string | undefined): boolean {
	return type === "mobile" || type === "tablet" || type === "wearable";
}

function isNonBrowserClient(raw: string): boolean {
	return NON_BROWSER_CLIENT.test(raw);
}

function resolveDeviceKind(
	raw: string,
	deviceType: string | undefined,
): DeviceKind | null {
	if (isMobileDeviceType(deviceType) || EXPLICIT_MOBILE.test(raw)) {
		return "mobile";
	}
	if (EXPLICIT_DESKTOP.test(raw)) {
		return "desktop";
	}
	return null;
}

function fallbackDisplayLabel(raw: string): string {
	if (!raw) return "(Unknown)";
	if (/@sanity\/client/i.test(raw)) return "(@sanity/client)";
	if (/^curl\b/i.test(raw)) return "(curl)";
	if (/postman/i.test(raw)) return "(Postman)";
	if (/^axios\b/i.test(raw) || /node-fetch/i.test(raw) || /^got\//i.test(raw)) {
		return "(HTTP client)";
	}
	if (/python-requests|aiohttp|httpx/i.test(raw)) return "(Python client)";
	if (/^Go-http-client/i.test(raw)) return "(Go client)";
	if (raw.length > 48) return `(${raw.slice(0, 45)}…)`;
	return `(${raw})`;
}

function buildDisplayLabel(
	osName: string | undefined,
	browserName: string | undefined,
	raw: string,
): string {
	const parts = [osName, browserName].filter(Boolean);
	if (parts.length === 0) return fallbackDisplayLabel(raw);
	return `(${parts.join(" ")})`;
}

function notTrackable(raw: string): ParsedUserAgent {
	return {
		deviceKind: null,
		osFamily: null,
		isTrackable: false,
		displayLabel: fallbackDisplayLabel(raw),
		raw,
	};
}

export function parseUserAgent(raw: string): ParsedUserAgent {
	const trimmed = raw.trim();
	if (!trimmed) return notTrackable(raw);
	if (isNonBrowserClient(trimmed) || isBot(trimmed)) {
		return notTrackable(raw);
	}

	const result = new UAParser(trimmed).getResult();
	if (isBot(result) || !result.browser.name) {
		return notTrackable(raw);
	}

	const osName = normalizeOsName(result.os.name);
	const browserName = normalizeBrowserName(result.browser.name);
	const deviceKind = resolveDeviceKind(trimmed, result.device.type);
	const osFamily = classifyOsFamily(osName);

	return {
		deviceKind,
		osFamily,
		isTrackable: deviceKind !== null,
		displayLabel: buildDisplayLabel(osName, browserName, trimmed),
		raw,
	};
}

export function aggregateUserAgentStats(
	rows: Array<{ label: string; requests: number }>,
): UserAgentAggregateStats {
	let trackableRequests = 0;
	let macRequests = 0;
	let windowsRequests = 0;
	let mobileRequests = 0;
	let desktopRequests = 0;

	for (const row of rows) {
		const parsed = parseUserAgent(row.label);
		if (!parsed.isTrackable || !parsed.deviceKind) continue;

		trackableRequests += row.requests;
		if (parsed.osFamily === "mac") macRequests += row.requests;
		if (parsed.osFamily === "windows") windowsRequests += row.requests;
		if (parsed.deviceKind === "mobile") mobileRequests += row.requests;
		if (parsed.deviceKind === "desktop") desktopRequests += row.requests;
	}

	const toPct = (count: number) =>
		trackableRequests > 0 ? (count / trackableRequests) * 100 : 0;

	return {
		trackableRequests,
		macPct: toPct(macRequests),
		windowsPct: toPct(windowsRequests),
		mobilePct: toPct(mobileRequests),
		desktopPct: toPct(desktopRequests),
	};
}

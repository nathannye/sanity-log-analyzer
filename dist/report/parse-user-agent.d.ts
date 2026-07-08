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
export declare function parseUserAgent(raw: string): ParsedUserAgent;
export declare function aggregateUserAgentStats(rows: Array<{
    label: string;
    requests: number;
}>): UserAgentAggregateStats;

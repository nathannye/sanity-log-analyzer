export type DeviceKind = "desktop" | "mobile";
export type OsFamily = "mac" | "windows" | "other";
export interface ParsedUserAgent {
    deviceKind: DeviceKind;
    osFamily: OsFamily;
    displayLabel: string;
    raw: string;
}
export interface UserAgentAggregateStats {
    totalRequests: number;
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
//# sourceMappingURL=parse-user-agent.d.ts.map
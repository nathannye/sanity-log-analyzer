import type { LogEntry } from "./types.js";

function toNumber(value: unknown): number {
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

function toString(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

function toBoolean(value: unknown): boolean {
  return value === true;
}

function toTags(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((tag) => toString(tag)).filter(Boolean);
}

function parseTimestamp(value: string): { date: string; hour: number } {
  if (!value) return { date: "", hour: 0 };
  return {
    date: value.slice(0, 10),
    hour: Number.parseInt(value.slice(11, 13) || "0", 10) || 0,
  };
}

export function parseLogEntry(raw: unknown): LogEntry | null {
  if (!raw || typeof raw !== "object") return null;

  const record = raw as Record<string, unknown>;
  const body = (record.body as Record<string, unknown> | undefined) ?? {};
  const attributes = record.attributes as Record<string, unknown> | undefined;
  const sanity = attributes?.sanity as Record<string, unknown> | undefined;
  const timestamp = toString(record.timestamp);
  const { date, hour } = parseTimestamp(timestamp);

  return {
    timestamp,
    date,
    hour,
    method: toString(body.method),
    insertId: toString(body.insertId),
    duration: toNumber(body.duration),
    requestSize: toNumber(body.requestSize),
    responseSize: toNumber(body.responseSize),
    status: toNumber(body.status ?? body.responseStatus),
    url: toString(body.url),
    referer: toString(body.referer),
    userAgent: toString(body.userAgent),
    remoteIp: toString(body.remoteIp),
    projectId: toString(sanity?.projectId),
    dataset: toString(sanity?.dataset),
    domain: toString(sanity?.domain),
    endpoint: toString(sanity?.endpoint),
    groqQueryIdentifier: toString(sanity?.groqQueryIdentifier),
    apiVersion: toString(sanity?.apiVersion),
    tags: toTags(sanity?.tags),
    studioRequest: toBoolean(sanity?.studioRequest),
  };
}

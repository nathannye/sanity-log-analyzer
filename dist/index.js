// src/index.ts
import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";

// src/stream.ts
import { access, stat } from "fs/promises";
import { createInterface } from "readline";
import { createReadStream } from "fs";
import { createGunzip } from "zlib";

// src/log-entry.ts
function toNumber(value) {
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}
function toString(value) {
  if (value === null || value === void 0) return "";
  return String(value);
}
function toBoolean(value) {
  return value === true;
}
function toTags(value) {
  if (!Array.isArray(value)) return [];
  return value.map((tag) => toString(tag)).filter(Boolean);
}
function parseTimestamp(value) {
  if (!value) return { date: "", hour: 0 };
  return {
    date: value.slice(0, 10),
    hour: Number.parseInt(value.slice(11, 13) || "0", 10) || 0
  };
}
function parseLogEntry(raw) {
  if (!raw || typeof raw !== "object") return null;
  const record = raw;
  const body = record.body ?? {};
  const attributes = record.attributes;
  const sanity = attributes?.sanity;
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
    studioRequest: toBoolean(sanity?.studioRequest)
  };
}

// src/stream.ts
function isGzipPath(inputPath) {
  return inputPath.toLowerCase().endsWith(".gz");
}
var READ_BUFFER_BYTES = 4 * 1024 * 1024;
var PROGRESS_BYTE_INTERVAL = 50 * 1024 * 1024;
var PROGRESS_ENTRY_INTERVAL = 1e5;
var PROGRESS_MIN_INTERVAL_MS = 250;
function createProgressReporter(byteSource, totalBytes, onProgress) {
  let lastReportedBytes = 0;
  let lastReportedEntries = 0;
  let lastReportedAt = 0;
  return (entriesProcessed, force = false) => {
    if (!onProgress) return;
    const bytesRead = byteSource.bytesRead;
    const bytesDelta = bytesRead - lastReportedBytes;
    const entriesDelta = entriesProcessed - lastReportedEntries;
    const shouldReport = force || bytesDelta >= PROGRESS_BYTE_INTERVAL || entriesDelta >= PROGRESS_ENTRY_INTERVAL;
    if (!shouldReport) return;
    const now = Date.now();
    if (!force && now - lastReportedAt < PROGRESS_MIN_INTERVAL_MS) return;
    lastReportedBytes = bytesRead;
    lastReportedEntries = entriesProcessed;
    lastReportedAt = now;
    const percent = totalBytes > 0 ? Math.min(100, bytesRead / totalBytes * 100) : 100;
    onProgress({ bytesRead, totalBytes, percent, entriesProcessed });
  };
}
async function* streamLogEntries(inputPath, onProgress) {
  await access(inputPath);
  const { size: totalBytes } = await stat(inputPath);
  const fileStream = createReadStream(inputPath, {
    highWaterMark: READ_BUFFER_BYTES
  });
  const input = isGzipPath(inputPath) ? fileStream.pipe(createGunzip()) : fileStream.setEncoding("utf8");
  const rl = createInterface({ input, crlfDelay: Infinity });
  const reportProgress = createProgressReporter(fileStream, totalBytes, onProgress);
  let entriesProcessed = 0;
  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const raw = JSON.parse(trimmed);
      const entry = parseLogEntry(raw);
      if (entry) {
        yield entry;
        entriesProcessed += 1;
        reportProgress(entriesProcessed);
      }
    } catch {
    }
  }
  reportProgress(entriesProcessed, true);
}

// src/aggregate.ts
function createBreakdown() {
  return { requests: 0, responseBytes: 0 };
}
function createTotals() {
  return { requests: 0, responseBytes: 0, requestBytes: 0 };
}
function formatBucketLabel(lower, upper) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  const format = (value) => {
    if (value === Infinity) return "\u221E";
    let scaled = value;
    let unitIndex = 0;
    while (scaled >= 1024 && unitIndex < units.length - 1) {
      scaled /= 1024;
      unitIndex += 1;
    }
    return unitIndex === 0 ? `${Math.round(scaled)} ${units[unitIndex]}` : `${scaled.toFixed(0)} ${units[unitIndex]}`;
  };
  if (upper === Infinity) return `${format(lower)}+`;
  return `${format(lower)} - ${format(upper)}`;
}
function createSummary(histogramBuckets) {
  const histogram = {};
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    const label = formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]);
    histogram[label] = 0;
  }
  return {
    totalRequests: 0,
    totalResponseBytes: 0,
    totalRequestBytes: 0,
    firstTimestamp: null,
    lastTimestamp: null,
    byDomain: {},
    byEndpoint: {},
    byDate: {},
    byHour: {},
    byUrl: {},
    byReferer: {},
    byUserAgent: {},
    byIp: {},
    studio: createTotals(),
    nonStudio: createTotals(),
    byStatus: {},
    byStatusNonStudio: {},
    responseSizeHistogram: histogram,
    responseSizeHistogramNonStudio: { ...histogram },
    byDomainNonStudio: {},
    byEndpointNonStudio: {},
    byDateNonStudio: {},
    byHourNonStudio: {},
    byUrlNonStudio: {},
    byRefererNonStudio: {},
    byUserAgentNonStudio: {},
    byIpNonStudio: {}
  };
}
function incrementBreakdown(map, key, responseBytes) {
  const normalized = key || "(empty)";
  if (!map[normalized]) map[normalized] = createBreakdown();
  map[normalized].requests += 1;
  map[normalized].responseBytes += responseBytes;
}
function incrementHourBreakdown(map, hour, responseBytes) {
  if (!map[hour]) map[hour] = createBreakdown();
  map[hour].requests += 1;
  map[hour].responseBytes += responseBytes;
}
function incrementStatus(map, status) {
  map[status] = (map[status] ?? 0) + 1;
}
function bucketLabelsFor(histogramBuckets) {
  const labels = [];
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    labels.push(formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]));
  }
  return labels;
}
function bucketIndex(responseBytes, histogramBuckets) {
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    if (responseBytes < histogramBuckets[i + 1]) return i;
  }
  return Math.max(0, histogramBuckets.length - 2);
}
function createHistogramTracker(bucketCount) {
  return {
    counts: new Array(bucketCount).fill(0),
    nonStudioCounts: new Array(bucketCount).fill(0)
  };
}
function histogramToRecord(labels, counts) {
  const histogram = {};
  for (let i = 0; i < labels.length; i += 1) {
    histogram[labels[i]] = counts[i];
  }
  return histogram;
}
function accumulateEntry(summary, entry, histogramBuckets, histogram) {
  const responseBytes = entry.responseSize;
  const requestBytes = entry.requestSize;
  const studioRequest = entry.studioRequest;
  summary.totalRequests += 1;
  summary.totalResponseBytes += responseBytes;
  summary.totalRequestBytes += requestBytes;
  if (entry.timestamp) {
    if (!summary.firstTimestamp) summary.firstTimestamp = entry.timestamp;
    summary.lastTimestamp = entry.timestamp;
  }
  incrementBreakdown(summary.byDomain, entry.domain, responseBytes);
  incrementBreakdown(summary.byEndpoint, entry.endpoint, responseBytes);
  incrementBreakdown(summary.byDate, entry.date, responseBytes);
  incrementHourBreakdown(summary.byHour, entry.hour, responseBytes);
  incrementBreakdown(summary.byUrl, entry.url, responseBytes);
  incrementBreakdown(summary.byReferer, entry.referer, responseBytes);
  incrementBreakdown(summary.byUserAgent, entry.userAgent, responseBytes);
  incrementBreakdown(summary.byIp, entry.remoteIp, responseBytes);
  if (!studioRequest) {
    incrementBreakdown(summary.byDomainNonStudio, entry.domain, responseBytes);
    incrementBreakdown(summary.byEndpointNonStudio, entry.endpoint, responseBytes);
    incrementBreakdown(summary.byDateNonStudio, entry.date, responseBytes);
    incrementHourBreakdown(summary.byHourNonStudio, entry.hour, responseBytes);
    incrementBreakdown(summary.byUrlNonStudio, entry.url, responseBytes);
    incrementBreakdown(summary.byRefererNonStudio, entry.referer, responseBytes);
    incrementBreakdown(summary.byUserAgentNonStudio, entry.userAgent, responseBytes);
    incrementBreakdown(summary.byIpNonStudio, entry.remoteIp, responseBytes);
  }
  if (studioRequest) {
    summary.studio.requests += 1;
    summary.studio.responseBytes += responseBytes;
    summary.studio.requestBytes += requestBytes;
  } else {
    summary.nonStudio.requests += 1;
    summary.nonStudio.responseBytes += responseBytes;
    summary.nonStudio.requestBytes += requestBytes;
  }
  incrementStatus(summary.byStatus, entry.status);
  if (!studioRequest) {
    incrementStatus(summary.byStatusNonStudio, entry.status);
  }
  const bucket = bucketIndex(responseBytes, histogramBuckets);
  histogram.counts[bucket] += 1;
  if (!studioRequest) {
    histogram.nonStudioCounts[bucket] += 1;
  }
}
async function aggregateLogFile(inputPath, histogramBuckets, onProgress) {
  const summary = createSummary(histogramBuckets);
  const labels = bucketLabelsFor(histogramBuckets);
  const histogram = createHistogramTracker(labels.length);
  for await (const entry of streamLogEntries(inputPath, onProgress)) {
    accumulateEntry(summary, entry, histogramBuckets, histogram);
  }
  summary.responseSizeHistogram = histogramToRecord(labels, histogram.counts);
  summary.responseSizeHistogramNonStudio = histogramToRecord(
    labels,
    histogram.nonStudioCounts
  );
  return summary;
}

// src/config.ts
import { readFile } from "fs/promises";
var DEFAULT_REPORT_CONFIG = {
  title: "Sanity Request Log Report",
  topN: 50,
  histogramBuckets: [0, 1024, 10240, 102400, 1048576, 10485760, Infinity],
  sections: {
    domain: true,
    endpoint: true,
    date: true,
    hour: true,
    status: true,
    histogram: true,
    urls: true,
    referers: true,
    userAgents: true,
    ips: true,
    billableComparison: true
  }
};
function resolveReportConfig(input = {}) {
  return {
    title: input.title ?? DEFAULT_REPORT_CONFIG.title,
    topN: input.topN ?? DEFAULT_REPORT_CONFIG.topN,
    histogramBuckets: input.histogramBuckets ?? DEFAULT_REPORT_CONFIG.histogramBuckets,
    sections: {
      ...DEFAULT_REPORT_CONFIG.sections,
      ...input.sections ?? {}
    }
  };
}
async function loadReportConfig(configPath) {
  if (!configPath) return resolveReportConfig();
  const text = await readFile(configPath, "utf8");
  if (!text.trim()) return resolveReportConfig();
  return resolveReportConfig(JSON.parse(text));
}

// src/format.ts
function formatNumber(value) {
  return Number(value).toLocaleString();
}
function formatBytes(bytes) {
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
function formatPercentage(value) {
  return `${value.toFixed(1)}%`;
}
function formatDistributionShare(share) {
  const percent = share * 100;
  if (percent > 0 && percent < 1) return "<1%";
  return `${Math.round(percent)}%`;
}
function formatPeakHour(hourLabel) {
  const hour = Number.parseInt(hourLabel.split(":")[0] ?? "", 10);
  if (!Number.isFinite(hour)) return hourLabel;
  if (hour === 0) return "12AM";
  if (hour === 12) return "12PM";
  return hour < 12 ? `${hour}AM` : `${hour - 12}PM`;
}
var readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC"
});
function formatReadableDate(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "";
  return readableDateFormatter.format(date);
}
function formatIsoDate(isoDate) {
  if (!isoDate) return "";
  const date = /* @__PURE__ */ new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return "";
  const weekday = date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
  return `${weekday} ${readableDateFormatter.format(date)}`;
}

// src/ranked-row.ts
function avgBytesPerRequest(row) {
  return row.requests > 0 ? row.responseBytes / row.requests : 0;
}

// src/report/analyze-groq.ts
import { GroqSyntaxError, parse } from "groq-js";
var GROQ_SPREAD_WARNING = "uses the {...} spread operator and may waste bandwidth by fetching more fields than needed";
function emptyStats() {
  return {
    dereferences: 0,
    projections: 0,
    subqueries: 0,
    spreads: 0,
    arrayTraversals: 0,
    functionCalls: {}
  };
}
function asNode(value) {
  if (!value || typeof value !== "object") return null;
  return value;
}
function functionName(namespace, name) {
  const ns = typeof namespace === "string" ? namespace : "";
  const fn = typeof name === "string" ? name : "unknown";
  return ns ? `${ns}::${fn}` : fn;
}
function walkNode(node, stats, inFuncArg) {
  const current = asNode(node);
  if (!current) return;
  switch (current.type) {
    case "Deref":
      stats.dereferences += 1;
      break;
    case "Projection":
      stats.projections += 1;
      break;
    case "Filter":
      stats.arrayTraversals += 1;
      if (inFuncArg) stats.subqueries += 1;
      break;
    case "ObjectSplat":
    case "ObjectConditionalSplat":
      stats.spreads += 1;
      break;
    case "FuncCall":
      {
        const name = functionName(current.namespace, current.name);
        stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
        const args = current.args;
        if (Array.isArray(args)) {
          for (const arg of args) walkNode(arg, stats, true);
        }
      }
      return;
    case "PipeFuncCall":
      {
        const name = functionName("", current.name);
        stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
        walkNode(current.base, stats, inFuncArg);
        const args = current.args;
        if (Array.isArray(args)) {
          for (const arg of args) walkNode(arg, stats, true);
        }
      }
      return;
    case "SelectorFuncCall":
      {
        const name = functionName("", current.name);
        stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
        walkNode(current.arg, stats, true);
      }
      return;
    default:
      break;
  }
  for (const value of Object.values(current)) {
    if (Array.isArray(value)) {
      for (const child of value) walkNode(child, stats, inFuncArg);
    } else {
      walkNode(value, stats, inFuncArg);
    }
  }
}
function analyzeGroqQuery(query, params) {
  try {
    const ast = parse(query, params ? { params } : {});
    const stats = emptyStats();
    walkNode(ast, stats, false);
    return stats;
  } catch (error) {
    if (error instanceof GroqSyntaxError) return null;
    throw error;
  }
}
function hasGroqSpreadOperator(query, params) {
  const stats = analyzeGroqQuery(query, params);
  return stats !== null && stats.spreads > 0;
}

// src/report/classify-url.ts
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
  ".ico"
]);
var VIDEO_EXTENSIONS = /* @__PURE__ */ new Set([".mp4", ".webm", ".mov", ".m4v", ".ogv"]);
var FILE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".pdf",
  ".zip",
  ".json",
  ".txt",
  ".css",
  ".js",
  ".xml",
  ".csv",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".mp3",
  ".wav",
  ".ogg"
]);
function getPathname(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return null;
  }
}
function getExtension(pathname) {
  const lastDot = pathname.lastIndexOf(".");
  if (lastDot === -1) return "";
  return pathname.slice(lastDot).toLowerCase();
}
function isQueryPath(pathname) {
  return pathname.includes("/data/query") || pathname.endsWith("/query");
}
function isMp4Url(url) {
  const pathname = getPathname(url);
  if (!pathname) return false;
  return getExtension(pathname) === ".mp4";
}
function classifyUrl(url) {
  const pathname = getPathname(url);
  if (!pathname) return null;
  if (isQueryPath(pathname)) return "query";
  const lowerPath = pathname.toLowerCase();
  if (lowerPath.includes("/images/")) return "image";
  const ext = getExtension(pathname);
  if (IMAGE_EXTENSIONS.has(ext)) return "image";
  if (VIDEO_EXTENSIONS.has(ext)) return "video";
  if (lowerPath.includes("/files/") || FILE_EXTENSIONS.has(ext)) return "file";
  return null;
}

// src/report/groq-query.ts
function decodeSearchParam(raw) {
  return decodeURIComponent(raw.replace(/\+/g, " "));
}
function extractGroqQuery(url) {
  try {
    const parsed = new URL(url);
    const raw = parsed.searchParams.get("query");
    if (!raw) return null;
    const trimmed = decodeSearchParam(raw).trim();
    return trimmed.length > 0 ? trimmed : null;
  } catch {
    return null;
  }
}
function extractGroqParams(url) {
  try {
    const parsed = new URL(url);
    const raw = parsed.searchParams.get("params");
    if (!raw) return null;
    const decoded = decodeSearchParam(raw).trim();
    if (!decoded) return null;
    const value = JSON.parse(decoded);
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    return value;
  } catch {
    return null;
  }
}

// src/report/group-urls-by-kind.ts
function groupUrlsByKind(rows) {
  const groups = {
    image: [],
    file: [],
    query: [],
    other: []
  };
  for (const row of rows) {
    const kind = classifyUrl(row.label);
    if (kind === "image") {
      groups.image.push(row);
    } else if (kind === "file" || kind === "video") {
      groups.file.push(row);
    } else if (kind === "query") {
      groups.query.push(row);
    } else {
      groups.other.push(row);
    }
  }
  return groups;
}

// src/report/parse-image-url.ts
function getExtension2(filename) {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) return "";
  return filename.slice(lastDot).toLowerCase();
}
function parsePositiveInt(value) {
  if (value === null) return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}
function parseWidthFromId(filename) {
  const ext = getExtension2(filename);
  const nameWithoutExt = ext ? filename.slice(0, -ext.length) : filename;
  const parts = nameWithoutExt.split("-");
  const lastPart = parts[parts.length - 1] ?? "";
  const dimensionMatch = lastPart.match(/^(\d+)x(\d+)$/);
  if (!dimensionMatch) {
    return { id: nameWithoutExt, width: null };
  }
  return {
    id: parts.slice(0, -1).join("-") || nameWithoutExt,
    width: parsePositiveInt(dimensionMatch[1] ?? null)
  };
}
function parseImageUrl(url) {
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split("/").filter(Boolean);
    const filename = segments.at(-1) ?? url;
    const ext = getExtension2(filename);
    const isSvg = ext === ".svg";
    const { id, width: widthFromId } = parseWidthFromId(filename);
    const width = parsePositiveInt(parsed.searchParams.get("w")) ?? widthFromId;
    const quality = parsePositiveInt(parsed.searchParams.get("q"));
    const format = parsed.searchParams.get("format") ?? parsed.searchParams.get("fm");
    return { id, width, quality, format, isSvg };
  } catch {
    return {
      id: url,
      width: null,
      quality: null,
      format: null,
      isSvg: false
    };
  }
}
function hasImageWidthError(width) {
  return width !== null && width > 2e3;
}
function hasImageQualityError(quality, isSvg) {
  return !isSvg && quality !== null && quality > 87;
}
function hasImageFormatError(format) {
  return format !== null && format !== "auto";
}

// src/report/parse-user-agent.ts
import { UAParser } from "ua-parser-js";
import { isBot } from "ua-parser-js/bot-detection";
var NON_BROWSER_CLIENT = /^@sanity\/client\b|\bsanity\/client\b|^curl\b|^axios\b|node-fetch|^got\/|python-requests|aiohttp|httpx|^Go-http-client|^okhttp\b|^Java\/|^libwww-perl|postmanruntime/i;
var EXPLICIT_MOBILE = /\bMobile\b|iPhone|iPod|Android.+Mobile|Windows Phone/i;
var EXPLICIT_DESKTOP = /Macintosh|Windows NT|Win64|X11; Linux|X11; Ubuntu|CrOS/i;
function normalizeBrowserName(name) {
  if (!name) return void 0;
  return name.replace(/^Mobile\s+/i, "");
}
function normalizeOsName(name) {
  if (!name) return void 0;
  if (name === "Mac OS") return "macOS";
  return name;
}
function classifyOsFamily(osName) {
  if (!osName) return "other";
  if (osName === "macOS") return "mac";
  if (osName === "Windows") return "windows";
  return "other";
}
function isMobileDeviceType(type) {
  return type === "mobile" || type === "tablet" || type === "wearable";
}
function isNonBrowserClient(raw) {
  return NON_BROWSER_CLIENT.test(raw);
}
function resolveDeviceKind(raw, deviceType) {
  if (isMobileDeviceType(deviceType) || EXPLICIT_MOBILE.test(raw)) {
    return "mobile";
  }
  if (EXPLICIT_DESKTOP.test(raw)) {
    return "desktop";
  }
  return null;
}
function fallbackDisplayLabel(raw) {
  if (!raw) return "Unknown";
  if (/@sanity\/client/i.test(raw)) return "@sanity/client";
  if (/^curl\b/i.test(raw)) return "curl";
  if (/postman/i.test(raw)) return "Postman";
  if (/^axios\b/i.test(raw) || /node-fetch/i.test(raw) || /^got\//i.test(raw)) {
    return "HTTP client";
  }
  if (/python-requests|aiohttp|httpx/i.test(raw)) return "Python client";
  if (/^Go-http-client/i.test(raw)) return "Go client";
  if (raw.length > 48) return `${raw.slice(0, 45)}\u2026`;
  return raw;
}
function buildDisplayLabel(osName, browserName, raw) {
  const parts = [osName, browserName].filter(Boolean);
  if (parts.length === 0) return fallbackDisplayLabel(raw);
  return parts.join(" ");
}
function notTrackable(raw) {
  return {
    deviceKind: null,
    osFamily: null,
    isTrackable: false,
    displayLabel: fallbackDisplayLabel(raw),
    raw
  };
}
function parseUserAgent(raw) {
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
    raw
  };
}
function aggregateUserAgentStats(rows) {
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
  const toPct = (count) => trackableRequests > 0 ? count / trackableRequests * 100 : 0;
  return {
    trackableRequests,
    macPct: toPct(macRequests),
    windowsPct: toPct(windowsRequests),
    mobilePct: toPct(mobileRequests),
    desktopPct: toPct(desktopRequests)
  };
}

// src/report/narrative.ts
var CONCENTRATION_SHARE = 0.5;
var REASSURING_5XX_RATE = 1e-3;
var PRIMARY_OPPORTUNITY_LABEL = {
  "image-width": "oversized image delivery",
  "image-format": "image CDN settings",
  "image-quality": "image quality settings",
  "groq-spread": "GROQ query efficiency",
  "mp4-transfer": "video delivery format",
  "status-5xx": "server reliability",
  "status-4xx": "client request errors"
};
function dominantSegment(segments) {
  if (segments.length === 0) return null;
  return segments.reduce(
    (largest, segment) => segment.bytes > largest.bytes ? segment : largest
  );
}
function primaryProblem(problems) {
  if (problems.length === 0) return null;
  return problems.reduce((primary, problem) => {
    const primaryBytes = primary.responseBytes ?? 0;
    const problemBytes = problem.responseBytes ?? 0;
    if (problemBytes !== primaryBytes) {
      return problemBytes > primaryBytes ? problem : primary;
    }
    return (problem.requests ?? 0) > (primary.requests ?? 0) ? problem : primary;
  });
}
function contributorShare(contributorBytes, kindBytes) {
  if (kindBytes <= 0) return 0;
  return contributorBytes / kindBytes;
}
function serverErrorCount(view) {
  return view.byStatus.filter(({ label }) => Number(label) >= 500).reduce((sum, row) => sum + row.count, 0);
}
var INSIGHT_TEMPLATES = [
  {
    kind: "fact",
    when: (ctx) => {
      const dominant = dominantSegment(ctx.summary.distribution.segments);
      return dominant !== null && dominant.share >= CONCENTRATION_SHARE;
    },
    render: (ctx) => {
      const dominant = dominantSegment(ctx.summary.distribution.segments);
      if (!dominant) return "";
      const label = dominant.label.toLowerCase();
      return `Bandwidth is dominated by ${label} (${formatDistributionShare(dominant.share)}).`;
    },
    score: (ctx) => {
      const dominant = dominantSegment(ctx.summary.distribution.segments);
      return dominant ? dominant.share * 100 : 0;
    }
  },
  {
    kind: "fact",
    when: (ctx) => {
      const query = ctx.topContributors.query;
      if (!query) return false;
      return contributorShare(
        query.responseBytes,
        ctx.view.byUrlKind.query.responseBytes
      ) >= CONCENTRATION_SHARE;
    },
    render: () => "Only one query is responsible for most query bandwidth.",
    score: (ctx) => {
      const query = ctx.topContributors.query;
      if (!query) return 0;
      return contributorShare(
        query.responseBytes,
        ctx.view.byUrlKind.query.responseBytes
      ) * 80;
    }
  },
  {
    kind: "fact",
    when: (ctx) => {
      const image = ctx.topContributors.image;
      if (!image) return false;
      return contributorShare(
        image.responseBytes,
        ctx.view.byUrlKind.image.responseBytes
      ) >= CONCENTRATION_SHARE;
    },
    render: () => "A single image accounts for most image bandwidth.",
    score: (ctx) => {
      const image = ctx.topContributors.image;
      if (!image) return 0;
      return contributorShare(
        image.responseBytes,
        ctx.view.byUrlKind.image.responseBytes
      ) * 70;
    }
  },
  {
    kind: "opportunity",
    when: (ctx) => primaryProblem([...ctx.summary.critical, ...ctx.summary.warnings]) !== null,
    render: (ctx) => {
      const primary = primaryProblem([
        ...ctx.summary.critical,
        ...ctx.summary.warnings
      ]);
      if (!primary) return "";
      if (primary.id === "image-width") {
        return "Image dimensions appear to be the primary optimization opportunity.";
      }
      if (primary.id === "groq-spread") {
        return "GROQ query shape appears to be the main bandwidth driver.";
      }
      if (primary.id === "image-format" || primary.id === "image-quality") {
        return "Image CDN settings appear to be the primary optimization opportunity.";
      }
      if (primary.id === "mp4-transfer") {
        return "Video delivery format appears to be the primary optimization opportunity.";
      }
      if (primary.id === "status-5xx") {
        return "Server reliability appears to be the most urgent issue.";
      }
      return "Client request errors appear to need attention.";
    },
    score: (ctx) => {
      const primary = primaryProblem([
        ...ctx.summary.critical,
        ...ctx.summary.warnings
      ]);
      if (!primary) return 0;
      const bytes = primary.responseBytes ?? 0;
      if (ctx.view.responseBytes <= 0) return 50;
      return Math.max(40, bytes / ctx.view.responseBytes * 100);
    }
  },
  {
    kind: "health",
    when: (ctx) => {
      const count = serverErrorCount(ctx.view);
      if (count === 0) return false;
      return count / Math.max(ctx.view.requests, 1) < REASSURING_5XX_RATE;
    },
    render: (ctx) => {
      const count = serverErrorCount(ctx.view);
      return `Server health appears normal with only ${formatNumber(count)} 5xx ${count === 1 ? "response" : "responses"}.`;
    },
    score: () => 55
  },
  {
    kind: "health",
    when: (ctx) => {
      const count = serverErrorCount(ctx.view);
      if (count === 0) return false;
      return count / Math.max(ctx.view.requests, 1) >= REASSURING_5XX_RATE;
    },
    render: () => "Server errors are elevated and likely need investigation.",
    score: () => 90
  },
  {
    kind: "health",
    when: (ctx) => ctx.summary.critical.length === 0 && ctx.summary.warnings.length === 0,
    render: () => "No major optimization targets stand out in this dataset.",
    score: () => 20
  }
];
function renderSynthesis(ctx) {
  const problems = [...ctx.summary.critical, ...ctx.summary.warnings];
  const primary = primaryProblem(problems);
  const health = ctx.summary.overallHealth;
  if (health === "red" && primary?.id === "status-5xx") {
    return "Server reliability should be addressed before bandwidth optimizations.";
  }
  if (problems.length === 0) {
    return "Overall this dataset looks healthy with no significant issues detected.";
  }
  if (primary) {
    const target = PRIMARY_OPPORTUNITY_LABEL[primary.id];
    if (target) {
      if (health === "green") {
        return `Overall this dataset shows a healthy API with ${target} being the primary optimization target.`;
      }
      return `Overall this dataset is generally healthy, with ${target} as the primary optimization target.`;
    }
  }
  return "Overall this dataset has a mix of issues worth reviewing in the sections below.";
}
function buildAtAGlance(view, summary) {
  const ctx = {
    view,
    summary,
    topContributors: summary.topContributors
  };
  const bullets = INSIGHT_TEMPLATES.filter((template) => template.when(ctx)).map((template) => ({
    text: template.render(ctx),
    kind: template.kind,
    score: template.score(ctx)
  })).filter((item) => item.text.length > 0).sort((a, b) => b.score - a.score);
  const selected = [];
  const usedKinds = /* @__PURE__ */ new Set();
  for (const item of bullets) {
    if (selected.length >= 4) break;
    if (item.kind !== "health" && usedKinds.has(item.kind)) continue;
    selected.push({ text: item.text, kind: item.kind });
    usedKinds.add(item.kind);
  }
  const synthesis = renderSynthesis(ctx);
  if (synthesis) {
    selected.push({ text: synthesis, kind: "synthesis" });
  }
  return selected;
}

// src/report/summarize.ts
var KB = 1024;
var MB = KB * 1024;
var CRITICAL_BYTES_THRESHOLD = 100 * MB;
var CRITICAL_REQUESTS_THRESHOLD = 1e3;
var CRITICAL_SHARE_THRESHOLD = 0.25;
var CRITICAL_TOTAL_BYTES_THRESHOLD = 10 * MB;
var CRITICAL_TOTAL_REQUESTS_THRESHOLD = 100;
var CONCENTRATION_SHARE_THRESHOLD = 0.75;
var SPIKE_SHARE_THRESHOLD = 0.7;
var REASONABLE_AVG_IMAGE_BYTES = 400 * KB;
var STUDIO_NEGLIGIBLE_SHARE_THRESHOLD = 0.2;
var DISTRIBUTION_DOMINANCE_THRESHOLD = 0.5;
function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}
function formatCountLabel(count, singular, plural) {
  return `${formatNumber(count)} ${pluralize(count, singular, plural)}`;
}
function sumRows(rows) {
  return rows.reduce(
    (totals, row) => {
      totals.requests += row.requests;
      totals.responseBytes += row.responseBytes;
      return totals;
    },
    { requests: 0, responseBytes: 0 }
  );
}
function isCriticalIssue(issue, view) {
  return issue.responseBytes >= CRITICAL_BYTES_THRESHOLD || issue.requests >= CRITICAL_REQUESTS_THRESHOLD || view.responseBytes >= CRITICAL_TOTAL_BYTES_THRESHOLD && issue.responseBytes / view.responseBytes >= CRITICAL_SHARE_THRESHOLD || view.requests >= CRITICAL_TOTAL_REQUESTS_THRESHOLD && issue.requests / view.requests >= CRITICAL_SHARE_THRESHOLD;
}
function severityForIssue(issue, view) {
  return isCriticalIssue(issue, view) ? "critical" : "warning";
}
function pushProblem(target, problem) {
  target.push(problem);
}
function getImageRows(rows) {
  return groupUrlsByKind(rows).image.map((row) => ({
    row,
    parsed: parseImageUrl(row.label)
  }));
}
function analyzeImages(rows) {
  const imageRows = getImageRows(rows);
  const wideRows = imageRows.filter(
    ({ parsed }) => hasImageWidthError(parsed.width)
  );
  const unsafeFormatRows = imageRows.filter(
    ({ parsed }) => hasImageFormatError(parsed.format)
  );
  const qualityRows = imageRows.filter(
    ({ parsed }) => hasImageQualityError(parsed.quality, parsed.isSvg)
  );
  return {
    imageRows,
    wideRows,
    unsafeFormatRows,
    qualityRows,
    imageTotals: sumRows(imageRows.map(({ row }) => row))
  };
}
function getQuerySpreadRows(rows) {
  return groupUrlsByKind(rows).query.filter((row) => {
    const query = extractGroqQuery(row.label);
    const params = query ? extractGroqParams(row.label) : null;
    return query !== null && hasGroqSpreadOperator(query, params ?? void 0);
  });
}
function getMp4Rows(rows) {
  return groupUrlsByKind(rows).file.filter((row) => isMp4Url(row.label));
}
function dominantRankedRow(rows, metric) {
  const nonZero = rows.filter((row) => row[metric] > 0);
  if (nonZero.length <= 1) return null;
  const total = nonZero.reduce((sum, row) => sum + row[metric], 0);
  if (total <= 0) return null;
  let largest = nonZero[0];
  for (const row of nonZero.slice(1)) {
    if (row[metric] > largest[metric]) largest = row;
  }
  return {
    label: largest.label,
    value: largest[metric],
    total,
    share: largest[metric] / total
  };
}
function dominantCountRow(rows) {
  const nonZero = rows.filter((row) => row.count > 0);
  if (nonZero.length <= 1) return null;
  const total = nonZero.reduce((sum, row) => sum + row.count, 0);
  if (total <= 0) return null;
  let largest = nonZero[0];
  for (const row of nonZero.slice(1)) {
    if (row.count > largest.count) largest = row;
  }
  return {
    label: largest.label,
    count: largest.count,
    total,
    share: largest.count / total
  };
}
function friendlyDomainLabel(domain) {
  const lower = domain.toLowerCase();
  if (lower.includes("cdn.sanity.io") || lower === "cdn") return "CDN";
  if (lower.includes("apicdn") || lower.includes("api.sanity.io")) {
    return "API CDN";
  }
  return domain;
}
function healthFromCounts(critical, warning) {
  if (critical > 0) return "red";
  if (warning > 0) return "yellow";
  return "green";
}
function buildDistribution(view) {
  const segments = [
    { label: "Images", bytes: view.byUrlKind.image.responseBytes, share: 0 },
    { label: "Queries", bytes: view.byUrlKind.query.responseBytes, share: 0 },
    { label: "Files", bytes: view.byUrlKind.file.responseBytes, share: 0 },
    { label: "Other", bytes: view.byUrlKind.other.responseBytes, share: 0 }
  ].filter((segment) => segment.bytes > 0).map((segment) => ({
    ...segment,
    share: view.responseBytes > 0 ? segment.bytes / view.responseBytes : 0
  }));
  return {
    totalBytes: view.responseBytes,
    segments
  };
}
function detectProblems(view, critical, warnings) {
  const querySpreadRows = getQuerySpreadRows(view.byUrl);
  if (querySpreadRows.length > 0) {
    const totals = sumRows(querySpreadRows);
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "groq-spread",
      severity,
      summary: `${formatCountLabel(querySpreadRows.length, "query")} ${querySpreadRows.length === 1 ? "uses" : "use"} {...}`,
      suggestedFix: "Project only needed fields instead of using the {...} spread operator",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  const mp4Rows = getMp4Rows(view.byUrl);
  if (mp4Rows.length > 0) {
    const totals = sumRows(mp4Rows);
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "mp4-transfer",
      severity,
      summary: `${formatCountLabel(mp4Rows.length, "MP4 URL", "MP4 URLs")} served as progressive MP4`,
      suggestedFix: "Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  const images = analyzeImages(view.byUrl);
  if (images.wideRows.length > 0) {
    const totals = sumRows(images.wideRows.map(({ row }) => row));
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "image-width",
      severity,
      summary: `${formatCountLabel(images.wideRows.length, "image")} exceed 2000px`,
      suggestedFix: "Cap CDN width requests at 2000px or below",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  if (images.unsafeFormatRows.length > 0) {
    const totals = sumRows(images.unsafeFormatRows.map(({ row }) => row));
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "image-format",
      severity,
      summary: `${formatCountLabel(images.unsafeFormatRows.length, "image")} missing format=auto`,
      suggestedFix: 'Use auto=format (or fm/format="auto") for CDN image URLs',
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  if (images.qualityRows.length > 0) {
    const totals = sumRows(images.qualityRows.map(({ row }) => row));
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "image-quality",
      severity,
      summary: `${formatCountLabel(images.qualityRows.length, "image")} with quality above 87`,
      suggestedFix: "Keep image quality at 87 or below for raster assets",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  const serverErrorCount2 = view.byStatus.filter(({ label }) => Number(label) >= 500).reduce((sum, row) => sum + row.count, 0);
  const clientErrorCount = view.byStatus.filter(({ label }) => {
    const status = Number(label);
    return status >= 400 && status < 500;
  }).reduce((sum, row) => sum + row.count, 0);
  if (serverErrorCount2 > 0) {
    pushProblem(critical, {
      id: "status-5xx",
      severity: "critical",
      summary: `${formatCountLabel(serverErrorCount2, "server error")}`,
      suggestedFix: "Investigate failing API/CDN handlers returning 5xx",
      requests: serverErrorCount2
    });
  }
  if (clientErrorCount > 0) {
    pushProblem(warnings, {
      id: "status-4xx",
      severity: "warning",
      summary: `${formatCountLabel(clientErrorCount, "client error")}`,
      suggestedFix: "Review missing assets and invalid client requests returning 4xx",
      requests: clientErrorCount
    });
  }
  return {
    querySpreadRows,
    mp4Rows,
    images,
    serverErrorCount: serverErrorCount2,
    clientErrorCount
  };
}
function buildObservations(view) {
  const observations = [];
  const distribution = buildDistribution(view);
  const dominant = distribution.segments.reduce(
    (largest, segment) => {
      if (!largest || segment.bytes > largest.bytes) return segment;
      return largest;
    },
    null
  );
  if (dominant && dominant.share >= DISTRIBUTION_DOMINANCE_THRESHOLD && view.responseBytes > 0) {
    observations.push({
      summary: `${dominant.label} account for ${formatDistributionShare(dominant.share)} of bandwidth`
    });
  }
  const domainDominant = dominantRankedRow(view.byDomain, "responseBytes");
  if (domainDominant && domainDominant.share >= CONCENTRATION_SHARE_THRESHOLD) {
    observations.push({
      summary: `${friendlyDomainLabel(domainDominant.label)} serves ${formatDistributionShare(domainDominant.share)} of traffic`
    });
  }
  const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
  if (hourDominant && hourDominant.share >= SPIKE_SHARE_THRESHOLD) {
    observations.push({
      summary: `Peak hour was ${formatPeakHour(hourDominant.label)}`
    });
  }
  const histogramDominant = dominantCountRow(view.responseSizeHistogram);
  if (histogramDominant && histogramDominant.share >= CONCENTRATION_SHARE_THRESHOLD) {
    observations.push({
      summary: `${formatDistributionShare(histogramDominant.share)} of responses are ${histogramDominant.label}`
    });
  }
  return observations;
}
function buildHealthySignals(view, context) {
  const healthy = [];
  const { querySpreadRows, mp4Rows, images, serverErrorCount: serverErrorCount2, clientErrorCount } = context;
  if (images.imageRows.length > 0 && images.unsafeFormatRows.length === 0) {
    healthy.push({ summary: "All images use auto=format" });
  }
  if (images.imageTotals.requests > 0 && images.imageTotals.responseBytes / images.imageTotals.requests < REASONABLE_AVG_IMAGE_BYTES) {
    healthy.push({ summary: "Average image response size is reasonable" });
  }
  const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
  if (!hourDominant || hourDominant.share < SPIKE_SHARE_THRESHOLD) {
    healthy.push({ summary: "No suspicious bandwidth spikes detected" });
  }
  if (view.includesStudio && view.responseBytes > 0 && view.studio.responseBytes / view.responseBytes < STUDIO_NEGLIGIBLE_SHARE_THRESHOLD) {
    healthy.push({ summary: "Studio traffic is negligible" });
  }
  if (serverErrorCount2 === 0) {
    healthy.push({ summary: "No server errors detected" });
  }
  if (clientErrorCount === 0) {
    healthy.push({ summary: "No client errors detected" });
  }
  if (view.byUrlKind.query.requests > 0 && querySpreadRows.length === 0) {
    healthy.push({ summary: "No GROQ spread queries detected" });
  }
  if (images.imageRows.length > 0 && images.wideRows.length === 0) {
    healthy.push({ summary: "No oversized image widths detected" });
  }
  if (images.imageRows.length > 0 && images.qualityRows.length === 0) {
    healthy.push({ summary: "No high image quality settings detected" });
  }
  if (view.byUrlKind.file.requests > 0 && mp4Rows.length === 0) {
    healthy.push({ summary: "No progressive MP4 downloads detected" });
  }
  return healthy.slice(0, 8);
}
function buildReportSummary(view) {
  const critical = [];
  const warnings = [];
  const detection = detectProblems(view, critical, warnings);
  const distribution = buildDistribution(view);
  const observations = buildObservations(view);
  const healthy = buildHealthySignals(view, detection);
  const partialSummary = {
    overallHealth: healthFromCounts(critical.length, warnings.length),
    critical,
    warnings,
    observations,
    healthy,
    atAGlance: [],
    distribution,
    topContributors: view.topContributors
  };
  return {
    ...partialSummary,
    atAGlance: buildAtAGlance(view, partialSummary)
  };
}
function summaryHeadline(summary) {
  const issueTotal = summary.critical.length + summary.warnings.length;
  if (issueTotal === 0) return "\u2705 No issues detected";
  return `\u{1F6A8} ${formatNumber(issueTotal)} ${pluralize(issueTotal, "issue")} detected`;
}

// src/report/markdown.ts
function escapeMarkdownCell(value) {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}
function slugifyReportFilename(title) {
  const slug = title.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-").replace(/^-+|-+$/g, "");
  return slug || "report";
}
function markdownReportFilename(data, view) {
  const base = slugifyReportFilename(data.title);
  const suffix = view === "billable" ? "_billable-only" : "_all";
  return `${base}${suffix}.md`;
}
var MP4_WARNING = "consider HLS streaming instead of MP4";
function renderBulletGroup(title, items) {
  if (items.length === 0) return "";
  return [
    `### ${title}`,
    "",
    ...items.slice(0, 8).map((item) => `- ${item}`),
    ""
  ].join("\n");
}
function renderDistributionSummary(summary) {
  const lines = [
    "### Distribution",
    "",
    `- Total: ${formatBytes(summary.distribution.totalBytes)}`,
    ...summary.distribution.segments.map(
      (segment) => `- ${segment.label}: ${formatBytes(segment.bytes)}`
    ),
    ""
  ];
  return lines.join("\n");
}
function renderContributorSummary(summary) {
  const items = [];
  const { topContributors } = summary;
  if (topContributors.image) {
    items.push(
      `- Largest image: ${formatBytes(topContributors.image.responseBytes)} (${formatNumber(topContributors.image.requests)} requests)`
    );
  }
  if (topContributors.query) {
    items.push(
      `- Largest query: ${formatBytes(topContributors.query.responseBytes)} (${formatNumber(topContributors.query.requests)} requests)`
    );
  }
  if (topContributors.file) {
    items.push(
      `- Largest file: ${formatBytes(topContributors.file.responseBytes)} (${formatNumber(topContributors.file.requests)} requests)`
    );
  }
  if (topContributors.referer) {
    items.push(
      `- Largest referer: ${formatBytes(topContributors.referer.responseBytes)}`
    );
  }
  if (items.length === 0) return "";
  return ["### Top contributors", "", ...items, ""].join("\n");
}
function buildExecutiveSummary(view) {
  const summary = buildReportSummary(view);
  const atAGlanceBullets = summary.atAGlance.filter((insight) => insight.kind !== "synthesis").map((insight) => insight.text);
  const synthesis = summary.atAGlance.find(
    (insight) => insight.kind === "synthesis"
  );
  return [
    "## Executive Summary",
    "",
    summaryHeadline(summary),
    "",
    renderBulletGroup("At a glance", atAGlanceBullets),
    synthesis ? `${synthesis.text}
` : "",
    renderDistributionSummary(summary),
    renderContributorSummary(summary),
    renderBulletGroup(
      "Critical",
      summary.critical.map((item) => item.summary)
    ),
    renderBulletGroup(
      "Warnings",
      summary.warnings.map((item) => item.summary)
    ),
    renderBulletGroup(
      "Observations",
      summary.observations.map((item) => item.summary)
    ),
    renderBulletGroup(
      "No action needed",
      summary.healthy.map((item) => `\u2713 ${item.summary}`)
    )
  ].filter(Boolean).join("\n");
}
function formatImageMetric(value, issue) {
  if (value === null) return "\u2014";
  const base = String(value);
  return issue ? `${base} (${issue})` : base;
}
function rankedTable(title, rows) {
  if (rows.length === 0) return "";
  const lines = [
    `### ${title}`,
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    lines.push(
      `| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function urlRankedTable(title, rows) {
  if (rows.length === 0) return "";
  const lines = [
    `#### ${title}`,
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    lines.push(
      `| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function imageUrlTable(rows) {
  if (rows.length === 0) return "";
  const lines = [
    "#### Images",
    "",
    "| ID | URL | Width | Quality | Format | Bandwidth | Requests | Avg / req |",
    "| --- | --- | ---: | ---: | --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    const parsed = parseImageUrl(row.label);
    const width = formatImageMetric(
      parsed.width,
      hasImageWidthError(parsed.width) ? "width exceeds 2000px" : void 0
    );
    const quality = formatImageMetric(
      parsed.quality,
      hasImageQualityError(parsed.quality, parsed.isSvg) ? "quality exceeds 87" : void 0
    );
    const format = formatImageMetric(
      parsed.format,
      hasImageFormatError(parsed.format) ? 'format should be "auto"' : void 0
    );
    lines.push(
      `| ${escapeMarkdownCell(parsed.id)} | ${escapeMarkdownCell(row.label)} | ${width} | ${quality} | ${format} | ${formatBytes(row.responseBytes)} | ${formatNumber(row.requests)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function queryUrlTable(rows) {
  if (rows.length === 0) return "";
  const lines = [
    "#### Queries",
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    const query = extractGroqQuery(row.label);
    const params = query ? extractGroqParams(row.label) : null;
    const label = query && hasGroqSpreadOperator(query, params ?? void 0) ? `${row.label} (${GROQ_SPREAD_WARNING})` : row.label;
    lines.push(
      `| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function fileUrlTable(rows) {
  if (rows.length === 0) return "";
  const lines = [
    "#### Files",
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    const label = isMp4Url(row.label) ? `${row.label} (${MP4_WARNING})` : row.label;
    lines.push(
      `| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function urlSectionsMarkdown(rows) {
  const groups = groupUrlsByKind(rows);
  const parts = ["### Top URLs", ""];
  if (groups.image.length > 0) {
    parts.push(imageUrlTable(groups.image));
  }
  if (groups.file.length > 0) {
    parts.push(fileUrlTable(groups.file));
  }
  if (groups.query.length > 0) {
    parts.push(queryUrlTable(groups.query));
  }
  if (groups.other.length > 0) {
    parts.push(urlRankedTable("Other", groups.other));
  }
  return parts.filter(Boolean).join("\n");
}
function userAgentTable(title, rows) {
  if (rows.length === 0) return "";
  const stats = aggregateUserAgentStats(rows);
  const lines = [`### ${title}`, ""];
  if (stats.trackableRequests > 0) {
    lines.push(
      `Mac ${formatPercentage(stats.macPct)} \xB7 Windows ${formatPercentage(stats.windowsPct)} \xB7 Mobile ${formatPercentage(stats.mobilePct)} \xB7 Desktop ${formatPercentage(stats.desktopPct)}`,
      ""
    );
  }
  lines.push(
    "| Device | Label | Requests | Bandwidth | Avg / req |",
    "| --- | --- | ---: | ---: | ---: |"
  );
  for (const row of rows) {
    const parsed = parseUserAgent(row.label);
    const device = parsed.deviceKind === "mobile" ? "Mobile" : parsed.deviceKind === "desktop" ? "Desktop" : "\u2014";
    lines.push(
      `| ${device} | ${escapeMarkdownCell(`${parsed.displayLabel} \u2014 ${parsed.raw}`)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function countTable(title, rows) {
  if (rows.length === 0) return "";
  const lines = [
    `### ${title}`,
    "",
    "| Label | Count |",
    "| --- | ---: |"
  ];
  for (const row of rows) {
    lines.push(`| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.count)} |`);
  }
  lines.push("");
  return lines.join("\n");
}
function renderSummary(view) {
  const period = view.firstTimestamp && view.lastTimestamp ? `${formatReadableDate(view.firstTimestamp)} \u2192 ${formatReadableDate(view.lastTimestamp)}` : "No timestamps found";
  return [
    "## Summary",
    "",
    `- Requests: ${formatNumber(view.requests)}`,
    `- Response bandwidth: ${formatBytes(view.responseBytes)}`,
    `- Request bytes: ${formatBytes(view.requestBytes)}`,
    `- Period: ${period}`,
    `- Studio: ${formatNumber(view.studio.requests)} requests, ${formatBytes(view.studio.responseBytes)} response`,
    `- Billable: ${formatNumber(view.nonStudio.requests)} requests, ${formatBytes(view.nonStudio.responseBytes)} response`,
    ""
  ].join("\n");
}
function renderSections(view, sections) {
  const parts = [];
  if (sections.domain) parts.push(rankedTable("Top domains", view.byDomain));
  if (sections.endpoint) parts.push(rankedTable("Top endpoints", view.byEndpoint));
  if (sections.date) parts.push(rankedTable("Daily bandwidth", view.byDate));
  if (sections.hour) parts.push(rankedTable("Hourly bandwidth", view.byHour));
  if (sections.status) parts.push(countTable("Response codes", view.byStatus));
  if (sections.histogram) {
    parts.push(countTable("Response size buckets", view.responseSizeHistogram));
  }
  if (sections.urls) parts.push(urlSectionsMarkdown(view.byUrl));
  if (sections.referers) parts.push(rankedTable("Top referers", view.byReferer));
  if (sections.userAgents) {
    parts.push(userAgentTable("Top user agents", view.byUserAgent));
  }
  if (sections.ips) parts.push(rankedTable("Top IPs", view.byIp));
  return parts.filter(Boolean).join("\n");
}
function renderReportMarkdown(data, viewKey) {
  const view = viewKey === "billable" ? data.billable : data.all;
  return [
    `# ${data.title}`,
    "",
    `- Source: \`${data.sourcePath}\``,
    `- Generated: ${data.generatedAt}`,
    `- View: ${view.label}`,
    `- Max table rows: ${data.config.topN}`,
    "",
    buildExecutiveSummary(view),
    "",
    renderSummary(view),
    renderSections(view, data.config.sections)
  ].join("\n");
}

// src/index.ts
import { renderReportHtml } from "./report/render.js";

// src/report-data.ts
function topN(map, limit, sortBy = "responseBytes") {
  return Object.entries(map).map(([label, value]) => ({ label, ...value })).sort(
    (a, b) => sortBy === "responseBytes" ? b.responseBytes - a.responseBytes : b.requests - a.requests
  ).slice(0, limit);
}
function sortDateRows(map) {
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b)).map(([isoDate, value]) => ({
    label: formatIsoDate(isoDate),
    ...value
  }));
}
function sortHourRows(map) {
  return Array.from({ length: 24 }, (_, hour) => ({
    label: `${hour.toString().padStart(2, "0")}:00`,
    ...map[hour] ?? { requests: 0, responseBytes: 0 }
  }));
}
function toCountRows(map) {
  return Object.entries(map).map(([label, count]) => ({ label, count })).sort((a, b) => Number(a.label) - Number(b.label));
}
function zeroTotals() {
  return { requests: 0, responseBytes: 0, requestBytes: 0 };
}
function zeroBreakdown() {
  return { requests: 0, responseBytes: 0 };
}
function emptyUrlKindBreakdown() {
  return {
    image: zeroBreakdown(),
    file: zeroBreakdown(),
    query: zeroBreakdown(),
    other: zeroBreakdown()
  };
}
function urlKindTab(url) {
  const kind = classifyUrl(url);
  if (kind === "image") return "image";
  if (kind === "file" || kind === "video") return "file";
  if (kind === "query") return "query";
  return "other";
}
function updateTopContributor(current, label, breakdown) {
  if (!current || breakdown.responseBytes > current.responseBytes) {
    return { label, ...breakdown };
  }
  return current;
}
function computeUrlKindStats(map) {
  const byUrlKind = emptyUrlKindBreakdown();
  let topContributors = {};
  for (const [label, breakdown] of Object.entries(map)) {
    const tab = urlKindTab(label);
    byUrlKind[tab].requests += breakdown.requests;
    byUrlKind[tab].responseBytes += breakdown.responseBytes;
    if (tab !== "other") {
      topContributors = {
        ...topContributors,
        [tab]: updateTopContributor(topContributors[tab], label, breakdown)
      };
    }
  }
  return { byUrlKind, topContributors };
}
function topReferer(map) {
  let top;
  for (const [label, breakdown] of Object.entries(map)) {
    top = updateTopContributor(top, label, breakdown);
  }
  return top;
}
function viewFromSummary(label, summary, prefix, topLimit) {
  const responseHistogram = Object.entries(summary.responseSizeHistogram).map(
    ([bucketLabel, count]) => ({ label: bucketLabel, count })
  );
  const responseHistogramNonStudio = Object.entries(
    summary.responseSizeHistogramNonStudio
  ).map(([bucketLabel, count]) => ({ label: bucketLabel, count }));
  const urlMap = prefix ? summary.byUrlNonStudio : summary.byUrl;
  const refererMap = prefix ? summary.byRefererNonStudio : summary.byReferer;
  const { byUrlKind, topContributors: urlTops } = computeUrlKindStats(urlMap);
  const refererTop = topReferer(refererMap);
  const byDomain = prefix ? topN(summary.byDomainNonStudio, topLimit) : topN(summary.byDomain, topLimit);
  const byEndpoint = prefix ? topN(summary.byEndpointNonStudio, topLimit) : topN(summary.byEndpoint, topLimit);
  const byDate = prefix ? sortDateRows(summary.byDateNonStudio) : sortDateRows(summary.byDate);
  const byHour = prefix ? sortHourRows(summary.byHourNonStudio) : sortHourRows(summary.byHour);
  const byUrl = topN(urlMap, topLimit);
  const byReferer = topN(refererMap, topLimit);
  const byUserAgent = prefix ? topN(summary.byUserAgentNonStudio, topLimit) : topN(summary.byUserAgent, topLimit);
  const byIp = prefix ? topN(summary.byIpNonStudio, topLimit) : topN(summary.byIp, topLimit);
  const byStatus = prefix ? toCountRows(summary.byStatusNonStudio) : toCountRows(summary.byStatus);
  return {
    label,
    requests: prefix ? summary.nonStudio.requests : summary.totalRequests,
    responseBytes: prefix ? summary.nonStudio.responseBytes : summary.totalResponseBytes,
    requestBytes: prefix ? summary.nonStudio.requestBytes : summary.totalRequestBytes,
    firstTimestamp: summary.firstTimestamp,
    lastTimestamp: summary.lastTimestamp,
    studio: prefix ? zeroTotals() : summary.studio,
    nonStudio: summary.nonStudio,
    byDomain,
    byEndpoint,
    byDate,
    byHour,
    byUrl,
    byReferer,
    byUserAgent,
    byIp,
    byStatus,
    responseSizeHistogram: prefix ? responseHistogramNonStudio : responseHistogram,
    byUrlKind,
    topContributors: {
      ...urlTops,
      referer: refererTop
    },
    includesStudio: !prefix
  };
}
function buildReportData(summary, config, sourcePath) {
  return {
    title: config.title,
    sourcePath,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    config,
    all: viewFromSummary("All requests", summary, "", config.topN),
    billable: viewFromSummary("Billable requests", summary, "NonStudio", config.topN)
  };
}

// src/index.ts
async function analyzeLog(inputPath, options = {}) {
  const config = resolveReportConfig(options.config);
  const summary = await aggregateLogFile(
    inputPath,
    config.histogramBuckets,
    options.onProgress
  );
  return buildReportData(summary, config, inputPath);
}
async function writeHtmlReport(report, outputPath) {
  const html = renderReportHtml(report);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}
function generateMarkdown(report, options) {
  return renderReportMarkdown(report, options?.view ?? "billable");
}
async function writeMarkdownReport(report, outputPath, options) {
  const markdown = generateMarkdown(report, options);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, markdown);
}
export {
  DEFAULT_REPORT_CONFIG,
  analyzeLog,
  generateMarkdown,
  loadReportConfig,
  markdownReportFilename,
  resolveReportConfig,
  writeHtmlReport,
  writeMarkdownReport
};

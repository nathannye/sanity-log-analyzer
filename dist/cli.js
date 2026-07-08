#!/usr/bin/env node

// src/cli.ts
import { resolve } from "path";
import open from "open";

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
var readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC"
});
function formatIsoDate(isoDate) {
  if (!isoDate) return "";
  const date = /* @__PURE__ */ new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return "";
  const weekday = date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
  return `${weekday} ${readableDateFormatter.format(date)}`;
}

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

// src/report/analyze-groq.ts
import { GroqSyntaxError, parse } from "groq-js";

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

// src/report/parse-user-agent.ts
import { UAParser } from "ua-parser-js";
import { isBot } from "ua-parser-js/bot-detection";

// src/report/summarize.ts
var KB = 1024;
var MB = KB * 1024;
var CRITICAL_BYTES_THRESHOLD = 100 * MB;
var CRITICAL_TOTAL_BYTES_THRESHOLD = 10 * MB;
var REASONABLE_AVG_IMAGE_BYTES = 400 * KB;

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

// src/progress-line.ts
var SPINNER_FRAMES = ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
var SPINNER_INTERVAL_MS = 80;
var progressLineActive = false;
var spinnerInterval;
var spinnerFrameIndex = 0;
var spinnerMessage = "";
function getSpinnerFrame(index) {
  return SPINNER_FRAMES[index % SPINNER_FRAMES.length];
}
function prefixProgressLine(frame, message) {
  return `${frame} ${message}`;
}
function clearSpinnerInterval() {
  if (spinnerInterval !== void 0) {
    clearInterval(spinnerInterval);
    spinnerInterval = void 0;
  }
}
function renderSpinnerLine() {
  if (!process.stdout.isTTY) return;
  const frame = getSpinnerFrame(spinnerFrameIndex);
  process.stdout.write(`\x1B[2K\r${prefixProgressLine(frame, spinnerMessage)}`);
  progressLineActive = true;
  spinnerFrameIndex += 1;
}
function startProgressSpinner(initialMessage) {
  if (!process.stdout.isTTY) return;
  clearSpinnerInterval();
  spinnerMessage = initialMessage;
  spinnerFrameIndex = 0;
  renderSpinnerLine();
  spinnerInterval = setInterval(renderSpinnerLine, SPINNER_INTERVAL_MS);
}
function setProgressMessage(message) {
  if (!process.stdout.isTTY) return;
  spinnerMessage = message;
}
function finishProgressLine() {
  clearSpinnerInterval();
  if (!progressLineActive) return;
  process.stdout.write("\n");
  progressLineActive = false;
  spinnerMessage = "";
  spinnerFrameIndex = 0;
}
function formatProgressMessage(bytesRead, totalBytes, percent, entriesProcessed, formatBytes2, formatPercentage2) {
  return `Processed ${formatBytes2(bytesRead)} / ${formatBytes2(totalBytes)} (${formatPercentage2(percent)}) \u2014 ${entriesProcessed.toLocaleString()} entries`;
}

// src/cli.ts
function printHelp() {
  console.log(`Usage:
  sanity-log-analyzer <input.ndjson|.ndjson.gz> <output.html> [--config config.json]

Options:
  --config    Load a JSON config file
  --open      Open the generated report in your default browser
  --help      Show this message
`);
}
function parseArgs(argv) {
  const positional = [];
  let configPath;
  let openReport = false;
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
    if (arg === "--config") {
      configPath = argv[++i];
      continue;
    }
    if (arg === "--open") {
      openReport = true;
      continue;
    }
    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }
    positional.push(arg);
  }
  if (positional.length < 2) {
    printHelp();
    throw new Error(
      "Expected positional arguments: <input.ndjson|.ndjson.gz> <output.html>"
    );
  }
  return {
    inputPath: positional[0],
    outputPath: positional[1],
    configPath,
    open: openReport
  };
}
async function main() {
  const options = parseArgs(process.argv.slice(2));
  const config = await loadReportConfig(options.configPath);
  startProgressSpinner(`Reading ${options.inputPath}...`);
  const start = Date.now();
  const report = await analyzeLog(options.inputPath, {
    config,
    onProgress: (progress) => {
      setProgressMessage(
        formatProgressMessage(
          progress.bytesRead,
          progress.totalBytes,
          progress.percent,
          progress.entriesProcessed,
          formatBytes,
          formatPercentage
        )
      );
    }
  });
  finishProgressLine();
  await writeHtmlReport(report, options.outputPath);
  console.log(
    `Wrote ${options.outputPath} in ${((Date.now() - start) / 1e3).toFixed(1)}s (${report.all.requests.toLocaleString()} requests).`
  );
  if (options.open) {
    await open(resolve(options.outputPath));
  }
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});

import { streamLogEntries } from "./stream.js";
function createBreakdown() {
    return { requests: 0, responseBytes: 0 };
}
function createTotals() {
    return { requests: 0, responseBytes: 0, requestBytes: 0 };
}
export function formatBucketLabel(lower, upper) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    const format = (value) => {
        if (value === Infinity)
            return "∞";
        let scaled = value;
        let unitIndex = 0;
        while (scaled >= 1024 && unitIndex < units.length - 1) {
            scaled /= 1024;
            unitIndex += 1;
        }
        return unitIndex === 0
            ? `${Math.round(scaled)} ${units[unitIndex]}`
            : `${scaled.toFixed(0)} ${units[unitIndex]}`;
    };
    if (upper === Infinity)
        return `${format(lower)}+`;
    return `${format(lower)} - ${format(upper)}`;
}
export function createSummary(histogramBuckets) {
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
        byIpNonStudio: {},
    };
}
function incrementBreakdown(map, key, responseBytes) {
    const normalized = key || "(empty)";
    if (!map[normalized])
        map[normalized] = createBreakdown();
    map[normalized].requests += 1;
    map[normalized].responseBytes += responseBytes;
}
function incrementHourBreakdown(map, hour, responseBytes) {
    if (!map[hour])
        map[hour] = createBreakdown();
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
        if (responseBytes < histogramBuckets[i + 1])
            return i;
    }
    return Math.max(0, histogramBuckets.length - 2);
}
function createHistogramTracker(bucketCount) {
    return {
        counts: new Array(bucketCount).fill(0),
        nonStudioCounts: new Array(bucketCount).fill(0),
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
        if (!summary.firstTimestamp)
            summary.firstTimestamp = entry.timestamp;
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
    }
    else {
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
export async function aggregateLogFile(inputPath, histogramBuckets, onProgress) {
    const summary = createSummary(histogramBuckets);
    const labels = bucketLabelsFor(histogramBuckets);
    const histogram = createHistogramTracker(labels.length);
    for await (const entry of streamLogEntries(inputPath, onProgress)) {
        accumulateEntry(summary, entry, histogramBuckets, histogram);
    }
    summary.responseSizeHistogram = histogramToRecord(labels, histogram.counts);
    summary.responseSizeHistogramNonStudio = histogramToRecord(labels, histogram.nonStudioCounts);
    return summary;
}
//# sourceMappingURL=aggregate.js.map
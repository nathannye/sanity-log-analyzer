import type { ReportData } from "./types.js";

const QUERY_URL =
	"https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7Btitle%7D";

export const SAMPLE_REPORT: ReportData = {
	title: "Sanity Log Report",
	sourcePath: "sample.ndjson",
	generatedAt: "2026-07-07T00:00:00.000Z",
	config: {
		title: "Sanity Log Report",
		topN: 50,
		histogramBuckets: [0, 1024, Infinity],
		palette: [
			"#0ea5e9",
			"#22c55e",
			"#f59e0b",
			"#ef4444",
			"#a855f7",
			"#14b8a6",
			"#f97316",
		],
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
			billableComparison: true,
		},
	},
	all: {
		label: "All requests",
		requests: 5,
		responseBytes: 775,
		requestBytes: 350,
		firstTimestamp: "2026-06-14T00:00:00.000Z",
		lastTimestamp: "2026-06-14T01:00:00.000Z",
		studio: { requests: 1, responseBytes: 75, requestBytes: 50 },
		nonStudio: { requests: 4, responseBytes: 700, requestBytes: 300 },
		byDomain: [{ label: "api", requests: 5, responseBytes: 775 }],
		byEndpoint: [
			{ label: "listen", requests: 1, responseBytes: 200 },
			{ label: "query", requests: 1, responseBytes: 75 },
		],
		byDate: [{ label: "Jun 14, 2026", requests: 5, responseBytes: 775 }],
		byHour: [
			{ label: "00:00", requests: 4, responseBytes: 700 },
			{ label: "01:00", requests: 1, responseBytes: 75 },
		],
		byUrl: [
			{
				label: "https://cdn.sanity.io/images/project/dataset/photo-400x300.jpg",
				requests: 1,
				responseBytes: 200,
			},
			{
				label: "https://cdn.sanity.io/files/project/dataset/brochure.pdf",
				requests: 1,
				responseBytes: 150,
			},
			{ label: QUERY_URL, requests: 1, responseBytes: 75 },
			{ label: "https://example.com/about", requests: 1, responseBytes: 200 },
			{
				label: "https://cdn.sanity.io/files/project/dataset/clip.mp4",
				requests: 1,
				responseBytes: 150,
			},
		],
		byReferer: [{ label: "(empty)", requests: 5, responseBytes: 775 }],
		byUserAgent: [
			{
				label:
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
				requests: 3,
				responseBytes: 600,
			},
			{
				label:
					"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
				requests: 1,
				responseBytes: 75,
			},
			{ label: "curl/8.4.0", requests: 1, responseBytes: 100 },
		],
		byIp: [
			{ label: "127.0.0.1", requests: 4, responseBytes: 700 },
			{ label: "127.0.0.2", requests: 1, responseBytes: 75 },
		],
		byStatus: [
			{ label: "200", count: 4 },
			{ label: "404", count: 1 },
		],
		responseSizeHistogram: [{ label: "0 B - 1 KB", count: 5 }],
	},
	billable: {
		label: "Billable requests",
		requests: 4,
		responseBytes: 700,
		requestBytes: 300,
		firstTimestamp: "2026-06-14T00:00:00.000Z",
		lastTimestamp: "2026-06-14T00:00:00.000Z",
		studio: { requests: 0, responseBytes: 0, requestBytes: 0 },
		nonStudio: { requests: 4, responseBytes: 700, requestBytes: 300 },
		byDomain: [{ label: "api", requests: 4, responseBytes: 700 }],
		byEndpoint: [{ label: "listen", requests: 4, responseBytes: 700 }],
		byDate: [{ label: "Jun 14, 2026", requests: 4, responseBytes: 700 }],
		byHour: [{ label: "00:00", requests: 4, responseBytes: 700 }],
		byUrl: [
			{
				label: "https://cdn.sanity.io/images/project/dataset/photo-400x300.jpg",
				requests: 1,
				responseBytes: 200,
			},
			{
				label: "https://cdn.sanity.io/files/project/dataset/brochure.pdf",
				requests: 1,
				responseBytes: 150,
			},
			{ label: "https://example.com/about", requests: 1, responseBytes: 200 },
			{
				label: "https://cdn.sanity.io/files/project/dataset/clip.mp4",
				requests: 1,
				responseBytes: 150,
			},
		],
		byReferer: [{ label: "(empty)", requests: 4, responseBytes: 700 }],
		byUserAgent: [
			{
				label:
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
				requests: 3,
				responseBytes: 600,
			},
			{ label: "curl/8.4.0", requests: 1, responseBytes: 100 },
		],
		byIp: [{ label: "127.0.0.1", requests: 4, responseBytes: 700 }],
		byStatus: [{ label: "200", count: 4 }],
		responseSizeHistogram: [{ label: "0 B - 1 KB", count: 4 }],
	},
};

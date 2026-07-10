import type { ReportData } from "./types.js";
import { enrichReportData } from "./report/enrich-report.js";

const QUERY_URL =
	"https://abc.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7Btitle%7D";

export const SAMPLE_REPORT: ReportData = enrichReportData({
	title: "Sanity Request Log Report",
	sourcePath: "sample.ndjson",
	generatedAt: "2026-07-07T00:00:00.000Z",
	projectId: "project",
	dateStart: "2026-06-14T00:00:00.000Z",
	dateEnd: "2026-06-14T01:00:00.000Z",
	config: {
		title: "Sanity Request Log Report",
		topN: 50,
		sections: {
			images: true,
			files: true,
			queries: true,
			responseStatuses: true,
			hourlyBandwidth: true,
			dailyBandwidth: true,
			referrers: true,
			userAgents: true,
			ips: true,
		},
	},
	summary: {
		bandwidth: 1435,
		requestCount: 9,
		studioRequestPercent: (1 / 9) * 100,
		cdnDeliveryPercent: (8 / 9) * 100,
		studioBandwidth: 75,
		cdnBandwidth: 1360,
	},
	images: {
		entries: [
			{
				label: "https://cdn.sanity.io/images/project/dataset/photo-400x300.jpg",
				requests: 1,
				responseBytes: 200,
			},
			{
				label: "https://cdn.sanity.io/images/project/dataset/hero.jpg?w=2400",
				requests: 2,
				responseBytes: 400,
			},
			{
				label: "https://cdn.sanity.io/images/project/dataset/banner.jpg?q=90",
				requests: 1,
				responseBytes: 180,
			},
			{
				label:
					"https://cdn.sanity.io/images/project/dataset/thumb.jpg?format=webp",
				requests: 1,
				responseBytes: 80,
			},
		],
	},
	files: {
		entries: [
			{
				label: "https://cdn.sanity.io/files/project/dataset/brochure.pdf",
				requests: 1,
				responseBytes: 150,
			},
			{
				label: "https://cdn.sanity.io/files/project/dataset/clip.mp4",
				requests: 1,
				responseBytes: 150,
			},
		],
	},
	queries: {
		entries: [{ label: QUERY_URL, requests: 1, responseBytes: 75 }],
	},
	responseStatuses: {
		entries: [
			{ label: "200", count: 8 },
			{ label: "404", count: 1 },
		],
	},
	hourlyBandwidth: {
		entries: [
			{ label: "00:00", requests: 8, responseBytes: 1360 },
			{ label: "01:00", requests: 1, responseBytes: 75 },
		],
		issues: [],
	},
	dailyBandwidth: {
		entries: [
			{ label: "Sun Jun 14, 2026", requests: 9, responseBytes: 1435 },
		],
		issues: [],
	},
	referrers: {
		entries: [{ label: "(empty)", requests: 9, responseBytes: 1435 }],
	},
	ips: {
		entries: [
			{ label: "127.0.0.1", requests: 8, responseBytes: 1360 },
			{ label: "127.0.0.2", requests: 1, responseBytes: 75 },
		],
	},
	userAgents: {
		entries: [
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
	},
});

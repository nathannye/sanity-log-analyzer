import { formatBytes, formatDistributionShare } from "../../format.js";
import type { DistributionSegment } from "../summarize.js";
import { CardMetric } from "./CardMetric.js";

interface DistributionCardProps {
	totalBytes: number;
	segments: DistributionSegment[];
}

export function DistributionCard({ totalBytes, segments }: DistributionCardProps) {
	return (
		<CardMetric className="grid content-between gap-12">
			<div class="eyebrow-1 text-muted">Distribution</div>
			<div class="display-1 text-text">{formatBytes(totalBytes)}</div>
			<div class="body-2 grid gap-4 text-muted">
				{segments.map((segment) => (
					<div key={segment.label}>
						{formatDistributionShare(segment.share)} {segment.label}
					</div>
				))}
			</div>
		</CardMetric>
	);
}

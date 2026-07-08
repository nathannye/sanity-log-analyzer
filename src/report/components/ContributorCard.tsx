import { formatBytes, formatNumber } from "../../format.js";
import type { TopContributor } from "../../types.js";
import { parseImageUrl } from "../parse-image-url.js";

interface ContributorCardProps {
	title: string;
	contributor: TopContributor;
	labelKind?: "image" | "default";
	showRequests?: boolean;
}

function contributorLabel(
	contributor: TopContributor,
	labelKind: ContributorCardProps["labelKind"],
): string {
	if (labelKind === "image") {
		return parseImageUrl(contributor.label).id;
	}
	return contributor.label;
}

export function ContributorCard({
	title,
	contributor,
	labelKind = "default",
	showRequests = true,
}: ContributorCardProps) {
	const label = contributorLabel(contributor, labelKind);

	return (
		<article class="card card-metric grid min-w-0 content-between gap-8">
			<div class="eyebrow-1 text-muted">{title}</div>
			<div class="body-1 truncate text-text" title={contributor.label}>
				{label}
			</div>
			<div class="display-1 text-text">{formatBytes(contributor.responseBytes)}</div>
			{showRequests ? (
				<div class="body-2 text-muted">
					{formatNumber(contributor.requests)} requests
				</div>
			) : null}
		</article>
	);
}

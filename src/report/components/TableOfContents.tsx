import type { ComponentChildren } from "preact";
import type { ReportData, ReportIssue } from "../../types.js";
import { getVisibleTocSections, type TocSection } from "../sections.js";
import { Button } from "./Button.js";
import {
	CalendarIcon,
	CodeIcon,
	DownloadIcon,
	FileIcon,
	HourglassIcon,
	ImageIcon,
	IpIcon,
	QueryIcon,
	ReferrerIcon,
	StateErrorIcon,
	StateWarningIcon,
	SummaryIcon,
	UserAgentIcon,
} from "./icons.js";
import cx from "classix";

interface TableOfContentsProps {
	data: ReportData;
}

interface IssueCounts {
	warn: number;
	critical: number;
}

const SECTION_ICONS: Record<string, ComponentChildren> = {
	summary: <SummaryIcon />,
	dailyBandwidth: <CalendarIcon />,
	hourlyBandwidth: <HourglassIcon />,
	responseStatuses: <CodeIcon />,
	images: <ImageIcon />,
	files: <FileIcon />,
	queries: <QueryIcon />,
	"traffic/referrers": <ReferrerIcon />,
	"traffic/ips": <IpIcon />,
	"traffic/userAgents": <UserAgentIcon />,
};

function countFailingIssues(issues: ReportIssue[]): IssueCounts {
	let warn = 0;
	let critical = 0;
	for (const issue of issues) {
		if (issue.severity === "warn") warn += 1;
		else if (issue.severity === "critical") critical += 1;
	}
	return { warn, critical };
}

function buildSectionIssueCounts(data: ReportData): Record<string, IssueCounts> {
	return {
		dailyBandwidth: countFailingIssues(data.dailyBandwidth.issues),
		hourlyBandwidth: countFailingIssues(data.hourlyBandwidth.issues),
		responseStatuses: countFailingIssues(data.responseStatuses.issues),
		images: countFailingIssues(data.images.issues),
		files: countFailingIssues(data.files.issues),
		queries: countFailingIssues(data.queries.issues),
	};
}

function IssueBadges({ counts }: { counts?: IssueCounts }) {
	if (!counts || (counts.warn === 0 && counts.critical === 0)) return null;

	return (
		<span class="mt-2 inline-flex items-center gap-6">
			{counts.critical > 0 ? (
				<span class="inline-flex [&_svg]:size-13" title={`${counts.critical} critical`}>
					<StateErrorIcon />
				</span>
			) : null}
			{counts.warn > 0 ? (
				<span class="inline-flex [&_svg]:size-13" title={`${counts.warn} warning`}>
					<StateWarningIcon />
				</span>
			) : null}
		</span>
	);
}

function TocLink({
	entry,
	className,
	counts,
}: {
	entry: TocSection;
	className: string;
	counts?: IssueCounts;
}) {
	const icon = SECTION_ICONS[entry.slug];

	return (
		<a class={cx(className, "flex select-none items-center gap-10")} href={`#${entry.slug}`} data-toc-link>
			{icon ? (
				<div class="inline-flex size-15 shrink-0 [&_svg]:size-15 text-muted" aria-hidden="true">
					{icon}
				</div>
			) : null}
			<span class="min-w-0 truncate">{entry.label}</span>
			<IssueBadges counts={counts} />
		</a>
	);
}

function TocChildren({
	items,
	issueCounts,
}: {
	items: TocSection[];
	issueCounts: Record<string, IssueCounts>;
}) {
	return (
		<ul class="mt-2 mb-4 grid list-none gap-2 py-0 pr-0 pl-12">
			{items.map((child) => (
				<li key={child.slug}>
					<TocLink
						entry={child}
						counts={issueCounts[child.slug]}
						className="body-2 rounded-sm px-8 py-3 text-muted no-underline transition-colors hover:bg-primary/6 hover:text-primary"
					/>
				</li>
			))}
		</ul>
	);
}

export function TableOfContents({ data }: TableOfContentsProps) {
	const tocSections = getVisibleTocSections(data.config.sections);
	const issueCounts = buildSectionIssueCounts(data);

	return (
		<>
		<div class="w-grid-3-w pr-30 pl-margin-1 shrink-0 h-screen"></div>
		<aside class="pr-30 pl-margin-1 top-0 pt-80 w-grid-3 fixed">
			<nav
				aria-label="Report sections"
				data-module="theme-toggle"
				class="bg-muted/3 p-17 rounded-md flex flex-col justify-between"
			>
				<ul class="m-0 grid list-none gap-20 p-0">
					{tocSections.map((entry) => (
						<li key={entry.slug}>
							{entry.collapsible && entry.children && entry.children.length > 0 ? (
								<details open class="group">
									<summary class="eyebrow-1 flex select-none cursor-pointer list-none items-center gap-8 rounded-sm px-8 py-6 text-primary transition-colors hover:bg-primary/6 [&::-webkit-details-marker]:hidden">
										<span
											class="inline-flex shrink-0 text-muted transition-transform group-open:rotate-90"
											aria-hidden="true"
										>
											<svg
												width="8"
												height="8"
												viewBox="0 0 8 8"
												fill="none"
											>
												<path
													d="M3 1.5 5.5 4 3 6.5"
													stroke="currentColor"
													stroke-width="1.25"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</span>
										<span class="min-w-0 truncate">{entry.label}</span>
									</summary>
									<TocChildren
										items={entry.children}
										issueCounts={issueCounts}
									/>
								</details>
							) : (
								<>
									<TocLink
										entry={entry}
										counts={issueCounts[entry.slug]}
										className="body-2 rounded-sm px-8 py-6 text-primary no-underline transition-colors hover:bg-primary/6"
									/>
									{entry.children && entry.children.length > 0 ? (
										<TocChildren
											items={entry.children}
											issueCounts={issueCounts}
										/>
									) : null}
								</>
							)}
						</li>
					))}
				</ul>
				<div class="pt-120">
					<Button id="download-markdown" icon={<DownloadIcon />}>
						Download markdown for LLM
					</Button>
				</div>
			</nav>
		</aside>
		</>
	);
}

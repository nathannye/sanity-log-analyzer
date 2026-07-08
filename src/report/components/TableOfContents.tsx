import { getVisibleTocSections } from "../sections.js";
import type { RankedRow, ReportSections } from "../../types.js";

interface TableOfContentsProps {
	sections: ReportSections;
	urlRows?: RankedRow[];
}

export function TableOfContents({ sections, urlRows }: TableOfContentsProps) {
	const tocSections = getVisibleTocSections(sections, urlRows);

	return (
		<nav
			class="card top-20 self-start lg:sticky"
			aria-label="Report sections"
		>
			<div class="eyebrow-1 mb-12 text-muted">Contents</div>
			<ul class="m-0 grid list-none gap-4 p-0">
				{tocSections.map((entry) => (
					<li key={entry.slug}>
						<a
							class="body-2 block rounded-sm px-8 py-6 text-text no-underline transition-colors hover:bg-white/6"
							href={`#${entry.slug}`}
							data-toc-link
						>
							{entry.label}
						</a>
						{entry.children && entry.children.length > 0 ? (
							<ul class="mt-2 mb-4 grid list-none gap-2 py-0 pr-0 pl-12">
								{entry.children.map((child) => (
									<li key={child.slug}>
										<a
											class="eyebrow-1 block rounded-sm px-8 py-4 text-muted no-underline transition-colors hover:bg-white/6 hover:text-text"
											href={`#${child.slug}`}
											data-toc-link
										>
											{child.label}
										</a>
									</li>
								))}
							</ul>
						) : null}
					</li>
				))}
			</ul>
		</nav>
	);
}

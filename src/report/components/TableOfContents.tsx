import { getVisibleTocSections } from "../sections.js";
import type { ReportSections } from "../../types.js";
import { Button } from "./Button.js";
import { DownloadIcon, MoonIcon, SunIcon } from "./icons.js";
import { MarkdownDownload } from "./MarkdownDownload.js";

interface TableOfContentsProps {
	sections: ReportSections;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
	const tocSections = getVisibleTocSections(sections);

	return (
		<aside class="h-screen pr-30 shrink-0 top-0 pt-80 self-start lg:sticky">
			<nav
				aria-label="Report sections"
				data-module="theme-toggle"
				class="card flex flex-col justify-between"
			>
				<div class="mb-12 flex items-center  justify-between gap-8">
					<div class="eyebrow-1 text-muted">Contents</div>

				</div>
				<ul class="m-0 grid list-none gap-4 p-0">
					{tocSections.map((entry) => (
						<li key={entry.slug}>
							<a
								class="body-2 block rounded-sm px-8 py-6 text-primary no-underline transition-colors hover:bg-primary/6"
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
												class="eyebrow-1 block rounded-sm px-8 py-4 text-muted no-underline transition-colors hover:bg-primary/6 hover:text-primary"
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
				<div class="pt-120">
					<Button id="download-markdown" icon={<DownloadIcon />}>
						Download markdown for LLM
					</Button>
				</div>
			</nav>
		</aside>
	);
}

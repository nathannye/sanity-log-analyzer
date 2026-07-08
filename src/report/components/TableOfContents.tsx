import { getVisibleTocSections } from "../sections.js";
import type { RankedRow, ReportSections } from "../../types.js";
import styles from "./TableOfContents.module.css";

interface TableOfContentsProps {
	sections: ReportSections;
	urlRows?: RankedRow[];
}

export function TableOfContents({ sections, urlRows }: TableOfContentsProps) {
	const tocSections = getVisibleTocSections(sections, urlRows);

	return (
		<nav class={styles.toc} aria-label="Report sections">
			<div class={`eyebrow-1 ${styles.heading}`}>Contents</div>
			<ul class={styles.list}>
				{tocSections.map((entry) => (
					<li key={entry.slug}>
						<a class={styles.link} href={`#${entry.slug}`} data-toc-link>
							{entry.label}
						</a>
						{entry.children && entry.children.length > 0 ? (
							<ul class={styles.subList}>
								{entry.children.map((child) => (
									<li key={child.slug}>
										<a
											class={styles.subLink}
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

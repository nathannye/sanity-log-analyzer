import { getVisibleTocSections } from "../sections.js";
import type { ReportSections } from "../../types.js";
import styles from "./TableOfContents.module.css";

interface TableOfContentsProps {
	sections: ReportSections;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
	const tocSections = getVisibleTocSections(sections);

	return (
		<nav class={styles.toc} aria-label="Report sections">
			<div class={`eyebrow-1 ${styles.heading}`}>Contents</div>
			<ul class={styles.list}>
				{tocSections.map((entry) => (
					<li key={entry.slug}>
						<a class={styles.link} href={`#${entry.slug}`} data-toc-link>
							{entry.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

import styles from "./DataTable.module.css";
import { SortIcon } from "./icons.js";

export type SortColumnType = "string" | "number";

interface SortableTableHeaderProps {
	label: string;
	sortKey: string;
	sortType: SortColumnType;
	className?: string;
}

export function SortableTableHeader({
	label,
	sortKey,
	sortType,
	className,
}: SortableTableHeaderProps) {
	return (
		<th class={className}>
			<button
				type="button"
				class={styles.sortHeader}
				data-sort-key={sortKey}
				data-sort-type={sortType}
				data-sort-direction="none"
				aria-sort="none"
			>
				<span class={styles.sortHeaderLabel}>{label}</span>
				<span class={styles.sortIcon}>
					<SortIcon />
				</span>
			</button>
		</th>
	);
}

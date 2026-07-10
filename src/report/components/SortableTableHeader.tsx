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
				class="sort-header uppercase cursor-pointer eyebrow-1"
				data-sort-key={sortKey}
				data-sort-type={sortType}
				data-sort-direction="none"
				aria-sort="none"
			>
				<span>{label}</span>
				<span class="sort-icon">
					<SortIcon />
				</span>
			</button>
		</th>
	);
}

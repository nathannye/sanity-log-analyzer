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
				class="sort-header"
				data-sort-key={sortKey}
				data-sort-type={sortType}
				data-sort-direction="none"
				aria-sort="none"
			>
				<span class="leading-[1.2]">{label}</span>
				<span class="sort-icon">
					<SortIcon />
				</span>
			</button>
		</th>
	);
}

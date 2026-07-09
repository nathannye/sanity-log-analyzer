import type { ReportModuleInit } from "./module.js";

type SortDirection = "none" | "asc" | "desc";

function parseSortValue(raw: string, type: "string" | "number"): string | number | null {
	if (raw === "") return null;
	if (type === "number") {
		const parsed = Number(raw);
		return Number.isFinite(parsed) ? parsed : null;
	}
	return raw;
}

function compareValues(
	left: string | number | null,
	right: string | number | null,
	type: "string" | "number",
	direction: SortDirection,
): number {
	const multiplier = direction === "asc" ? 1 : -1;
	if (left === null && right === null) return 0;
	if (left === null) return 1;
	if (right === null) return -1;
	if (type === "string") {
		return String(left).localeCompare(String(right)) * multiplier;
	}
	return (Number(left) - Number(right)) * multiplier;
}

function setHeaderState(button: HTMLElement, direction: SortDirection): void {
	const aria =
		direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none";
	button.setAttribute("data-sort-direction", direction);
	button.setAttribute("aria-sort", aria);
}

function sortTable(
	table: HTMLTableElement,
	direction: SortDirection,
	key: string,
	type: "string" | "number",
): void {
	const tbody = table.querySelector("tbody");
	if (!tbody) return;

	const rows = Array.from(tbody.querySelectorAll<HTMLTableRowElement>("tr"));

	if (direction === "none") {
		rows.sort((left, right) => {
			return (
				Number(left.getAttribute("data-row-index")) -
				Number(right.getAttribute("data-row-index"))
			);
		});
	} else {
		const attr = `data-sort-${key}`;
		rows.sort((left, right) => {
			const leftValue = parseSortValue(left.getAttribute(attr) || "", type);
			const rightValue = parseSortValue(right.getAttribute(attr) || "", type);
			return compareValues(leftValue, rightValue, type, direction);
		});
	}

	rows.forEach((row) => {
		tbody.appendChild(row);
	});
}

export const initTableSort: ReportModuleInit = (node) => {
	const onClick = (event: MouseEvent) => {
		const target = event.target;
		if (!(target instanceof Element)) return;

		const button = target.closest<HTMLElement>("[data-sort-key]");
		if (!button || !node.contains(button)) return;

		const table = button.closest<HTMLTableElement>("[data-sortable-table]");
		if (!table) return;

		event.preventDefault();

		const key = button.getAttribute("data-sort-key");
		const type = (button.getAttribute("data-sort-type") || "string") as
			| "string"
			| "number";
		if (!key) return;

		const current = (button.getAttribute("data-sort-direction") || "none") as SortDirection;
		const next: SortDirection =
			current === "none" ? "asc" : current === "asc" ? "desc" : "none";

		table
			.querySelectorAll<HTMLElement>("[data-sort-key]")
			.forEach((other) => {
				if (other !== button) setHeaderState(other, "none");
			});

		setHeaderState(button, next);
		sortTable(table, next, key, type);
	};

	node.addEventListener("click", onClick);

	return () => {
		node.removeEventListener("click", onClick);
	};
};

import { formatReadableDate } from "../../format.js";
import type { ReportData } from "../../types.js";

interface HeaderProps {
	data: ReportData;
}

export function Header({ data }: HeaderProps) {
	return (
		<header class="mb-24 flex flex-wrap items-start justify-between gap-16 lg:items-end">
			<div>
				<h1 class="heading-1 m-0">{data.title}</h1>
				<div class="body-1 mt-10 max-w-[72ch] text-muted">
					Generated from <code>{data.sourcePath}</code>. The report is
					self-contained and includes the normalized summary JSON payload
					inline.
				</div>
			</div>
			<div class="body-2 grid justify-items-start gap-8 text-left text-muted lg:justify-items-end lg:text-right">
				<div>Max table rows: {data.config.topN}</div>
			</div>
		</header>
	);
}

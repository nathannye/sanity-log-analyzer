import { formatBytes, formatNumber, formatReadableDate } from "../../format.js";
import type { ReportData } from "../../types.js";
import { Donut } from "./Donut.js";
import { StatCard } from "./StatCard.js";

interface HeaderProps {
	data: ReportData;
}

export function Header({ data }: HeaderProps) {

	const formattedDate = formatReadableDate(data.dateStart) + " → " + formatReadableDate(data.dateEnd);
	const formattedBandwidth = formatBytes(data.summary.bandwidth);
	const formattedRequests = formatNumber(data.summary.requestCount);

	return (
		<header class="mb-24 flex pt-[24vh] flex-wrap items-start justify-between gap-16 lg:items-end">
			<p class=" mb-90">
				Report from {formattedDate}
			</p>
			<h1 class="heading-1 lg:w-[80vw] w-full mb-45">{data.summary.message}</h1>
		</header>
	);
}

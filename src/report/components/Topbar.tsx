import { formatReadableDate } from "../../format.js";
import type { ReportData } from "../../types.js";
import { Button } from "./Button.js";
import { MoonIcon, SunIcon } from "./icons.js";

interface TopbarProps {
	data: ReportData;
}

export function Topbar({ data }: TopbarProps) {
	const startDate = formatReadableDate(data.dateStart);
	const endDate = formatReadableDate(data.dateEnd);

	return (
		<div class="fixed top-0 left-0 right-0 z-10 lg:pl-418">
			<div class="bg-inverted flex items-center justify-between px-margin-1 py-4 eyebrow-1">
				<div class="flex items-center gap-16">
					<p>
						<span class="opacity-50 inline-block mr-3">Max rows:</span>{" "}
						{data.config.topN}
					</p>
					<p>
						<span class="opacity-50 inline-block mr-3">File:</span>{" "}
						{data.sourcePath}
					</p>
				</div>
				<p>
					<span class="opacity-50 inline-block mr-3">Project ID:</span>{" "}
					{data.projectId}
				</p>
				<div class="flex items-center gap-16">
					<p class="hidden lg:block">
						{startDate} → {endDate}
					</p>
					<Button
						variant="ghost-icon-sm"
						data-theme-toggle
						aria-label="Switch to light theme"
						title="Switch to light theme"
						icon={
							<>
								<span class="[&_svg]:size-15 theme-icon theme-icon-sun">
									<SunIcon />
								</span>
								<span class="[&_svg]:size-15 theme-icon theme-icon-moon">
									<MoonIcon />
								</span>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
}

import { formatReadableDate } from "../../format";
import { Button } from "./Button";
import { MoonIcon, SunIcon } from "./icons";

export function Topbar({maxRows, sourcePath, dateStart, dateEnd, projectId}: {maxRows: number, sourcePath: string, dateStart: string, dateEnd: string, projectId: string}) {

  const startDate = formatReadableDate(dateStart);
  const endDate = formatReadableDate(dateEnd);

	return (
		<div class="fixed top-0 left-0 right-0 z-10 pl-290">
      <div class="bg-inverted flex items-center justify-between px-10 py-4 eyebrow-1">
      <div class="flex items-center gap-16">
        <p>Max rows: {maxRows}</p>
        <p>File: {sourcePath}</p>
      </div>
      <p>Project ID: {projectId}</p>
      <div class="flex items-center gap-16">
        <p>{startDate} → {endDate}</p>
        <Button
          variant="ghost-icon-sm"
          data-theme-toggle
          aria-label="Switch to light theme"
          title="Switch to light theme"
          icon={
            <>
              <span class="theme-icon theme-icon-sun">
                <SunIcon />
              </span>
              <span class="theme-icon theme-icon-moon">
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
import { formatReadableDate } from "../../format";
import { Button } from "./Button";
import { MoonIcon, SunIcon } from "./icons";

export function Topbar({maxRows, sourcePath, dateStart, dateEnd, projectId}: {maxRows: number, sourcePath: string, dateStart: string, dateEnd: string, projectId: string}) {

  const startDate = formatReadableDate(dateStart);
  const endDate = formatReadableDate(dateEnd);

	return (
		<div class="fixed top-0 left-0 right-0 z-10 pl-395">
      <div class="bg-inverted flex items-center justify-between px-10 py-4 eyebrow-1">
      <div class="flex items-center gap-16">
        {
          maxRows &&  <p>
          <span class="opacity-50 inline-block mr-3">
          Max rows:
          </span> {maxRows}
        </p>
        }

        <p>
          <span class="opacity-50 inline-block mr-3">
          File: 
          </span>
          {sourcePath}</p>
      </div>
      <p>
        <span class="opacity-50 inline-block mr-3">
        Project ID: 
        </span>
        {projectId}</p>
      <div class="flex items-center gap-16">
        <p>{startDate} → {endDate}</p>
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
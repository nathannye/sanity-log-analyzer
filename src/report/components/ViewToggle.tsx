export function ViewToggle() {
	return (
		<label class="panel flex cursor-pointer items-center gap-10 px-16 py-12 select-none">
			<input
				type="checkbox"
				id="show-studio-requests"
				class="m-0 size-16 cursor-pointer accent-[var(--color-blue,#0ea5e9)]"
			/>
			<span class="body-2 text-text">Show non-billable studio requests</span>
		</label>
	);
}

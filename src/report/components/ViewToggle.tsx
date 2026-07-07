import styles from "./ViewToggle.module.css";

export function ViewToggle() {
	return (
		<label class={styles.toggle}>
			<input
				type="checkbox"
				id="show-studio-requests"
				class={styles.input}
			/>
			<span class={styles.label}>Show non-billable studio requests</span>
		</label>
	);
}

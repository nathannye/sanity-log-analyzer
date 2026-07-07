import { resolve } from "node:path";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/report/report-renderer.tsx"),
			formats: ["es"],
			fileName: "render",
		},
		outDir: "dist/report",
		emptyOutDir: true,
		cssCodeSplit: false,
	},
});

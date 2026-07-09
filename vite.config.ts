import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [preact(), tailwindcss()],
	build: {
		sourcemap: false,
		lib: {
			entry: {
				runtime: resolve(__dirname, "src/report/runtime.ts"),
			},
			formats: ["es"],
			cssFileName: "runtime",
			fileName: (_format, entryName) => `${entryName}.js`,
		},
		outDir: "dist/report",
		emptyOutDir: false,
		cssCodeSplit: false,
	},
});

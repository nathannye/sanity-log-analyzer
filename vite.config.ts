import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [preact(), tailwindcss()],
	build: {
		sourcemap: false,
		lib: {
			entry: resolve(__dirname, "src/report/report-renderer.tsx"),
			formats: ["es"],
			fileName: "render",
		},
		outDir: "dist/report",
		emptyOutDir: false,
		cssCodeSplit: false,
		rollupOptions: {
			external: [
				"groq-js",
				"ua-parser-js",
				"ua-parser-js/bot-detection",
				"prismjs",
				"@sanity/prism-groq",
			],
		},
	},
});

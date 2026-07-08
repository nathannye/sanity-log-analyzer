import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [preact(), tailwindcss()],
	root: resolve(__dirname, "src/report/preview"),
	publicDir: false,
	server: {
		open: true,
	},
});

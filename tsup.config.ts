import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		cli: "src/cli.ts",
	},
	format: ["esm"],
	platform: "node",
	target: "node22",
	sourcemap: true,
	clean: true,
	splitting: false,
	dts: {
		entry: ["src/index.ts"],
		compilerOptions: {
			declarationMap: true,
		},
	},
	external: ["open", "ua-parser-js", "groq-js", "./report/render.js"],
	esbuildOptions(options, context) {
		if (context.entry === "cli") {
			options.banner = {
				js: "#!/usr/bin/env node",
			};
		}
	},
});

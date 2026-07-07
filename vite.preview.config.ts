import preact from "@preact/preset-vite";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [preact()],
  root: resolve(__dirname, "src/report/preview"),
  publicDir: false,
  server: {
    open: true,
  },
});

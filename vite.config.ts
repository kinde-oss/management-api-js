import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es", "cjs"],
    },
    target: "esnext",
  },
  resolve: { alias: { src: resolve(__dirname, "lib/") } },
  plugins: [dts({ insertTypesEntry: true })],
});

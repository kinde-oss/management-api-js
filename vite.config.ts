import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es", "cjs"],
      name: "@kinde/management-api-js",
      fileName: (format) =>
        `kinde-management-api-js.${format === "es" ? "mjs" : "cjs"}`,
    },
    target: "esnext",
    outDir: "./dist",
    rollupOptions: {
      external: ["@kinde/jwt-decoder", "aws-jwt-verify", "dotenv"],
      output: {
        globals: {
          "@kinde/jwt-decoder": "jwtDecoder",
          "aws-jwt-verify": "awsJwtVerify",
          dotenv: "dotenv",
        },
      },
    },
  },
  resolve: { alias: { src: resolve(__dirname, "lib") } },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      outDir: "./dist",
      include: ["lib/**/*.ts"],
      exclude: ["lib/**/*.test.ts"],
    }),
  ],
});

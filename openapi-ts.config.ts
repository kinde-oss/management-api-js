import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./spec/kinde-mgmt-api-specs.yaml",
  output: {
    path: "lib/api",
    postProcess: ["prettier"],
  },
  plugins: [
    {
      baseUrl: "https://your_kinde_subdomain.kinde.com",
      name: "@hey-api/client-fetch",
    },
    {
      identifierCase: "preserve",
      name: "@hey-api/typescript",
    },
    {
      name: "@hey-api/sdk",
      operations: {
        strategy: "byTags",
      },
    },
    {
      includeInEntry: true,
      name: "@hey-api/schemas",
      nameBuilder: "${{name}}",
    },
  ],
});

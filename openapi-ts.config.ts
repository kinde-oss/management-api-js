import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./spec/kinde-mgmt-api-specs.yaml",
  output: {
    format: "prettier",
    path: "lib/api",
  },
  plugins: [
    {
      // TODO: uncomment after migrating to the new Fetch client
      // baseUrl: "https://your_kinde_subdomain.kinde.com",
      // exportFromIndex: true,
      // name: "@hey-api/client-fetch",
      name: "legacy/fetch",
    },
    {
      identifierCase: "preserve",
      name: "@hey-api/typescript",
    },
    {
      asClass: true,
      classNameBuilder: "{{name}}",
      name: "@hey-api/sdk",
      responseStyle: 'data',
    },
    {
      exportFromIndex: true,
      name: "@hey-api/schemas",
      nameBuilder: "${{name}}",
    },
  ],
});

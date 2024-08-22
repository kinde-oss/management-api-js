import path, { format } from "path";

export default {
  input: "./spec/kinde-mgmt-api-specs.yaml",
  output: {
    path: "lib/api",
    format: "prettier",
  },
  services: {
    name: "{{name}}",
    asClass: true,
  },
  client: "fetch",
};

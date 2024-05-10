import { format } from "path";

export default {
  input: "./spec/kinde-mgmt-api-specs.yaml",
  output: "lib/api",
  format: "prettier",
  services: {
    name: "{{name}}",
  },
};

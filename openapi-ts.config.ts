import path, { format } from "path";
import { defaultPlugins } from '@hey-api/openapi-ts';

export default {
  input: "./spec/kinde-mgmt-api-specs.yaml",
  output: {
    path: "lib/api",
    format: "prettier",
  },
  services: {
    name: "{{name}}",
    
  },
   plugins: [
    ...defaultPlugins,
    '@hey-api/client-fetch',
    {
      asClass: true,
      name: '@hey-api/schemas',
      // type: 'json', 
    },
  ],
};

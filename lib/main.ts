import * as dotenv from "dotenv";
dotenv.config();

export * from "./api/index";
export * from "./utilities/index";

import { OpenAPI } from "./api/index";
import { kindeConfig } from "./utilities/config";
import { getToken } from "./utilities/getToken";

if (!process.env.KINDE_DOMAIN) {
  throw new Error("KINDE_DOMAIN is not set");
}

if (!process.env.KINDE_CLIENT_SECRET) {
  throw new Error("KINDE_CLIENT_SECRET is not set");
}

if (!process.env.KINDE_CLIENT_ID) {
  throw new Error("KINDE_CLIENT_ID is not set");
}

if (!process.env.KINDE_DOMAIN) {
  throw new Error("KINDE_DOMAIN is not set");
}

kindeConfig.clientId = process.env.KINDE_CLIENT_ID;
kindeConfig.clientSecret = process.env.KINDE_CLIENT_SECRET;
kindeConfig.audience = process.env.KINDE_CLIENT_SECRET;
OpenAPI.BASE = process.env.KINDE_DOMAIN;

async function main() {
  OpenAPI.TOKEN = async () => {
    return await getToken();
  };
}

main();

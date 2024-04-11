import * as dotenv from "dotenv";
import { OpenAPI } from "./api/index";
import { getToken } from "./utilities/getToken";

export interface TokenStore {
  getToken(): Promise<string>;
  setToken(tokens: string): Promise<void>;
  clearToken(): Promise<void>;
}

export const kindeConfig: {
  clientId?: string;
  clientSecret?: string;
  kinde_domain: string;
  audience: string;
  token: string;
  tokenStore?: TokenStore;
} = {
  clientId: "client_id",
  clientSecret: "client",
  kinde_domain: "https://kinde.com",
  audience: "audience",
  token: "",
};

export const init = () => {
  if (!process.env.KINDE_DOMAIN) {
    throw new Error("KINDE_DOMAIN is not set");
  }

  dotenv.config();

  kindeConfig.clientId = process.env.KINDE_CLIENT_ID;
  kindeConfig.clientSecret = process.env.KINDE_CLIENT_SECRET;
  kindeConfig.audience = process.env.KINDE_DOMAIN + "/api";

  OpenAPI.BASE = process.env.KINDE_DOMAIN;

  OpenAPI.TOKEN = async () => {
    return await getToken();
  };
};

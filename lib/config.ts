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
  kindeDomain: string;
  audience: string;
  token: string;
  tokenStore?: TokenStore;
} = {
  clientId: "client_id",
  clientSecret: "client",
  kindeDomain: "https://kinde.com",
  audience: "audience",
  token: "",
};

export const init = () => {
  if (!process.env.KINDE_DOMAIN) {
    throw new Error("KINDE_DOMAIN is not set");
  }

  kindeConfig.clientId = process.env.KINDE_MANAGEMENT_CLIENT_ID;
  kindeConfig.clientSecret = process.env.KINDE_MANAGEMENT_CLIENT_SECRET;
  kindeConfig.audience = process.env.KINDE_DOMAIN + "/api";
  kindeConfig.kindeDomain = process.env.KINDE_DOMAIN;
  OpenAPI.BASE = process.env.KINDE_DOMAIN;

  OpenAPI.TOKEN = async () => {
    return await getToken();
  };
};

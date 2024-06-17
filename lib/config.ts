import { OpenAPI } from "./api/index";
import { getToken } from "./utilities/getToken";

export interface TokenStore {
  getToken(): Promise<string>;
  setToken(tokens: string): Promise<void>;
  clearToken(): Promise<void>;
}

export type configType = {
  kindeDomain: string;
  clientId?: string;
  clientSecret?: string;
  token: string;
  audience: string;
  tokenStore?: TokenStore;
};

export const kindeConfig: configType = {
  kindeDomain: "",
  clientId: "",
  clientSecret: "",
  token: "",
  audience: "",
};

export const init = (
  config: Pick<
    configType,
    "kindeDomain" | "clientId" | "clientSecret"
  > = kindeConfig,
) => {
  if (!process.env.KINDE_DOMAIN && config.kindeDomain === "") {
    throw new Error("kindeDomain or env KINDE_DOMAIN is not set");
  }

  _merge(kindeConfig, {
    clientId: process.env.KINDE_MANAGEMENT_CLIENT_ID,
    clientSecret: process.env.KINDE_MANAGEMENT_CLIENT_SECRET,
    audience: process.env.KINDE_DOMAIN + "/api",
    kindeDomain: process.env.KINDE_DOMAIN,
  }, config);

  _merge(OpenAPI, {
    BASE: kindeConfig.kindeDomain,
    TOKEN: async () => {
      return await getToken();
    },
  });
};

function _merge(target: object = {}, ...objects: object[]): object {
  return Object.assign(target, ...objects.filter(Boolean));
}

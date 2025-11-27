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

/**
 * Initializes the integration with Kinde, using either provided configuration
 * or default values from `kindeConfig`.
 *
 * @param {Object} [config] - Optional configuration object for Kinde.
 * @param {string} [config.kindeDomain] - The domain of your Kinde account.
 * @param {string} [config.clientId] - Your Kinde M2M client ID.
 * @param {string} [config.clientSecret] - Your Kinde M2M client secret.
 * @returns {void} - This function does not return a value. It sets up the
 *                   Kinde integration based on the provided configuration.
 */
export const init = (
  config: Pick<
    configType,
    "kindeDomain" | "clientId" | "clientSecret"
  > = kindeConfig,
) => {
  if (!process.env.KINDE_DOMAIN && config.kindeDomain === "") {
    throw new Error("kindeDomain or env KINDE_DOMAIN is not set");
  }

  // KINDE_DOMAIN needs to be prefixed with https:// add it if it's not there
  let domain = process.env.KINDE_DOMAIN || config.kindeDomain;
  if (!domain.startsWith("https://")) {
    domain = "https://" + domain;
  }

  _merge(
    kindeConfig,
    {
      clientId: process.env.KINDE_MANAGEMENT_CLIENT_ID,
      clientSecret: process.env.KINDE_MANAGEMENT_CLIENT_SECRET,
      audience: domain + "/api",
      kindeDomain: domain,
    },
    config,
  );

  _merge(OpenAPI, {
    BASE: kindeConfig.kindeDomain,
    TOKEN: async () => {
      return await getToken();
    },
  });

  // Mark OpenAPI as initialized
  OpenAPI.INITIALIZED = true;
};

function _merge(target: object = {}, ...objects: object[]): object {
  return Object.assign(target, ...objects.filter(Boolean));
}

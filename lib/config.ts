import { client } from "./api/client.gen";
import { getToken } from "./utilities/getToken";
import { ApiError } from "./utilities/ApiError";

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

const errorInterceptor = (error: unknown, response: Response | undefined) => {
  // Transport failures (network errors, aborts) have no response — pass the
  // original error through instead of wrapping it in an ApiError
  if (!response) {
    return error;
  }
  return new ApiError(response.status, error);
};

/**
 * Initializes the integration with Kinde, using either provided configuration
 * or default values from `kindeConfig`.
 *
 * @param {Object} [config] - Optional configuration object for Kinde.
 * @param {string} [config.kindeDomain] - The domain of your Kinde account.
 * @param {string} [config.clientId] - Your Kinde M2M client ID.
 * @param {string} [config.clientSecret] - Your Kinde M2M client secret.
 * @param {string} [config.audience] - Your Kinde M2M audience. Defaults to
 *        `<kindeDomain>/api`. Required when your API audience differs from
 *        the Kinde domain (e.g. in multi-domain setups).
 * @returns {void} - This function does not return a value. It sets up the
 *                   Kinde integration based on the provided configuration.
 */
export const init = (
  config: Pick<
    configType,
    "kindeDomain" | "clientId" | "clientSecret" | "audience"
  > = kindeConfig,
) => {
  if (!process.env.KINDE_DOMAIN && !config.kindeDomain) {
    throw new Error("kindeDomain or env KINDE_DOMAIN is not set");
  }

  // Add https:// prefix if missing
  const normalize = (d: string) =>
    d.startsWith("https://") ? d : "https://" + d;

  // Domain: explicit config > env > fallback
  const domain = normalize(config.kindeDomain || process.env.KINDE_DOMAIN || "");

  // Audience precedence:
  //   1. explicit config.audience  (user override — the fix for #134)
  //   2. KINDE_AUDIENCE env var
  //   3. process.env.KINDE_DOMAIN + "/api"  (env domain, as in original code)
  const audience = (config as any).audience ||
    process.env.KINDE_AUDIENCE ||
    (process.env.KINDE_DOMAIN
      ? normalize(process.env.KINDE_DOMAIN)
      : domain) + "/api";

  // Explicit config values take precedence over env vars; always assign to
  // kindeConfig directly so that undefined values in config don't reset fields.
  kindeConfig.kindeDomain = domain;
  kindeConfig.clientId =
    config.clientId || process.env.KINDE_MANAGEMENT_CLIENT_ID || "";
  kindeConfig.clientSecret =
    config.clientSecret || process.env.KINDE_MANAGEMENT_CLIENT_SECRET || "";
  kindeConfig.audience = audience;

  client.setConfig({
    baseUrl: kindeConfig.kindeDomain,
    auth: async () => await getToken(),
    parseAs: "json",
    responseStyle: "data",
    throwOnError: true,
  });

  if (!client.interceptors.error.exists(errorInterceptor)) {
    client.interceptors.error.use(errorInterceptor);
  }
};

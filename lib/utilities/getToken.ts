import * as constants from "../constants";
import { setToken } from "./setToken";
import { kindeConfig } from "../config";
import { OpenAPI } from "../api";
import { LIB_VERSION } from "../version";
import { checkAudience } from "./token/checkAudience";
import { hasTokenExpired } from "./token/hasExpired";

/**
 * Set the token to be used for requests
 * @param token - The token to be used for requests
 */
export const getToken = async (): Promise<string> => {
  let token: string = "";
  if (kindeConfig.tokenStore?.getToken) {
    token = await kindeConfig.tokenStore.getToken();
  } else {
    token = kindeConfig.token;
  }

  if (token) {
    const hasAudience = checkAudience(token, kindeConfig.audience);
    const tokenExpired = hasTokenExpired(token);

    if (!hasAudience || tokenExpired) {
      // Supplied token does not have the required audience to make API calls
      token = await generateM2MToken();
    }
  } else {
    token = await generateM2MToken();
  }

  /// TODO: store the M2M token elsewhere so not to override the user defined token
  setToken(token);
  return token;
};

async function generateM2MToken() {
  if (!kindeConfig.clientId) {
    throw new Error("Required KINDE_CLIENT_ID is not set");
  }

  if (!kindeConfig.clientSecret) {
    throw new Error("Required KINDE_CLIENT_SECRET is not set");
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    scope: constants.DEFAULT_TOKEN_SCOPES,
    client_id: kindeConfig.clientId,
    client_secret: kindeConfig.clientSecret,
    audience: OpenAPI.BASE + "/api",
  });

  const headers = new Headers();
  headers.append(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8",
  );
  headers.append("frameworkVersion", LIB_VERSION);
  headers.append("framework", "management-api-js");

  const config: RequestInit = { method: "POST", headers, body };

  const response = await fetch(constants.TOKEN_ENDPOINT, config);
  const payload: {
    access_token: string;
  } = (await response.json()) as { access_token: string };
  return payload.access_token;
}

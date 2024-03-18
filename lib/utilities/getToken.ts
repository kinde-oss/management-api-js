import * as constants from "./constants";
import { setToken } from "./setToken";
import { jwtDecode } from "./jwt-decode";
import { kindeConfig } from "./config";
import { OpenAPI } from "../api";
import { LIB_VERSION } from "../version";

/**
 * Set the token to be used for requests
 * @param token - The token to be used for requests
 */
export const getToken = async (): Promise<string> => {
  if (kindeConfig.token) {
    const decoded = jwtDecode(kindeConfig.token);
    if (decoded.exp && decoded.exp * 1000 > Date.now()) {
      return kindeConfig.token;
    }
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
  headers.append('frameworkVersion', LIB_VERSION);
  headers.append('framework', 'management-api-js');

  const config: RequestInit = { method: "POST", headers, body };
  const response = await fetch(constants.TOKEN_ENDPOINT, config);
  const payload: {
    access_token: string;
  } = (await response.json()) as { access_token: string };
  setToken(payload.access_token);

  return payload.access_token;
};

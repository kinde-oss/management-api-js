import { kindeConfig } from "../config";

/**
 * Set the token to be used for requests
 * @param token - The token to be used for requests
 */
export const setToken = (token: string) => {
  if (kindeConfig.tokenStore?.setToken) {
    kindeConfig.tokenStore.setToken(token);
    return;
  }
  kindeConfig.token = token;
};

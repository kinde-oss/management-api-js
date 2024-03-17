import type { connected_apps_access_token } from "../models/connected_apps_access_token";
import type { connected_apps_auth_url } from "../models/connected_apps_auth_url";
import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetConnectedAppAuthUrl = {
  /**
   * The unique key code reference of the connected app to authenticate against.
   */
  keyCodeRef: string;
  /**
   * The id of the user that needs to authenticate to the third-party connected app.
   */
  userId?: string;
  /**
   * The code of the Kinde organization that needs to authenticate to the third-party connected app.
   */
  orgCode?: string;
};
export type TDataGetConnectedAppToken = {
  /**
   * The unique sesssion id reprensenting the login session of a user.
   */
  sessionId: string;
};
export type TDataRevokeConnectedAppToken = {
  /**
   * The unique sesssion id reprensenting the login session of a user.
   */
  sessionId: string;
};

export class ConnectedAppsService {
  /**
   * Get Connected App URL
   * Get a URL that authenticates and authorizes a user to a third-party connected app.
   * @returns connected_apps_auth_url A URL that can be used to authenticate and a session id to identify this authentication session.
   * @throws ApiError
   */
  public static getConnectedAppAuthUrl(
    data: TDataGetConnectedAppAuthUrl,
  ): CancelablePromise<connected_apps_auth_url> {
    const { keyCodeRef, userId, orgCode } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/connected_apps/auth_url",
      query: {
        key_code_ref: keyCodeRef,
        user_id: userId,
        org_code: orgCode,
      },
      errors: {
        400: `Error retrieving connected app auth url.`,
        403: `Invalid credentials.`,
        404: `Error retrieving connected app auth url.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Get Connected App Token
   * Get an access token that can be used to call the third-party provider linked to the connected app.
   * @returns connected_apps_access_token An access token that can be used to query a third-party provider, as well as the token's expiry time.
   * @throws ApiError
   */
  public static getConnectedAppToken(
    data: TDataGetConnectedAppToken,
  ): CancelablePromise<connected_apps_access_token> {
    const { sessionId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/connected_apps/token",
      query: {
        session_id: sessionId,
      },
      errors: {
        400: `The session id provided points to an invalid session.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Revoke Connected App Token
   * Revoke the tokens linked to the connected app session.
   * @returns success_response An access token that can be used to query a third-party provider, as well as the token's expiry time.
   * @throws ApiError
   */
  public static revokeConnectedAppToken(
    data: TDataRevokeConnectedAppToken,
  ): CancelablePromise<success_response> {
    const { sessionId } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/connected_apps/revoke",
      query: {
        session_id: sessionId,
      },
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        405: `Invalid HTTP method used.`,
        429: `Request was throttled.`,
      },
    });
  }
}

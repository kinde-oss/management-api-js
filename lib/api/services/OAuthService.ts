import type { token_introspect } from "../models/token_introspect";
import type { user_profile } from "../models/user_profile";
import type { user_profile_v2 } from "../models/user_profile_v2";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataTokenIntrospection = {
  /**
   * Token details.
   */
  formData: {
    /**
     * The token to be introspected.
     */
    token?: string;
    /**
     * The provided token's type.
     */
    token_type?: string;
  };
};
export type TDataTokenRevocation = {
  /**
   * Details of the token to be revoked.
   */
  formData: {
    /**
     * The token to be revoked.
     */
    token?: string;
    /**
     * The identifier for your client.
     */
    client_id?: string;
    /**
     * The secret associated with your client.
     */
    client_secret?: string;
  };
};

export class OAuthService {
  /**
   * Get User Profile
   * Contains the id, names and email of the currently logged in user.
   *
   * @returns user_profile Details of logged in user V1.
   * @throws ApiError
   */
  public static getUser(): CancelablePromise<user_profile> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/oauth2/user_profile",
      errors: {
        403: `Invalid credentials.`,
      },
    });
  }

  /**
   * Get token details
   * Retrieve information about the provided token.
   * @returns token_introspect Details of the token.
   * @throws ApiError
   */
  public static tokenIntrospection(
    data: TDataTokenIntrospection,
  ): CancelablePromise<token_introspect> {
    const { formData } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/oauth2/introspect",
      formData: formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        401: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Revoke token
   * Revoke a previously issued token.
   * @returns any Token successfully revoked.
   * @throws ApiError
   */
  public static tokenRevocation(
    data: TDataTokenRevocation,
  ): CancelablePromise<any> {
    const { formData } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/oauth2/revoke",
      formData: formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        401: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Returns the details of the currently logged in user
   * Contains the id, names, profile picture URL and email of the currently logged in user.
   *
   * @returns user_profile_v2 Details of logged in user V2.
   * @throws ApiError
   */
  public static getUserProfileV2(): CancelablePromise<user_profile_v2> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/oauth2/v2/user_profile",
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

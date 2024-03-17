import type { create_user_response } from "../models/create_user_response";
import type { success_response } from "../models/success_response";
import type { update_user_response } from "../models/update_user_response";
import type { user } from "../models/user";
import type { users_response } from "../models/users_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetUsers = {
  /**
   * Number of results per page. Defaults to 10 if parameter not sent.
   */
  pageSize?: number | null;
  /**
   * ID of the user to filter by.
   */
  userId?: string | null;
  /**
   * A string to get the next page of results if there are more results.
   */
  nextToken?: string | null;
  /**
   * Filter the results by email address. The query string should be comma separated and url encoded.
   */
  email?: string | null;
  /**
   * Specify additional data to retrieve. Use "organizations" and/or "identities".
   */
  expand?: string | null;
};
export type TDataRefreshUserClaims = {
  /**
   * The id of the user whose claims needs to be updated.
   */
  userId: string;
};
export type TDataGetUserData = {
  /**
   * The user's id.
   */
  id: string;
  /**
   * Specify additional data to retrieve. Use "organizations" and/or "identities".
   */
  expand?: string | null;
};
export type TDataCreateUser = {
  /**
   * The details of the user to create.
   */
  requestBody?: {
    /**
     * Basic information required to create a user.
     */
    profile?: {
      /**
       * User's first name.
       */
      given_name?: string;
      /**
       * User's last name.
       */
      family_name?: string;
    };
    /**
     * Array of identities to assign to the created user
     */
    identities?: Array<{
      /**
       * The type of identity to create, for e.g. email.
       */
      type?: "email";
      /**
       * Additional details required to create the user.
       */
      details?: {
        /**
         * The email address of the user.
         */
        email?: string;
      };
    }>;
  };
};
export type TDataUpdateUser = {
  /**
   * The user's id.
   */
  id: string;
  /**
   * The user to update.
   */
  requestBody: {
    /**
     * User's first name.
     */
    given_name?: string;
    /**
     * User's last name.
     */
    family_name?: string;
    /**
     * Whether the user is currently suspended or not.
     */
    is_suspended?: boolean;
    /**
     * Prompt the user to change their password on next sign in.
     */
    is_password_reset_requested?: boolean;
  };
};
export type TDataDeleteUser = {
  /**
   * The user's id.
   */
  id: string;
  /**
   * Delete all data and remove the user's profile from all of Kinde, including the subscriber list
   */
  isDeleteProfile?: boolean;
};
export type TDataUpdateUserFeatureFlagOverride = {
  /**
   * The identifier for the user
   */
  userId: string;
  /**
   * The identifier for the feature flag
   */
  featureFlagKey: string;
  /**
   * Override value
   */
  value: string;
};

export class UsersService {
  /**
   * List Users
   * The returned list can be sorted by full name or email address
   * in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query
   * string parameter.
   *
   * @returns users_response Users successfully retrieved.
   * @throws ApiError
   */
  public static getUsers(
    data: TDataGetUsers = {},
  ): CancelablePromise<users_response> {
    const { pageSize, userId, nextToken, email, expand } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users",
      query: {
        page_size: pageSize,
        user_id: userId,
        next_token: nextToken,
        email,
        expand,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Refresh User Claims and Invalidate Cache
   * Refreshes the user's claims and invalidates the current cache.
   *
   * @returns success_response Claims successfully refreshed.
   * @throws ApiError
   */
  public static refreshUserClaims(
    data: TDataRefreshUserClaims,
  ): CancelablePromise<success_response> {
    const { userId } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/{user_id}/refresh_claims",
      path: {
        user_id: userId,
      },
      errors: {
        400: `Bad request.`,
        403: `Bad request.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Get User
   * Retrieve a user record.
   *
   * @returns user User successfully updated.
   * @throws ApiError
   */
  public static getUserData(data: TDataGetUserData): CancelablePromise<user> {
    const { id, expand } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/user",
      query: {
        id,
        expand,
      },
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Create User
   * Creates a user record and optionally zero or more identities for the user. An example identity could be the email
   * address of the user.
   *
   * @returns create_user_response User successfully created.
   * @throws ApiError
   */
  public static createUser(
    data: TDataCreateUser = {},
  ): CancelablePromise<create_user_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/user",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Error creating user.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update User
   * Update a user record.
   *
   * @returns update_user_response User successfully updated.
   * @throws ApiError
   */
  public static updateUser(
    data: TDataUpdateUser,
  ): CancelablePromise<update_user_response> {
    const { id, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/user",
      query: {
        id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete User
   * Delete a user record.
   *
   * @returns success_response User successfully deleted.
   * @throws ApiError
   */
  public static deleteUser(
    data: TDataDeleteUser,
  ): CancelablePromise<success_response> {
    const { id, isDeleteProfile } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/user",
      query: {
        id,
        is_delete_profile: isDeleteProfile,
      },
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update User Feature Flag Override
   * Update user feature flag override.
   * @returns success_response Feature flag override successfully updated.
   * @throws ApiError
   */
  public static updateUserFeatureFlagOverride(
    data: TDataUpdateUserFeatureFlagOverride,
  ): CancelablePromise<success_response> {
    const { userId, featureFlagKey, value } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/{user_id}/feature_flags/{feature_flag_key}",
      path: {
        user_id: userId,
        feature_flag_key: featureFlagKey,
      },
      query: {
        value,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

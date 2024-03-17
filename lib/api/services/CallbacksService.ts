import type { logout_redirect_urls } from "../models/logout_redirect_urls";
import type { redirect_callback_urls } from "../models/redirect_callback_urls";
import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetCallbackUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
};
export type TDataAddRedirectCallbackUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
  /**
   * Callback details.
   */
  requestBody: {
    /**
     * Array of callback urls.
     */
    urls?: Array<string>;
  };
};
export type TDataReplaceRedirectCallbackUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
  /**
   * Callback details.
   */
  requestBody: {
    /**
     * Array of callback urls.
     */
    urls?: Array<string>;
  };
};
export type TDataDeleteCallbackUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
  /**
   * Urls to delete, comma separated and url encoded.
   */
  urls: string;
};
export type TDataGetLogoutUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
};
export type TDataAddLogoutRedirectUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
  /**
   * Callback details.
   */
  requestBody: {
    /**
     * Array of logout urls.
     */
    urls?: Array<string>;
  };
};
export type TDataReplaceLogoutRedirectUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
  /**
   * Callback details.
   */
  requestBody: {
    /**
     * Array of logout urls.
     */
    urls?: Array<string>;
  };
};
export type TDataDeleteLogoutUrLs = {
  /**
   * The identifier for the application.
   */
  appId: string;
  /**
   * Urls to delete, comma separated and url encoded.
   */
  urls: string;
};

export class CallbacksService {
  /**
   * List Callback URLs
   * Returns an application's redirect callback URLs.
   *
   * @returns redirect_callback_urls Callback URLs successfully retrieved.
   * @throws ApiError
   */
  public static getCallbackUrLs(
    data: TDataGetCallbackUrLs,
  ): CancelablePromise<redirect_callback_urls> {
    const { appId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/applications/{app_id}/auth_redirect_urls",
      path: {
        app_id: appId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Add Redirect Callback URLs
   * Add additional redirect callback URLs.
   *
   * @returns success_response Callbacks successfully updated
   * @throws ApiError
   */
  public static addRedirectCallbackUrLs(
    data: TDataAddRedirectCallbackUrLs,
  ): CancelablePromise<success_response> {
    const { appId, requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/applications/{app_id}/auth_redirect_urls",
      path: {
        app_id: appId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Replace Redirect Callback URLs
   * Replace all redirect callback URLs.
   *
   * @returns success_response Callbacks successfully updated
   * @throws ApiError
   */
  public static replaceRedirectCallbackUrLs(
    data: TDataReplaceRedirectCallbackUrLs,
  ): CancelablePromise<success_response> {
    const { appId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/applications/{app_id}/auth_redirect_urls",
      path: {
        app_id: appId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Callback URLs
   * Delete callback URLs.
   *
   * @returns success_response Callback URLs successfully deleted.
   * @throws ApiError
   */
  public static deleteCallbackUrLs(
    data: TDataDeleteCallbackUrLs,
  ): CancelablePromise<success_response> {
    const { appId, urls } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/applications/{app_id}/auth_redirect_urls",
      path: {
        app_id: appId,
      },
      query: {
        urls,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * List Logout URLs
   * Returns an application's logout redirect URLs.
   *
   * @returns logout_redirect_urls Logout URLs successfully retrieved.
   * @throws ApiError
   */
  public static getLogoutUrLs(
    data: TDataGetLogoutUrLs,
  ): CancelablePromise<logout_redirect_urls> {
    const { appId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/applications/{app_id}/auth_logout_urls",
      path: {
        app_id: appId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Add Logout Redirect URLs
   * Add additional logout redirect URLs.
   *
   * @returns success_response Logouts successfully updated
   * @throws ApiError
   */
  public static addLogoutRedirectUrLs(
    data: TDataAddLogoutRedirectUrLs,
  ): CancelablePromise<success_response> {
    const { appId, requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/applications/{app_id}/auth_logout_urls",
      path: {
        app_id: appId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Replace Logout Redirect URLs
   * Replace all logout redirect URLs.
   *
   * @returns success_response Logout URLs successfully updated
   * @throws ApiError
   */
  public static replaceLogoutRedirectUrLs(
    data: TDataReplaceLogoutRedirectUrLs,
  ): CancelablePromise<success_response> {
    const { appId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/applications/{app_id}/auth_logout_urls",
      path: {
        app_id: appId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Logout URLs
   * Delete logout URLs.
   *
   * @returns success_response Logout URLs successfully deleted.
   * @throws ApiError
   */
  public static deleteLogoutUrLs(
    data: TDataDeleteLogoutUrLs,
  ): CancelablePromise<success_response> {
    const { appId, urls } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/applications/{app_id}/auth_logout_urls",
      path: {
        app_id: appId,
      },
      query: {
        urls,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

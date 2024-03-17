import type { api } from "../models/api";
import type { apis } from "../models/apis";
import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataAddApIs = {
  /**
   * API details.
   */
  requestBody: {
    name: string;
    audience: string;
  };
};
export type TDataGetApi = {
  /**
   * The API's id.
   */
  apiId: string;
};
export type TDataDeleteApi = {
  /**
   * The API's id.
   */
  apiId: string;
};
export type TDataUpdateApiApplications = {
  /**
   * The identifier for the API.
   */
  apiId: string;
  /**
   * The applications you want to connect or disconnect.
   */
  requestBody: {
    applications: Array<{
      /**
       * The application's id.
       */
      id: string;
      /**
       * Optional operation, set to 'delete' to remove the user from the organization.
       */
      operation?: string;
    }>;
  };
};

export class ApIsService {
  /**
   * List APIs
   * Returns a list of APIs.
   *
   * @returns apis APIs successfully retrieved.
   * @throws ApiError
   */
  public static getApIs(): CancelablePromise<apis> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/apis",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Add APIs
   * Add APIs.
   *
   * @returns success_response APIs successfully updated
   * @throws ApiError
   */
  public static addApIs(
    data: TDataAddApIs,
  ): CancelablePromise<success_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/apis",
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
   * List API details
   * Returns the details of the API.
   *
   * @returns api API successfully retrieved.
   * @throws ApiError
   */
  public static getApi(data: TDataGetApi): CancelablePromise<api> {
    const { apiId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/apis/{api_id}",
      path: {
        api_id: apiId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete API
   * Deletes API.
   *
   * @returns success_response API successfully deleted.
   * @throws ApiError
   */
  public static deleteApi(
    data: TDataDeleteApi,
  ): CancelablePromise<success_response> {
    const { apiId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/apis/{api_id}",
      path: {
        api_id: apiId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update API Applications
   * Update the applications under that API.
   *
   * @returns success_response API applications updated.
   * @throws ApiError
   */
  public static updateApiApplications(
    data: TDataUpdateApiApplications,
  ): CancelablePromise<success_response> {
    const { apiId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/apis/{api_id}/applications",
      path: {
        api_id: apiId,
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
}

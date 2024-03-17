import type { create_application_response } from "../models/create_application_response";
import type { get_application_response } from "../models/get_application_response";
import type { get_applications_response } from "../models/get_applications_response";
import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetApplications = {
  /**
   * Field and order to sort the result by.
   */
  sort?: "name_asc" | "name_desc" | null;
  /**
   * Number of results per page. Defaults to 10 if parameter not sent.
   */
  pageSize?: number | null;
  /**
   * A string to get the next page of results if there are more results.
   */
  nextToken?: string | null;
};
export type TDataCreateApplication = {
  /**
   * Application details.
   */
  requestBody?: {
    /**
     * The application's name.
     */
    name?: string;
    /**
     * The application's type.
     */
    type?: "reg" | "spa" | "m2m";
  };
};
export type TDataGetApplication = {
  /**
   * The identifier for the application.
   */
  applicationId: string;
};
export type TDataUpdateApplication = {
  /**
   * The identifier for the application.
   */
  applicationId: string;
  /**
   * Application details.
   */
  requestBody?: {
    /**
     * The application's name.
     */
    name?: string;
    /**
     * The application's language key.
     */
    language_key?: string;
    /**
     * The application's logout uris.
     */
    logout_uris?: Array<string>;
    /**
     * The application's redirect uris.
     */
    redirect_uris?: Array<string>;
  };
};
export type TDataDeleteApplication = {
  /**
   * The identifier for the application.
   */
  applicationId: string;
};

export class ApplicationsService {
  /**
   * List Applications
   * Get a list of applications.
   *
   * @returns get_applications_response A successful response with a list of applications or an empty list.
   * @throws ApiError
   */
  public static getApplications(
    data: TDataGetApplications = {},
  ): CancelablePromise<get_applications_response> {
    const { sort, pageSize, nextToken } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/applications",
      query: {
        sort,
        page_size: pageSize,
        next_token: nextToken,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Create Application
   * Create an application.
   * @returns create_application_response Application successfully created.
   * @throws ApiError
   */
  public static createApplication(
    data: TDataCreateApplication = {},
  ): CancelablePromise<create_application_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/applications",
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
   * Get Application
   * Gets an application given the application's id.
   *
   * @returns get_application_response Application successfully retrieved.
   * @throws ApiError
   */
  public static getApplication(
    data: TDataGetApplication,
  ): CancelablePromise<get_application_response> {
    const { applicationId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/applications/{application_id}",
      path: {
        application_id: applicationId,
      },
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update Application
   * Update an application.
   * @returns any Application successfully updated.
   * @throws ApiError
   */
  public static updateApplication(
    data: TDataUpdateApplication,
  ): CancelablePromise<any> {
    const { applicationId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/applications/{application_id}",
      path: {
        application_id: applicationId,
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
   * Delete Application
   * Delete application.
   *
   * @returns success_response Application successfully deleted.
   * @throws ApiError
   */
  public static deleteApplication(
    data: TDataDeleteApplication,
  ): CancelablePromise<success_response> {
    const { applicationId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/applications/{application_id}",
      path: {
        application_id: applicationId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

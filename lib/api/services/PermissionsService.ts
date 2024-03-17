import type { get_permissions_response } from "../models/get_permissions_response";
import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetPermissions = {
  /**
   * Field and order to sort the result by.
   */
  sort?: "name_asc" | "name_desc" | "id_asc" | "id_desc" | null;
  /**
   * Number of results per page. Defaults to 10 if parameter not sent.
   */
  pageSize?: number | null;
  /**
   * A string to get the next page of results if there are more results.
   */
  nextToken?: string | null;
};
export type TDataCreatePermission = {
  /**
   * Permission details.
   */
  requestBody?: {
    /**
     * The permission's name.
     */
    name?: string;
    /**
     * The permission's description.
     */
    description?: string;
    /**
     * The permission identifier to use in code.
     */
    key?: string;
  };
};
export type TDataUpdatePermissions = {
  /**
   * The identifier for the permission.
   */
  permissionId: number;
  /**
   * Permission details.
   */
  requestBody?: {
    /**
     * The permission's name.
     */
    name?: string;
    /**
     * The permission's description.
     */
    description?: string;
    /**
     * The permission identifier to use in code.
     */
    key?: string;
  };
};
export type TDataDeletePermission = {
  /**
   * The identifier for the permission.
   */
  permissionId: string;
};

export class PermissionsService {
  /**
   * List Permissions
   * The returned list can be sorted by permission name or permission ID in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query string parameter.
   *
   * @returns get_permissions_response Permissions successfully retrieved.
   * @throws ApiError
   */
  public static getPermissions(
    data: TDataGetPermissions = {},
  ): CancelablePromise<get_permissions_response> {
    const { sort, pageSize, nextToken } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/permissions",
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
   * Create Permission
   * Create a new permission.
   * @returns success_response Permission successfully created
   * @throws ApiError
   */
  public static createPermission(
    data: TDataCreatePermission = {},
  ): CancelablePromise<success_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/permissions",
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
   * Update Permission
   * Update permission
   * @returns success_response Permission successfully updated
   * @throws ApiError
   */
  public static updatePermissions(
    data: TDataUpdatePermissions,
  ): CancelablePromise<success_response> {
    const { permissionId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/permissions/{permission_id}",
      path: {
        permission_id: permissionId,
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
   * Delete Permission
   * Delete permission
   * @returns success_response permission successfully updated.
   * @throws ApiError
   */
  public static deletePermission(
    data: TDataDeletePermission,
  ): CancelablePromise<success_response> {
    const { permissionId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/permissions/{permission_id}",
      path: {
        permission_id: permissionId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

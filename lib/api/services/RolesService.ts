import type { get_roles_response } from "../models/get_roles_response";
import type { roles_permission_response } from "../models/roles_permission_response";
import type { success_response } from "../models/success_response";
import type { update_role_permissions_response } from "../models/update_role_permissions_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetRoles = {
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
export type TDataCreateRole = {
  /**
   * Role details.
   */
  requestBody?: {
    /**
     * The role's name.
     */
    name?: string;
    /**
     * The role's description.
     */
    description?: string;
    /**
     * The role identifier to use in code.
     */
    key?: string;
    /**
     * Set role as default for new users.
     */
    is_default_role?: boolean;
  };
};
export type TDataGetRolePermission = {
  /**
   * The role's public id.
   */
  roleId: string;
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
export type TDataUpdateRolePermissions = {
  /**
   * The identifier for the role.
   */
  roleId: string;
  requestBody: {
    /**
     * Permissions to add or remove from the role.
     */
    permissions?: Array<{
      /**
       * The permission id.
       */
      id?: string;
      /**
       * Optional operation, set to 'delete' to remove the permission from the role.
       */
      operation?: string;
    }>;
  };
};
export type TDataRemoveRolePermission = {
  /**
   * The role's public id.
   */
  roleId: string;
  /**
   * The permission's public id.
   */
  permissionId: string;
};
export type TDataUpdateRoles = {
  /**
   * The identifier for the role.
   */
  roleId: string;
  /**
   * Role details.
   */
  requestBody?: {
    /**
     * The role's name.
     */
    name: string;
    /**
     * The role's description.
     */
    description?: string;
    /**
     * The role identifier to use in code.
     */
    key: string;
    /**
     * Set role as default for new users.
     */
    is_default_role?: boolean;
  };
};
export type TDataDeleteRole = {
  /**
   * The identifier for the role.
   */
  roleId: string;
};

export class RolesService {
  /**
   * List Roles
   * The returned list can be sorted by role name or role ID in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query string parameter.
   *
   * @returns get_roles_response Roles successfully retrieved.
   * @throws ApiError
   */
  public static getRoles(
    data: TDataGetRoles = {},
  ): CancelablePromise<get_roles_response> {
    const { sort, pageSize, nextToken } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/roles",
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
   * Create Role
   * Create role.
   * @returns success_response Role successfully created
   * @throws ApiError
   */
  public static createRole(
    data: TDataCreateRole = {},
  ): CancelablePromise<success_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/roles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
      },
    });
  }

  /**
   * Get Role Permissions
   * Get permissions for a role.
   * @returns roles_permission_response A list of permissions for a role
   * @throws ApiError
   */
  public static getRolePermission(
    data: TDataGetRolePermission,
  ): CancelablePromise<roles_permission_response> {
    const { roleId, sort, pageSize, nextToken } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/roles/{role_id}/permissions",
      path: {
        role_id: roleId,
      },
      query: {
        sort,
        page_size: pageSize,
        next_token: nextToken,
      },
      errors: {
        400: `Error removing user`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update Role Permissions
   * Update role permissions.
   *
   * @returns update_role_permissions_response Permissions successfully updated.
   * @throws ApiError
   */
  public static updateRolePermissions(
    data: TDataUpdateRolePermissions,
  ): CancelablePromise<update_role_permissions_response> {
    const { roleId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/roles/{role_id}/permissions",
      path: {
        role_id: roleId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Remove Role Permission
   * Remove a permission from a role.
   * @returns success_response Permission successfully removed from role
   * @throws ApiError
   */
  public static removeRolePermission(
    data: TDataRemoveRolePermission,
  ): CancelablePromise<success_response> {
    const { roleId, permissionId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/roles/{role_id}/permissions/{permission_id}",
      path: {
        role_id: roleId,
        permission_id: permissionId,
      },
      errors: {
        400: `Error removing user`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update Role
   * Update a role
   * @returns success_response Role successfully updated
   * @throws ApiError
   */
  public static updateRoles(
    data: TDataUpdateRoles,
  ): CancelablePromise<success_response> {
    const { roleId, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/roles/{role_id}",
      path: {
        role_id: roleId,
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
   * Delete Role
   * Delete role
   * @returns success_response Role successfully deleted.
   * @throws ApiError
   */
  public static deleteRole(
    data: TDataDeleteRole,
  ): CancelablePromise<success_response> {
    const { roleId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/roles/{role_id}",
      path: {
        role_id: roleId,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

import type { add_organization_users_response } from "../models/add_organization_users_response";
import type { create_organization_response } from "../models/create_organization_response";
import type { get_organization_feature_flags_response } from "../models/get_organization_feature_flags_response";
import type { get_organization_users_response } from "../models/get_organization_users_response";
import type { get_organizations_response } from "../models/get_organizations_response";
import type { get_organizations_user_permissions_response } from "../models/get_organizations_user_permissions_response";
import type { get_organizations_user_roles_response } from "../models/get_organizations_user_roles_response";
import type { organization } from "../models/organization";
import type { success_response } from "../models/success_response";
import type { update_organization_users_response } from "../models/update_organization_users_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetOrganization = {
  /**
   * The organization's code.
   */
  code?: string;
};
export type TDataCreateOrganization = {
  /**
   * Organization details.
   */
  requestBody: {
    /**
     * The organization's name.
     */
    name: string;
    /**
     * The organization's feature flag settings.
     */
    feature_flags?: Record<string, "str" | "int" | "bool">;
    /**
     * The organization's ID.
     */
    external_id?: string;
    /**
     * The organization's brand settings - background color.
     */
    background_color?: string;
    /**
     * The organization's brand settings - button color.
     */
    button_color?: string;
    /**
     * The organization's brand settings - button text color.
     */
    button_text_color?: string;
    /**
     * The organization's brand settings - link color.
     */
    link_color?: string;
    /**
     * The organization's handle.
     */
    handle?: string;
  };
};
export type TDataUpdateOrganization = {
  /**
   * The identifier for the organization.
   */
  orgCode: string;
  /**
   * Organization details.
   */
  requestBody?: {
    /**
     * The organization's name.
     */
    name?: string;
    /**
     * The organization's ID.
     */
    external_id?: string;
    /**
     * The organization's brand settings - background color.
     */
    background_color?: string;
    /**
     * The organization's brand settings - button color.
     */
    button_color?: string;
    /**
     * The organization's brand settings - button text color.
     */
    button_text_color?: string;
    /**
     * The organization's brand settings - link color.
     */
    link_color?: string;
    /**
     * The organization's handle.
     */
    handle?: string;
  };
};
export type TDataDeleteOrganization = {
  /**
   * The identifier for the organization.
   */
  orgCode: string;
};
export type TDataGetOrganizations = {
  /**
   * Field and order to sort the result by.
   */
  sort?: "name_asc" | "name_desc" | "email_asc" | "email_desc" | null;
  /**
   * Number of results per page. Defaults to 10 if parameter not sent.
   */
  pageSize?: number | null;
  /**
   * A string to get the next page of results if there are more results.
   */
  nextToken?: string | null;
};
export type TDataGetOrganizationUsers = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * Field and order to sort the result by.
   */
  sort?: "name_asc" | "name_desc" | "email_asc" | "email_desc" | null;
  /**
   * Number of results per page. Defaults to 10 if parameter not sent.
   */
  pageSize?: number | null;
  /**
   * A string to get the next page of results if there are more results.
   */
  nextToken?: string | null;
  /**
   * Filter by user permissions comma separated (where all match)
   */
  permissions?: string;
  /**
   * Filter by user roles comma separated (where all match)
   */
  roles?: string;
};
export type TDataAddOrganizationUsers = {
  /**
   * The organization's code.
   */
  orgCode: string;
  requestBody?: {
    /**
     * Users to be added to the organization.
     */
    users?: Array<{
      /**
       * The users id.
       */
      id?: string;
      /**
       * Role keys to assign to the user.
       */
      roles?: Array<string>;
      /**
       * Permission keys to assign to the user.
       */
      permissions?: Array<string>;
    }>;
  };
};
export type TDataUpdateOrganizationUsers = {
  /**
   * The organization's code.
   */
  orgCode: string;
  requestBody?: {
    /**
     * Users to add, update or remove from the organization.
     */
    users?: Array<{
      /**
       * The users id.
       */
      id?: string;
      /**
       * Optional operation, set to 'delete' to remove the user from the organization.
       */
      operation?: string;
      /**
       * Role keys to assign to the user.
       */
      roles?: Array<string>;
      /**
       * Permission keys to assign to the user.
       */
      permissions?: Array<string>;
    }>;
  };
};
export type TDataGetOrganizationUserRoles = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
};
export type TDataCreateOrganizationUserRole = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
  /**
   * Role details.
   */
  requestBody: {
    /**
     * The role id.
     */
    role_id?: string;
  };
};
export type TDataDeleteOrganizationUserRole = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
  /**
   * The role id.
   */
  roleId: string;
};
export type TDataGetOrganizationUserPermissions = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
  /**
   * Specify additional data to retrieve. Use "roles".
   */
  expand?: string | null;
};
export type TDataCreateOrganizationUserPermission = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
  /**
   * Permission details.
   */
  requestBody: {
    /**
     * The permission id.
     */
    permission_id?: string;
  };
};
export type TDataDeleteOrganizationUserPermission = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
  /**
   * The permission id.
   */
  permissionId: string;
};
export type TDataRemoveOrganizationUser = {
  /**
   * The organization's code.
   */
  orgCode: string;
  /**
   * The user's id.
   */
  userId: string;
};
export type TDataGetOrganizationFeatureFlags = {
  /**
   * The identifier for the organization.
   */
  orgCode: string;
};
export type TDataDeleteOrganizationFeatureFlagOverrides = {
  /**
   * The identifier for the organization.
   */
  orgCode: string;
};
export type TDataDeleteOrganizationFeatureFlagOverride = {
  /**
   * The identifier for the organization.
   */
  orgCode: string;
  /**
   * The identifier for the feature flag.
   */
  featureFlagKey: string;
};
export type TDataUpdateOrganizationFeatureFlagOverride = {
  /**
   * The identifier for the organization
   */
  orgCode: string;
  /**
   * The identifier for the feature flag
   */
  featureFlagKey: string;
  /**
   * Override value
   */
  value: string;
};

export class OrganizationsService {
  /**
   * Get Organization
   * Gets an organization given the organization's code.
   *
   * @returns organization Organization successfully retrieved.
   * @throws ApiError
   */
  public static getOrganization(
    data: TDataGetOrganization = {},
  ): CancelablePromise<organization> {
    const { code } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/organization",
      query: {
        code,
      },
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Create Organization
   * Create an organization.
   * @returns create_organization_response Organization successfully created.
   * @throws ApiError
   */
  public static createOrganization(
    data: TDataCreateOrganization,
  ): CancelablePromise<create_organization_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/organization",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Error creating user.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
        500: `Could not create organization.`,
      },
    });
  }

  /**
   * Update Organization
   * Update an organization.
   * @returns success_response Organization successfully updated.
   * @throws ApiError
   */
  public static updateOrganization(
    data: TDataUpdateOrganization,
  ): CancelablePromise<success_response> {
    const { orgCode, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/organization/{org_code}",
      path: {
        org_code: orgCode,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Error updating organization.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Organization
   * Delete an organization.
   * @returns any Organization successfully deleted.
   * @throws ApiError
   */
  public static deleteOrganization(
    data: TDataDeleteOrganization,
  ): CancelablePromise<any> {
    const { orgCode } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/organization/{org_code}",
      path: {
        org_code: orgCode,
      },
      errors: {
        400: `Error deleting organization.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * List Organizations
   * Get a list of organizations.
   *
   * @returns get_organizations_response A successful response with a list of organizations or an empty list.
   * @throws ApiError
   */
  public static getOrganizations(
    data: TDataGetOrganizations = {},
  ): CancelablePromise<get_organizations_response> {
    const { sort, pageSize, nextToken } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/organizations",
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
   * List Organization Users
   * Get users in an organization.
   * @returns get_organization_users_response A successful response with a list of organization users or an empty list.
   * @throws ApiError
   */
  public static getOrganizationUsers(
    data: TDataGetOrganizationUsers,
  ): CancelablePromise<get_organization_users_response> {
    const { orgCode, sort, pageSize, nextToken, permissions, roles } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/organizations/{org_code}/users",
      path: {
        org_code: orgCode,
      },
      query: {
        sort,
        page_size: pageSize,
        next_token: nextToken,
        permissions,
        roles,
      },
      errors: {
        400: `Error creating user`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Add Organization Users
   * Add existing users to an organization.
   * @returns add_organization_users_response Users successfully added.
   * @returns void No users added.
   * @throws ApiError
   */
  public static addOrganizationUsers(
    data: TDataAddOrganizationUsers,
  ): CancelablePromise<add_organization_users_response | void> {
    const { orgCode, requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/organizations/{org_code}/users",
      path: {
        org_code: orgCode,
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
   * Update Organization Users
   * Update users that belong to an organization.
   * @returns update_organization_users_response Users successfully removed.
   * @throws ApiError
   */
  public static updateOrganizationUsers(
    data: TDataUpdateOrganizationUsers,
  ): CancelablePromise<update_organization_users_response> {
    const { orgCode, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/organizations/{org_code}/users",
      path: {
        org_code: orgCode,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Error updating organization user.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * List Organization User Roles
   * Get roles for an organization user.
   * @returns get_organizations_user_roles_response A successful response with a list of user roles.
   * @throws ApiError
   */
  public static getOrganizationUserRoles(
    data: TDataGetOrganizationUserRoles,
  ): CancelablePromise<get_organizations_user_roles_response> {
    const { orgCode, userId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/organizations/{org_code}/users/{user_id}/roles",
      path: {
        org_code: orgCode,
        user_id: userId,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Add Organization User Role
   * Add role to an organization user.
   * @returns success_response Role successfully added.
   * @throws ApiError
   */
  public static createOrganizationUserRole(
    data: TDataCreateOrganizationUserRole,
  ): CancelablePromise<success_response> {
    const { orgCode, userId, requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/organizations/{org_code}/users/{user_id}/roles",
      path: {
        org_code: orgCode,
        user_id: userId,
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
   * Delete Organization User Role
   * Delete role for an organization user.
   * @returns success_response User successfully removed.
   * @throws ApiError
   */
  public static deleteOrganizationUserRole(
    data: TDataDeleteOrganizationUserRole,
  ): CancelablePromise<success_response> {
    const { orgCode, userId, roleId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/organizations/{org_code}/users/{user_id}/roles/{role_id}",
      path: {
        org_code: orgCode,
        user_id: userId,
        role_id: roleId,
      },
      errors: {
        400: `Error creating user.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * List Organization User Permissions
   * Get permissions for an organization user.
   * @returns get_organizations_user_permissions_response A successful response with a list of user permissions.
   * @throws ApiError
   */
  public static getOrganizationUserPermissions(
    data: TDataGetOrganizationUserPermissions,
  ): CancelablePromise<get_organizations_user_permissions_response> {
    const { orgCode, userId, expand } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/organizations/{org_code}/users/{user_id}/permissions",
      path: {
        org_code: orgCode,
        user_id: userId,
      },
      query: {
        expand,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Add Organization User Permission
   * Add permission to an organization user.
   * @returns success_response User permission successfully updated.
   * @throws ApiError
   */
  public static createOrganizationUserPermission(
    data: TDataCreateOrganizationUserPermission,
  ): CancelablePromise<success_response> {
    const { orgCode, userId, requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/organizations/{org_code}/users/{user_id}/permissions",
      path: {
        org_code: orgCode,
        user_id: userId,
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
   * Delete Organization User Permission
   * Delete permission for an organization user.
   * @returns success_response User successfully removed.
   * @throws ApiError
   */
  public static deleteOrganizationUserPermission(
    data: TDataDeleteOrganizationUserPermission,
  ): CancelablePromise<success_response> {
    const { orgCode, userId, permissionId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/organizations/{org_code}/users/{user_id}/permissions/{permission_id}",
      path: {
        org_code: orgCode,
        user_id: userId,
        permission_id: permissionId,
      },
      errors: {
        400: `Error creating user.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Remove Organization User
   * Remove user from an organization.
   * @returns success_response User successfully removed from organization
   * @throws ApiError
   */
  public static removeOrganizationUser(
    data: TDataRemoveOrganizationUser,
  ): CancelablePromise<success_response> {
    const { orgCode, userId } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/organizations/{org_code}/users/{user_id}",
      path: {
        org_code: orgCode,
        user_id: userId,
      },
      errors: {
        400: `Error removing user`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * List Organization Feature Flags
   * Get all organization feature flags.
   * @returns get_organization_feature_flags_response Feature flag overrides successfully returned.
   * @throws ApiError
   */
  public static getOrganizationFeatureFlags(
    data: TDataGetOrganizationFeatureFlags,
  ): CancelablePromise<get_organization_feature_flags_response> {
    const { orgCode } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/organizations/{org_code}/feature_flags",
      path: {
        org_code: orgCode,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Organization Feature Flag Overrides
   * Delete all organization feature flag overrides.
   * @returns success_response Feature flag overrides successfully deleted.
   * @throws ApiError
   */
  public static deleteOrganizationFeatureFlagOverrides(
    data: TDataDeleteOrganizationFeatureFlagOverrides,
  ): CancelablePromise<success_response> {
    const { orgCode } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/organizations/{org_code}/feature_flags",
      path: {
        org_code: orgCode,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Organization Feature Flag Override
   * Delete organization feature flag override.
   * @returns success_response Feature flag override successfully deleted.
   * @throws ApiError
   */
  public static deleteOrganizationFeatureFlagOverride(
    data: TDataDeleteOrganizationFeatureFlagOverride,
  ): CancelablePromise<success_response> {
    const { orgCode, featureFlagKey } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/organizations/{org_code}/feature_flags/{feature_flag_key}",
      path: {
        org_code: orgCode,
        feature_flag_key: featureFlagKey,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update Organization Feature Flag Override
   * Update organization feature flag override.
   * @returns success_response Feature flag override successfully updated.
   * @throws ApiError
   */
  public static updateOrganizationFeatureFlagOverride(
    data: TDataUpdateOrganizationFeatureFlagOverride,
  ): CancelablePromise<success_response> {
    const { orgCode, featureFlagKey, value } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/organizations/{org_code}/feature_flags/{feature_flag_key}",
      path: {
        org_code: orgCode,
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

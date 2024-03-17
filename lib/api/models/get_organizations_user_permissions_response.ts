import type { organization_user_permission } from "./organization_user_permission";

export type get_organizations_user_permissions_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  permissions?: Array<organization_user_permission>;
};

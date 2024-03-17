import type { organization_user_role } from "./organization_user_role";

export type get_organizations_user_roles_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  roles?: Array<organization_user_role>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

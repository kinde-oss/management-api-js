import type { organization_user } from "./organization_user";

export type get_organization_users_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  organization_users?: Array<organization_user>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

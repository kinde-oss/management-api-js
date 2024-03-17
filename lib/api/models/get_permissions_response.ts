import type { permissions } from "./permissions";

export type get_permissions_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  permissions?: Array<permissions>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

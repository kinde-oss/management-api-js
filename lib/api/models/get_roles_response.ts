import type { roles } from "./roles";

export type get_roles_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  roles?: Array<roles>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

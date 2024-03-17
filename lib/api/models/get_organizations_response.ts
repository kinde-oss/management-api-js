import type { organization } from "./organization";

export type get_organizations_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  organizations?: Array<organization>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

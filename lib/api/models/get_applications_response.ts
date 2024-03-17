import type { applications } from "./applications";

export type get_applications_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  applications?: Array<applications>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

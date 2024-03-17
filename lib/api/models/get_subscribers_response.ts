import type { subscribers_subscriber } from "./subscribers_subscriber";

export type get_subscribers_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  subscribers?: Array<subscribers_subscriber>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

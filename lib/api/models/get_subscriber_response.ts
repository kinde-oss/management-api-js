import type { subscriber } from "./subscriber";

export type get_subscriber_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  subscribers?: Array<subscriber>;
};

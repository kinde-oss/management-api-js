import type { redirect_callback_urls } from "./redirect_callback_urls";

export type get_redirect_callback_urls_response = {
  /**
   * An application's redirect callback URLs.
   */
  redirect_urls?: Array<redirect_callback_urls>;
};

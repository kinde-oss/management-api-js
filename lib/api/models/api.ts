export type api = {
  /**
   * The API's unique identifier.
   */
  id?: string;
  /**
   * Response code.
   */
  code?: string;
  /**
   * The API's name.
   */
  name?: string;
  /**
   * Response message.
   */
  message?: string;
  /**
   * The API's audience.
   */
  audience?: string;
  applications?: Array<{
    id?: string;
    name?: string;
    type?: string;
    is_active?: boolean;
  }>;
};

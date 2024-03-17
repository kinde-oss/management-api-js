export type apis = {
  /**
   * Unique id of the API.
   */
  id?: string;
  /**
   * The API's name.
   */
  name?: string;
  /**
   * The logical identifier for the API.
   */
  audience?: string;
  /**
   * Whether it is the management API or not.
   */
  is_management_api?: boolean;
};

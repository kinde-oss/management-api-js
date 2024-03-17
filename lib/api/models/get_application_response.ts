export type get_application_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  application?: {
    /**
     * The application's identifier.
     */
    id?: string;
    /**
     * The application's name.
     */
    name?: string;
    /**
     * The application's type.
     */
    type?: string;
    /**
     * The application's client id.
     */
    client_id?: string;
    /**
     * The application's client secret.
     */
    client_secret?: string;
  };
};

export type user_identity = {
  /**
   * The type of identity object created.
   */
  type?: string;
  /**
   * The result of the user creation operation.
   */
  result?: {
    /**
     * True if the user identity was successfully created.
     */
    created?: boolean;
  };
};

export type users_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  users?: Array<{
    /**
     * Unique id of the user in Kinde.
     */
    id?: string;
    /**
     * External id for user.
     */
    provided_id?: string;
    /**
     * Default email address of the user in Kinde.
     */
    email?: string;
    /**
     * User's last name.
     */
    last_name?: string;
    /**
     * User's first name.
     */
    first_name?: string;
    /**
     * Whether the user is currently suspended or not.
     */
    is_suspended?: boolean;
    /**
     * User's profile picture URL.
     */
    picture?: string;
    /**
     * Total number of user sign ins.
     */
    total_sign_ins?: number | null;
    /**
     * Number of consecutive failed user sign ins.
     */
    failed_sign_ins?: number | null;
    /**
     * Last sign in date in ISO 8601 format.
     */
    last_signed_in?: string | null;
    /**
     * Date of user creation in ISO 8601 format.
     */
    created_on?: string | null;
    /**
     * Array of organizations a user belongs to.
     */
    organizations?: Array<string>;
    /**
     * Array of identities belonging to the user.
     */
    identities?: Array<{
      type?: string;
      identity?: string;
    }>;
  }>;
  /**
   * Pagination token.
   */
  next_token?: string;
};

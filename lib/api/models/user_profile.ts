export type user_profile = {
  /**
   * Unique id of the user in Kinde.
   */
  id?: string;
  /**
   * Default email address of the user in Kinde.
   */
  preferred_email?: string;
  /**
   * Value of the user's id in a third-party system when the user is imported into Kinde.
   */
  provided_id?: string | null;
  /**
   * User's last name.
   */
  last_name?: string;
  /**
   * User's first name.
   */
  first_name?: string;
  /**
   * URL that point's to the user's picture or avatar
   */
  picture?: string;
};

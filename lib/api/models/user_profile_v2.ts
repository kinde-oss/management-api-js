export type user_profile_v2 = {
  /**
   * Unique id of the user in Kinde (deprecated).
   */
  id?: string;
  /**
   * Unique id of the user in Kinde.
   */
  sub?: string;
  /**
   * Value of the user's id in a third-party system when the user is imported into Kinde.
   */
  provided_id?: string | null;
  /**
   * Users's first and last name separated by a space.
   */
  name?: string;
  /**
   * User's first name.
   */
  given_name?: string;
  /**
   * User's last name.
   */
  family_name?: string;
  /**
   * Date the user was last updated at (In Unix time).
   */
  updated_at?: number;
  /**
   * User's email address if available.
   */
  email?: string;
  /**
   * URL that point's to the user's picture or avatar
   */
  picture?: string;
};

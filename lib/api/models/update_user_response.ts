export type update_user_response = {
  /**
   * Unique id of the user in Kinde.
   */
  id?: string;
  /**
   * User's first name.
   */
  given_name?: string;
  /**
   * User's last name.
   */
  family_name?: string;
  /**
   * User's preferred email.
   */
  email?: string;
  /**
   * Whether the user is currently suspended or not.
   */
  is_suspended?: boolean;
  /**
   * Whether a password reset has been requested.
   */
  is_password_reset_requested?: boolean;
  /**
   * User's profile picture URL.
   */
  picture?: string;
};

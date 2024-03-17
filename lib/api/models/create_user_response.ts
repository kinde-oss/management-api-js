import type { user_identity } from "./user_identity";

export type create_user_response = {
  /**
   * Unique id of the user in Kinde.
   */
  id?: string;
  /**
   * True if the user was successfully created.
   */
  created?: boolean;
  identities?: Array<user_identity>;
};

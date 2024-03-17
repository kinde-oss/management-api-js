export type token_introspect = {
  /**
   * Indicates the status of the token.
   */
  active?: boolean;
  /**
   * Array of intended token recipients.
   */
  aud?: Array<string>;
  /**
   * Identifier for the requesting client.
   */
  client_id?: string;
  /**
   * Token expiration timestamp.
   */
  exp?: string;
  /**
   * Token issuance timestamp.
   */
  iat?: string;
};

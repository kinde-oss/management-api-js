export type get_organization_feature_flags_response = {
  /**
   * Response code.
   */
  code?: string;
  /**
   * Response message.
   */
  message?: string;
  /**
   * The environment's feature flag settings.
   */
  feature_flags?: Record<
    string,
    {
      type?: "str" | "int" | "bool";
      value?: string;
    }
  >;
};

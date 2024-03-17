import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataCreateFeatureFlag = {
  /**
   * Flag details.
   */
  requestBody: {
    /**
     * The name of the flag.
     */
    name: string;
    /**
     * Description of the flag purpose.
     */
    description?: string;
    /**
     * The flag identifier to use in code.
     */
    key: string;
    /**
     * The variable type.
     */
    type: "str" | "int" | "bool";
    /**
     * Allow the flag to be overridden at a different level.
     */
    allow_override_level?: "env" | "org" | "usr";
    /**
     * Default value for the flag used by environments and organizations.
     */
    default_value: string;
  };
};
export type TDataDeleteFeatureFlag = {
  /**
   * The identifier for the feature flag.
   */
  featureFlagKey: string;
};
export type TDataUpdateFeatureFlag = {
  /**
   * The key identifier for the feature flag.
   */
  featureFlagKey: string;
  /**
   * The name of the flag.
   */
  name: string;
  /**
   * Description of the flag purpose.
   */
  description: string;
  /**
   * The variable type
   */
  type: "str" | "int" | "bool";
  /**
   * Allow the flag to be overridden at a different level.
   */
  allowOverrideLevel: "env" | "org";
  /**
   * Default value for the flag used by environments and organizations.
   */
  defaultValue: string;
};

export class FeatureFlagsService {
  /**
   * Create Feature Flag
   * Create feature flag.
   * @returns success_response Feature flag successfully created
   * @throws ApiError
   */
  public static createFeatureFlag(
    data: TDataCreateFeatureFlag,
  ): CancelablePromise<success_response> {
    const { requestBody } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/feature_flags",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Feature Flag
   * Delete feature flag
   * @returns success_response Feature flag successfully updated.
   * @throws ApiError
   */
  public static deleteFeatureFlag(
    data: TDataDeleteFeatureFlag,
  ): CancelablePromise<success_response> {
    const { featureFlagKey } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/feature_flags/{feature_flag_key}",
      path: {
        feature_flag_key: featureFlagKey,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Replace Feature Flag
   * Update feature flag.
   * @returns success_response Feature flag successfully updated.
   * @throws ApiError
   */
  public static updateFeatureFlag(
    data: TDataUpdateFeatureFlag,
  ): CancelablePromise<success_response> {
    const {
      featureFlagKey,
      name,
      description,
      type,
      allowOverrideLevel,
      defaultValue,
    } = data;
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/feature_flags/{feature_flag_key}",
      path: {
        feature_flag_key: featureFlagKey,
      },
      query: {
        name,
        description,
        type,
        allow_override_level: allowOverrideLevel,
        default_value: defaultValue,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

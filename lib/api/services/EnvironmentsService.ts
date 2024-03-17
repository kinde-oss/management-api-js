import type { get_environment_feature_flags_response } from "../models/get_environment_feature_flags_response";
import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataDeleteEnvironementFeatureFlagOverride = {
  /**
   * The identifier for the feature flag.
   */
  featureFlagKey: string;
};
export type TDataUpdateEnvironementFeatureFlagOverride = {
  /**
   * The identifier for the feature flag.
   */
  featureFlagKey: string;
  /**
   * Flag details.
   */
  requestBody: {
    /**
     * The flag override value.
     */
    value: string;
  };
};

export class EnvironmentsService {
  /**
   * Delete Environment Feature Flag Overrides
   * Delete all environment feature flag overrides.
   * @returns success_response Feature flag overrides deleted successfully.
   * @throws ApiError
   */
  public static deleteEnvironementFeatureFlagOverrides(): CancelablePromise<success_response> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/environment/feature_flags",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * List Environment Feature Flags
   * Get environment feature flags.
   * @returns get_environment_feature_flags_response Feature flags retrieved successfully.
   * @throws ApiError
   */
  public static getEnvironementFeatureFlags(): CancelablePromise<get_environment_feature_flags_response> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/environment/feature_flags",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Delete Environment Feature Flag Override
   * Delete environment feature flag override.
   * @returns success_response Feature flag deleted successfully.
   * @throws ApiError
   */
  public static deleteEnvironementFeatureFlagOverride(
    data: TDataDeleteEnvironementFeatureFlagOverride,
  ): CancelablePromise<success_response> {
    const { featureFlagKey } = data;
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/environment/feature_flags/{feature_flag_key}",
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
   * Update Environment Feature Flag Override
   * Update environment feature flag override.
   * @returns success_response Feature flag override successful
   * @throws ApiError
   */
  public static updateEnvironementFeatureFlagOverride(
    data: TDataUpdateEnvironementFeatureFlagOverride,
  ): CancelablePromise<success_response> {
    const { featureFlagKey, requestBody } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/environment/feature_flags/{feature_flag_key}",
      path: {
        feature_flag_key: featureFlagKey,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

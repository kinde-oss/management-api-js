import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetIndustries = {
  /**
   * Industry Key.
   */
  industryKey?: string;
  /**
   * Industry name.
   */
  name?: string;
};

export class IndustriesService {
  /**
   * List industries and industry keys.
   * Get a list of industries and associated industry keys.
   * @returns success_response A successful response with a list of industries and industry keys.
   * @throws ApiError
   */
  public static getIndustries(
    data: TDataGetIndustries = {},
  ): CancelablePromise<success_response> {
    const { industryKey, name } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/industries",
      query: {
        industry_key: industryKey,
        name,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetTimezones = {
  /**
   * Timezone Key.
   */
  timezoneKey?: string;
  /**
   * Timezone.
   */
  name?: string;
};

export class TimezonesService {
  /**
   * List timezones and timezone IDs.
   * Get a list of timezones and associated timezone keys.
   * @returns success_response A successful response with a list of timezones and timezone keys.
   * @throws ApiError
   */
  public static getTimezones(
    data: TDataGetTimezones = {},
  ): CancelablePromise<success_response> {
    const { timezoneKey, name } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/timezones",
      query: {
        timezone_key: timezoneKey,
        name,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

import type { create_subscriber_success_response } from "../models/create_subscriber_success_response";
import type { get_subscriber_response } from "../models/get_subscriber_response";
import type { get_subscribers_response } from "../models/get_subscribers_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetSubscribers = {
  /**
   * Field and order to sort the result by.
   */
  sort?: "name_asc" | "name_desc" | "email_asc" | "email_desc" | null;
  /**
   * Number of results per page. Defaults to 10 if parameter not sent.
   */
  pageSize?: number | null;
  /**
   * A string to get the next page of results if there are more results.
   */
  nextToken?: string | null;
};
export type TDataCreateSubscriber = {
  /**
   * Subscriber's first name.
   */
  firstName: string;
  /**
   * Subscriber's last name.
   */
  lastName: string | null;
  /**
   * The email address of the subscriber.
   */
  email: string | null;
};
export type TDataGetSubscriber = {
  /**
   * The subscriber's id.
   */
  subscriberId: string;
};

export class SubscribersService {
  /**
   * List Subscribers
   * The returned list can be sorted by full name or email address
   * in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query
   * string parameter.
   *
   * @returns get_subscribers_response Subscriber successfully retrieved.
   * @throws ApiError
   */
  public static getSubscribers(
    data: TDataGetSubscribers = {},
  ): CancelablePromise<get_subscribers_response> {
    const { sort, pageSize, nextToken } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/subscribers",
      query: {
        sort,
        page_size: pageSize,
        next_token: nextToken,
      },
      errors: {
        403: `Bad request.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Create Subscriber
   * Create subscriber.
   * @returns create_subscriber_success_response Subscriber successfully created
   * @throws ApiError
   */
  public static createSubscriber(
    data: TDataCreateSubscriber,
  ): CancelablePromise<create_subscriber_success_response> {
    const { firstName, lastName, email } = data;
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/subscribers",
      query: {
        first_name: firstName,
        last_name: lastName,
        email,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Get Subscriber
   * Retrieve a subscriber record.
   *
   * @returns get_subscriber_response Subscriber successfully retrieved.
   * @throws ApiError
   */
  public static getSubscriber(
    data: TDataGetSubscriber,
  ): CancelablePromise<get_subscriber_response> {
    const { subscriberId } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/subscribers/{subscriber_id}",
      path: {
        subscriber_id: subscriberId,
      },
      errors: {
        400: `Bad request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

import type { success_response } from "../models/success_response";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export type TDataGetBusiness = {
  /**
   * Business code.
   */
  code: string;
  /**
   * Business name.
   */
  name: string;
  /**
   * Email associated with business.
   */
  email: string;
  /**
   * Phone number associated with business.
   */
  phone?: string | null;
  /**
   * The industry your business is in.
   */
  industry?: string;
  /**
   * The timezone your business is in.
   */
  timezone?: string;
  /**
   * Your Privacy policy URL.
   */
  privacyUrl?: string | null;
  /**
   * Your Terms and Conditions URL.
   */
  termsUrl?: string | null;
};
export type TDataUpdateBusiness = {
  /**
   * Business name.
   */
  businessName: string;
  /**
   * Email associated with business.
   */
  primaryEmail: string;
  /**
   * Phone number associated with business.
   */
  primaryPhone?: string | null;
  /**
   * The key of the industry your business is in.
   */
  industryKey?: string;
  /**
   * The ID of the timezone your business is in.
   */
  timezoneId?: string;
  /**
   * Your Privacy policy URL.
   */
  privacyUrl?: string | null;
  /**
   * Your Terms and Conditions URL.
   */
  termsUrl?: string | null;
  /**
   * Display "Powered by Kinde" on your sign up, sign in, and subscription pages.
   */
  isShowKindeBranding?: string | null;
  /**
   * Show a policy acceptance checkbox on sign up.
   */
  isClickWrap?: boolean | null;
  /**
   * Your Kinde Perk code.
   */
  partnerCode?: string | null;
};

export class BusinessService {
  /**
   * List business details
   * Get your business details.
   * @returns success_response A successful response with your business details.
   * @throws ApiError
   */
  public static getBusiness(
    data: TDataGetBusiness,
  ): CancelablePromise<success_response> {
    const {
      code,
      name,
      email,
      phone,
      industry,
      timezone,
      privacyUrl,
      termsUrl,
    } = data;
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/business",
      query: {
        code,
        name,
        email,
        phone,
        industry,
        timezone,
        privacy_url: privacyUrl,
        terms_url: termsUrl,
      },
      errors: {
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }

  /**
   * Update business details
   * Update business details.
   * @returns success_response Business successfully updated.
   * @throws ApiError
   */
  public static updateBusiness(
    data: TDataUpdateBusiness,
  ): CancelablePromise<success_response> {
    const {
      businessName,
      primaryEmail,
      primaryPhone,
      industryKey,
      timezoneId,
      privacyUrl,
      termsUrl,
      isShowKindeBranding,
      isClickWrap,
      partnerCode,
    } = data;
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/business",
      query: {
        business_name: businessName,
        primary_email: primaryEmail,
        primary_phone: primaryPhone,
        industry_key: industryKey,
        timezone_id: timezoneId,
        privacy_url: privacyUrl,
        terms_url: termsUrl,
        is_show_kinde_branding: isShowKindeBranding,
        is_click_wrap: isClickWrap,
        partner_code: partnerCode,
      },
      errors: {
        400: `Invalid request.`,
        403: `Invalid credentials.`,
        429: `Request was throttled.`,
      },
    });
  }
}

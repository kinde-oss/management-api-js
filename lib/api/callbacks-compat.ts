// This file adds backward compatibility for deprecated Callbacks method names
// It patches the Callbacks class with deprecated method aliases
// This file should NOT be auto-generated and will persist across regenerations

import { Callbacks as CallbacksOriginal } from "./sdk.gen";
import type { Options } from "./client";
import type {
  GetCallbackUrlsData,
  AddRedirectCallbackUrlsData,
  ReplaceRedirectCallbackUrlsData,
  DeleteCallbackUrlsData,
  GetLogoutUrlsData,
  AddLogoutRedirectUrlsData,
  ReplaceLogoutRedirectUrlsData,
  DeleteLogoutUrlsData,
} from "./types.gen";

// Type definition for deprecated methods
interface DeprecatedCallbacksMethods {
  /**
   * @deprecated Use `getCallbackUrls` instead. This method will be removed in a future version.
   */
  getCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<GetCallbackUrlsData, ThrowOnError>,
  ): ReturnType<typeof CallbacksOriginal.getCallbackUrls<ThrowOnError>>;

  /**
   * @deprecated Use `addRedirectCallbackUrls` instead. This method will be removed in a future version.
   */
  addRedirectCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<AddRedirectCallbackUrlsData, ThrowOnError>,
  ): ReturnType<typeof CallbacksOriginal.addRedirectCallbackUrls<ThrowOnError>>;

  /**
   * @deprecated Use `replaceRedirectCallbackUrls` instead. This method will be removed in a future version.
   */
  replaceRedirectCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<ReplaceRedirectCallbackUrlsData, ThrowOnError>,
  ): ReturnType<
    typeof CallbacksOriginal.replaceRedirectCallbackUrls<ThrowOnError>
  >;

  /**
   * @deprecated Use `deleteCallbackUrls` instead. This method will be removed in a future version.
   */
  deleteCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<DeleteCallbackUrlsData, ThrowOnError>,
  ): ReturnType<typeof CallbacksOriginal.deleteCallbackUrls<ThrowOnError>>;

  /**
   * @deprecated Use `getLogoutUrls` instead. This method will be removed in a future version.
   */
  getLogoutUrLs<ThrowOnError extends boolean = false>(
    options: Options<GetLogoutUrlsData, ThrowOnError>,
  ): ReturnType<typeof CallbacksOriginal.getLogoutUrls<ThrowOnError>>;

  /**
   * @deprecated Use `addLogoutRedirectUrls` instead. This method will be removed in a future version.
   */
  addLogoutRedirectUrLs<ThrowOnError extends boolean = false>(
    options: Options<AddLogoutRedirectUrlsData, ThrowOnError>,
  ): ReturnType<typeof CallbacksOriginal.addLogoutRedirectUrls<ThrowOnError>>;

  /**
   * @deprecated Use `replaceLogoutRedirectUrls` instead. This method will be removed in a future version.
   */
  replaceLogoutRedirectUrLs<ThrowOnError extends boolean = false>(
    options: Options<ReplaceLogoutRedirectUrlsData, ThrowOnError>,
  ): ReturnType<
    typeof CallbacksOriginal.replaceLogoutRedirectUrls<ThrowOnError>
  >;

  /**
   * @deprecated Use `deleteLogoutUrls` instead. This method will be removed in a future version.
   */
  deleteLogoutUrLs<ThrowOnError extends boolean = false>(
    options: Options<DeleteLogoutUrlsData, ThrowOnError>,
  ): ReturnType<typeof CallbacksOriginal.deleteLogoutUrls<ThrowOnError>>;
}

// Add deprecated method aliases to the Callbacks class
// Using Object.assign to add static methods to the class
Object.assign(CallbacksOriginal, {
  /**
   * @deprecated Use `getCallbackUrls` instead. This method will be removed in a future version.
   */
  getCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<GetCallbackUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.getCallbackUrls(options);
  },

  /**
   * @deprecated Use `addRedirectCallbackUrls` instead. This method will be removed in a future version.
   */
  addRedirectCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<AddRedirectCallbackUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.addRedirectCallbackUrls(options);
  },

  /**
   * @deprecated Use `replaceRedirectCallbackUrls` instead. This method will be removed in a future version.
   */
  replaceRedirectCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<ReplaceRedirectCallbackUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.replaceRedirectCallbackUrls(options);
  },

  /**
   * @deprecated Use `deleteCallbackUrls` instead. This method will be removed in a future version.
   */
  deleteCallbackUrLs<ThrowOnError extends boolean = false>(
    options: Options<DeleteCallbackUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.deleteCallbackUrls(options);
  },

  /**
   * @deprecated Use `getLogoutUrls` instead. This method will be removed in a future version.
   */
  getLogoutUrLs<ThrowOnError extends boolean = false>(
    options: Options<GetLogoutUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.getLogoutUrls(options);
  },

  /**
   * @deprecated Use `addLogoutRedirectUrls` instead. This method will be removed in a future version.
   */
  addLogoutRedirectUrLs<ThrowOnError extends boolean = false>(
    options: Options<AddLogoutRedirectUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.addLogoutRedirectUrls(options);
  },

  /**
   * @deprecated Use `replaceLogoutRedirectUrls` instead. This method will be removed in a future version.
   */
  replaceLogoutRedirectUrLs<ThrowOnError extends boolean = false>(
    options: Options<ReplaceLogoutRedirectUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.replaceLogoutRedirectUrls(options);
  },

  /**
   * @deprecated Use `deleteLogoutUrls` instead. This method will be removed in a future version.
   */
  deleteLogoutUrLs<ThrowOnError extends boolean = false>(
    options: Options<DeleteLogoutUrlsData, ThrowOnError>,
  ) {
    return CallbacksOriginal.deleteLogoutUrls(options);
  },
});

// Export the Callbacks class with proper typing that includes deprecated methods
export const Callbacks = CallbacksOriginal as typeof CallbacksOriginal &
  DeprecatedCallbacksMethods;

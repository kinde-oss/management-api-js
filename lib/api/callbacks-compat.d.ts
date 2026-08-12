// TypeScript declaration file for Callbacks deprecated methods
// This file provides type information for the deprecated methods added at runtime

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

// Import the Callbacks class type to extend it
import type { Callbacks as CallbacksClass } from "./sdk.gen";

declare module "./sdk.gen" {
  // Extend the Callbacks class constructor with deprecated static methods
  interface CallbacksStatic {
    /**
     * @deprecated Use `getCallbackUrls` instead. This method will be removed in a future version.
     */
    getCallbackUrLs<ThrowOnError extends boolean = false>(
      options: Options<GetCallbackUrlsData, ThrowOnError>,
    ): ReturnType<typeof CallbacksClass.getCallbackUrls<ThrowOnError>>;

    /**
     * @deprecated Use `addRedirectCallbackUrls` instead. This method will be removed in a future version.
     */
    addRedirectCallbackUrLs<ThrowOnError extends boolean = false>(
      options: Options<AddRedirectCallbackUrlsData, ThrowOnError>,
    ): ReturnType<typeof CallbacksClass.addRedirectCallbackUrls<ThrowOnError>>;

    /**
     * @deprecated Use `replaceRedirectCallbackUrls` instead. This method will be removed in a future version.
     */
    replaceRedirectCallbackUrLs<ThrowOnError extends boolean = false>(
      options: Options<ReplaceRedirectCallbackUrlsData, ThrowOnError>,
    ): ReturnType<
      typeof CallbacksClass.replaceRedirectCallbackUrls<ThrowOnError>
    >;

    /**
     * @deprecated Use `deleteCallbackUrls` instead. This method will be removed in a future version.
     */
    deleteCallbackUrLs<ThrowOnError extends boolean = false>(
      options: Options<DeleteCallbackUrlsData, ThrowOnError>,
    ): ReturnType<typeof CallbacksClass.deleteCallbackUrls<ThrowOnError>>;

    /**
     * @deprecated Use `getLogoutUrls` instead. This method will be removed in a future version.
     */
    getLogoutUrLs<ThrowOnError extends boolean = false>(
      options: Options<GetLogoutUrlsData, ThrowOnError>,
    ): ReturnType<typeof CallbacksClass.getLogoutUrls<ThrowOnError>>;

    /**
     * @deprecated Use `addLogoutRedirectUrls` instead. This method will be removed in a future version.
     */
    addLogoutRedirectUrLs<ThrowOnError extends boolean = false>(
      options: Options<AddLogoutRedirectUrlsData, ThrowOnError>,
    ): ReturnType<typeof CallbacksClass.addLogoutRedirectUrls<ThrowOnError>>;

    /**
     * @deprecated Use `replaceLogoutRedirectUrls` instead. This method will be removed in a future version.
     */
    replaceLogoutRedirectUrLs<ThrowOnError extends boolean = false>(
      options: Options<ReplaceLogoutRedirectUrlsData, ThrowOnError>,
    ): ReturnType<
      typeof CallbacksClass.replaceLogoutRedirectUrls<ThrowOnError>
    >;

    /**
     * @deprecated Use `deleteLogoutUrls` instead. This method will be removed in a future version.
     */
    deleteLogoutUrLs<ThrowOnError extends boolean = false>(
      options: Options<DeleteLogoutUrlsData, ThrowOnError>,
    ): ReturnType<typeof CallbacksClass.deleteLogoutUrls<ThrowOnError>>;
  }

  // Merge the static methods with the class constructor
  type Callbacks = CallbacksClass & CallbacksStatic;
  var Callbacks: typeof CallbacksClass & CallbacksStatic;
}

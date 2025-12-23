// TypeScript declaration file for Callbacks deprecated methods
// This file provides type information for the deprecated methods added at runtime

import type { CancelablePromise } from "./core/CancelablePromise";
import type {
  GetCallbackUrlsData,
  GetCallbackUrlsResponse,
  AddRedirectCallbackUrlsData,
  AddRedirectCallbackUrlsResponse,
  ReplaceRedirectCallbackUrlsData,
  ReplaceRedirectCallbackUrlsResponse,
  DeleteCallbackUrlsData,
  DeleteCallbackUrlsResponse,
  GetLogoutUrlsData,
  GetLogoutUrlsResponse,
  AddLogoutRedirectUrlsData,
  AddLogoutRedirectUrlsResponse,
  ReplaceLogoutRedirectUrlsData,
  ReplaceLogoutRedirectUrlsResponse,
  DeleteLogoutUrlsData,
  DeleteLogoutUrlsResponse,
} from "./types.gen";

// Import the Callbacks class type to extend it
import type { Callbacks as CallbacksClass } from "./sdk.gen";

declare module "./sdk.gen" {
  // Extend the Callbacks class constructor with deprecated static methods
  // Using type augmentation for static methods
  interface CallbacksStatic {
    /**
     * @deprecated Use `getCallbackUrls` instead. This method will be removed in a future version.
     */
    getCallbackUrLs(
      data: GetCallbackUrlsData,
    ): CancelablePromise<GetCallbackUrlsResponse>;

    /**
     * @deprecated Use `addRedirectCallbackUrls` instead. This method will be removed in a future version.
     */
    addRedirectCallbackUrLs(
      data: AddRedirectCallbackUrlsData,
    ): CancelablePromise<AddRedirectCallbackUrlsResponse>;

    /**
     * @deprecated Use `replaceRedirectCallbackUrls` instead. This method will be removed in a future version.
     */
    replaceRedirectCallbackUrLs(
      data: ReplaceRedirectCallbackUrlsData,
    ): CancelablePromise<ReplaceRedirectCallbackUrlsResponse>;

    /**
     * @deprecated Use `deleteCallbackUrls` instead. This method will be removed in a future version.
     */
    deleteCallbackUrLs(
      data: DeleteCallbackUrlsData,
    ): CancelablePromise<DeleteCallbackUrlsResponse>;

    /**
     * @deprecated Use `getLogoutUrls` instead. This method will be removed in a future version.
     */
    getLogoutUrLs(
      data: GetLogoutUrlsData,
    ): CancelablePromise<GetLogoutUrlsResponse>;

    /**
     * @deprecated Use `addLogoutRedirectUrls` instead. This method will be removed in a future version.
     */
    addLogoutRedirectUrLs(
      data: AddLogoutRedirectUrlsData,
    ): CancelablePromise<AddLogoutRedirectUrlsResponse>;

    /**
     * @deprecated Use `replaceLogoutRedirectUrls` instead. This method will be removed in a future version.
     */
    replaceLogoutRedirectUrLs(
      data: ReplaceLogoutRedirectUrlsData,
    ): CancelablePromise<ReplaceLogoutRedirectUrlsResponse>;

    /**
     * @deprecated Use `deleteLogoutUrls` instead. This method will be removed in a future version.
     */
    deleteLogoutUrLs(
      data: DeleteLogoutUrlsData,
    ): CancelablePromise<DeleteLogoutUrlsResponse>;
  }

  // Merge the static methods with the class constructor
  type Callbacks = CallbacksClass & CallbacksStatic;
  var Callbacks: typeof CallbacksClass & CallbacksStatic;
}

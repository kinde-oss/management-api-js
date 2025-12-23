// This file adds backward compatibility for deprecated Callbacks method names
// It patches the Callbacks class with deprecated method aliases
// This file should NOT be auto-generated and will persist across regenerations

import { Callbacks as CallbacksOriginal } from "./sdk.gen";
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

// Type definition for deprecated methods
interface DeprecatedCallbacksMethods {
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

// Add deprecated method aliases to the Callbacks class
// Using Object.assign to add static methods to the class
Object.assign(CallbacksOriginal, {
  /**
   * @deprecated Use `getCallbackUrls` instead. This method will be removed in a future version.
   */
  getCallbackUrLs(
    data: GetCallbackUrlsData,
  ): CancelablePromise<GetCallbackUrlsResponse> {
    return CallbacksOriginal.getCallbackUrls(data);
  },

  /**
   * @deprecated Use `addRedirectCallbackUrls` instead. This method will be removed in a future version.
   */
  addRedirectCallbackUrLs(
    data: AddRedirectCallbackUrlsData,
  ): CancelablePromise<AddRedirectCallbackUrlsResponse> {
    return CallbacksOriginal.addRedirectCallbackUrls(data);
  },

  /**
   * @deprecated Use `replaceRedirectCallbackUrls` instead. This method will be removed in a future version.
   */
  replaceRedirectCallbackUrLs(
    data: ReplaceRedirectCallbackUrlsData,
  ): CancelablePromise<ReplaceRedirectCallbackUrlsResponse> {
    return CallbacksOriginal.replaceRedirectCallbackUrls(data);
  },

  /**
   * @deprecated Use `deleteCallbackUrls` instead. This method will be removed in a future version.
   */
  deleteCallbackUrLs(
    data: DeleteCallbackUrlsData,
  ): CancelablePromise<DeleteCallbackUrlsResponse> {
    return CallbacksOriginal.deleteCallbackUrls(data);
  },

  /**
   * @deprecated Use `getLogoutUrls` instead. This method will be removed in a future version.
   */
  getLogoutUrLs(
    data: GetLogoutUrlsData,
  ): CancelablePromise<GetLogoutUrlsResponse> {
    return CallbacksOriginal.getLogoutUrls(data);
  },

  /**
   * @deprecated Use `addLogoutRedirectUrls` instead. This method will be removed in a future version.
   */
  addLogoutRedirectUrLs(
    data: AddLogoutRedirectUrlsData,
  ): CancelablePromise<AddLogoutRedirectUrlsResponse> {
    return CallbacksOriginal.addLogoutRedirectUrls(data);
  },

  /**
   * @deprecated Use `replaceLogoutRedirectUrls` instead. This method will be removed in a future version.
   */
  replaceLogoutRedirectUrLs(
    data: ReplaceLogoutRedirectUrlsData,
  ): CancelablePromise<ReplaceLogoutRedirectUrlsResponse> {
    return CallbacksOriginal.replaceLogoutRedirectUrls(data);
  },

  /**
   * @deprecated Use `deleteLogoutUrls` instead. This method will be removed in a future version.
   */
  deleteLogoutUrLs(
    data: DeleteLogoutUrlsData,
  ): CancelablePromise<DeleteLogoutUrlsResponse> {
    return CallbacksOriginal.deleteLogoutUrls(data);
  },
});

// Export the Callbacks class with proper typing that includes deprecated methods
export const Callbacks = CallbacksOriginal as typeof CallbacksOriginal &
  DeprecatedCallbacksMethods;

import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  ApIs,
  Apis,
  Oauth,
  OAuth,
  Callbacks,
  Users,
  init,
  type GetCallbackUrlsData,
  type GetLogoutUrlsData,
} from "../lib/main";
import createFetchMock from "vitest-fetch-mock";

const fetchMock = createFetchMock(vi);

describe("Breaking Changes and Regressions", () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    init({
      kindeDomain: "https://api.example.com",
      clientId: "your-client-id",
      clientSecret: "your-client-secret",
    });
  });

  afterEach(() => {
    fetchMock.resetMocks();
    vi.useRealTimers();
  });

  // Mock token response
  const mockTokenResponse = () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        access_token: "access_token",
        refresh_token: "refresh_token",
        id_token: "id_token",
      }),
    );
  };

  describe("Class Name Changes", () => {
    describe("ApIs → Apis", () => {
      it("should export deprecated ApIs class (for backward compatibility)", () => {
        expect(ApIs).toBeDefined();
        expect(typeof ApIs).toBe("function");
      });

      it("should export new Apis class", () => {
        expect(Apis).toBeDefined();
        expect(typeof Apis).toBe("function");
      });

      it("should have ApIs be an alias of Apis", () => {
        expect(ApIs).toBe(Apis);
      });

      it("should be able to use ApIs class methods", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
            apis: [],
            next_token: null,
          }),
        );

        const result = await ApIs.getApis({});
        expect(result).toBeDefined();
      });
    });
  });

  describe("Callbacks Method Name Changes", () => {
    describe("getCallbackUrLs → getCallbackUrls", () => {
      it("should have deprecated method name getCallbackUrLs (for backward compatibility)", () => {
        expect(Callbacks.getCallbackUrLs).toBeDefined();
        expect(typeof Callbacks.getCallbackUrLs).toBe("function");
      });

      it("should have new method name getCallbackUrls", () => {
        expect(Callbacks.getCallbackUrls).toBeDefined();
        expect(typeof Callbacks.getCallbackUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            redirect_urls: ["https://example.com/callback"],
          }),
        );

        const data: GetCallbackUrlsData = { appId: "test-app-id" };
        const result = await Callbacks.getCallbackUrls(data);
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name getCallbackUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            redirect_urls: ["https://example.com/callback"],
          }),
        );

        const data: GetCallbackUrlsData = { appId: "test-app-id" };
        const result = await Callbacks.getCallbackUrLs(data);
        expect(result).toBeDefined();
      });
    });

    describe("addRedirectCallbackUrLs → addRedirectCallbackUrls", () => {
      it("should have deprecated method name addRedirectCallbackUrLs (for backward compatibility)", () => {
        expect(Callbacks.addRedirectCallbackUrLs).toBeDefined();
        expect(typeof Callbacks.addRedirectCallbackUrLs).toBe("function");
      });

      it("should have new method name addRedirectCallbackUrls", () => {
        expect(Callbacks.addRedirectCallbackUrls).toBeDefined();
        expect(typeof Callbacks.addRedirectCallbackUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.addRedirectCallbackUrls({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/callback"] },
        });
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name addRedirectCallbackUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.addRedirectCallbackUrLs({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/callback"] },
        });
        expect(result).toBeDefined();
      });
    });

    describe("replaceRedirectCallbackUrLs → replaceRedirectCallbackUrls", () => {
      it("should have deprecated method name replaceRedirectCallbackUrLs (for backward compatibility)", () => {
        expect(Callbacks.replaceRedirectCallbackUrLs).toBeDefined();
        expect(typeof Callbacks.replaceRedirectCallbackUrLs).toBe("function");
      });

      it("should have new method name replaceRedirectCallbackUrls", () => {
        expect(Callbacks.replaceRedirectCallbackUrls).toBeDefined();
        expect(typeof Callbacks.replaceRedirectCallbackUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.replaceRedirectCallbackUrls({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/callback"] },
        });
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name replaceRedirectCallbackUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.replaceRedirectCallbackUrLs({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/callback"] },
        });
        expect(result).toBeDefined();
      });
    });

    describe("deleteCallbackUrLs → deleteCallbackUrls", () => {
      it("should have deprecated method name deleteCallbackUrLs (for backward compatibility)", () => {
        expect(Callbacks.deleteCallbackUrLs).toBeDefined();
        expect(typeof Callbacks.deleteCallbackUrLs).toBe("function");
      });

      it("should have new method name deleteCallbackUrls", () => {
        expect(Callbacks.deleteCallbackUrls).toBeDefined();
        expect(typeof Callbacks.deleteCallbackUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.deleteCallbackUrls({
          appId: "test-app-id",
          urls: "https://example.com/callback",
        });
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name deleteCallbackUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.deleteCallbackUrLs({
          appId: "test-app-id",
          urls: "https://example.com/callback",
        });
        expect(result).toBeDefined();
      });
    });

    describe("getLogoutUrLs → getLogoutUrls", () => {
      it("should have deprecated method name getLogoutUrLs (for backward compatibility)", () => {
        expect(Callbacks.getLogoutUrLs).toBeDefined();
        expect(typeof Callbacks.getLogoutUrLs).toBe("function");
      });

      it("should have new method name getLogoutUrls", () => {
        expect(Callbacks.getLogoutUrls).toBeDefined();
        expect(typeof Callbacks.getLogoutUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            logout_urls: ["https://example.com/logout"],
          }),
        );

        const data: GetLogoutUrlsData = { appId: "test-app-id" };
        const result = await Callbacks.getLogoutUrls(data);
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name getLogoutUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            logout_urls: ["https://example.com/logout"],
          }),
        );

        const data: GetLogoutUrlsData = { appId: "test-app-id" };
        const result = await Callbacks.getLogoutUrLs(data);
        expect(result).toBeDefined();
      });
    });

    describe("addLogoutRedirectUrLs → addLogoutRedirectUrls", () => {
      it("should have deprecated method name addLogoutRedirectUrLs (for backward compatibility)", () => {
        expect(Callbacks.addLogoutRedirectUrLs).toBeDefined();
        expect(typeof Callbacks.addLogoutRedirectUrLs).toBe("function");
      });

      it("should have new method name addLogoutRedirectUrls", () => {
        expect(Callbacks.addLogoutRedirectUrls).toBeDefined();
        expect(typeof Callbacks.addLogoutRedirectUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.addLogoutRedirectUrls({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/logout"] },
        });
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name addLogoutRedirectUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.addLogoutRedirectUrLs({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/logout"] },
        });
        expect(result).toBeDefined();
      });
    });

    describe("replaceLogoutRedirectUrLs → replaceLogoutRedirectUrls", () => {
      it("should have deprecated method name replaceLogoutRedirectUrLs (for backward compatibility)", () => {
        expect(Callbacks.replaceLogoutRedirectUrLs).toBeDefined();
        expect(typeof Callbacks.replaceLogoutRedirectUrLs).toBe("function");
      });

      it("should have new method name replaceLogoutRedirectUrls", () => {
        expect(Callbacks.replaceLogoutRedirectUrls).toBeDefined();
        expect(typeof Callbacks.replaceLogoutRedirectUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.replaceLogoutRedirectUrls({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/logout"] },
        });
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name replaceLogoutRedirectUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.replaceLogoutRedirectUrLs({
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/logout"] },
        });
        expect(result).toBeDefined();
      });
    });

    describe("deleteLogoutUrLs → deleteLogoutUrls", () => {
      it("should have deprecated method name deleteLogoutUrLs (for backward compatibility)", () => {
        expect(Callbacks.deleteLogoutUrLs).toBeDefined();
        expect(typeof Callbacks.deleteLogoutUrLs).toBe("function");
      });

      it("should have new method name deleteLogoutUrls", () => {
        expect(Callbacks.deleteLogoutUrls).toBeDefined();
        expect(typeof Callbacks.deleteLogoutUrls).toBe("function");
      });

      it("should work with new method name", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.deleteLogoutUrls({
          appId: "test-app-id",
          urls: "https://example.com/logout",
        });
        expect(result).toBeDefined();
      });

      it("should work with deprecated method name deleteLogoutUrLs", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
          }),
        );

        const result = await Callbacks.deleteLogoutUrLs({
          appId: "test-app-id",
          urls: "https://example.com/logout",
        });
        expect(result).toBeDefined();
      });
    });
  });

  describe("New Parameters and Features", () => {
    describe("Users.getUsers() - phone parameter", () => {
      it("should accept phone parameter", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
            users: [],
            next_token: null,
          }),
        );

        const result = await Users.getUsers({ phone: "+1234567890" });
        expect(result).toBeDefined();
      });
    });

    describe("Users.getUsers() - billing expand option", () => {
      it("should accept billing in expand parameter", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
            users: [
              {
                id: "user-123",
                billing: {
                  customer_id: "cust-123",
                },
              },
            ],
            next_token: null,
          }),
        );

        const result = await Users.getUsers({ expand: "billing" });
        expect(result).toBeDefined();
        if (result.users && result.users.length > 0) {
          expect(result.users[0].billing).toBeDefined();
          expect(result.users[0].billing?.customer_id).toBe("cust-123");
        }
      });

      it("should accept multiple expand options including billing", async () => {
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({
            code: "200",
            message: "Success",
            users: [
              {
                id: "user-123",
                organizations: ["org-1"],
                identities: [{ type: "email", identity: "test@example.com" }],
                billing: {
                  customer_id: "cust-123",
                },
              },
            ],
            next_token: null,
          }),
        );

        const result = await Users.getUsers({
          expand: "organizations,identities,billing",
        });
        expect(result).toBeDefined();
        if (result.users && result.users.length > 0) {
          expect(result.users[0].billing).toBeDefined();
          expect(result.users[0].organizations).toBeDefined();
          expect(result.users[0].identities).toBeDefined();
        }
      });
    });
  });

  describe("Type Name Changes", () => {
    it("should export new GetCallbackUrlsData type", () => {
      // This is a compile-time check, but we can verify it's importable
      const data: GetCallbackUrlsData = { appId: "test" };
      expect(data.appId).toBe("test");
    });

    it("should export new GetCallbackUrlsResponse type", async () => {
      mockTokenResponse();
      fetchMock.mockResponseOnce(
        JSON.stringify({
          redirect_urls: ["https://example.com/callback"],
        }),
      );

      const result = await Callbacks.getCallbackUrls({ appId: "test-app-id" });
      // Type should be GetCallbackUrlsResponse (redirect_callback_urls)
      // The method should work and return a result
      expect(result).toBeDefined();
    });

    it("should export new GetLogoutUrlsData type", () => {
      const data: GetLogoutUrlsData = { appId: "test" };
      expect(data.appId).toBe("test");
    });
  });

  describe("New Classes", () => {
    it("should export ApiKeys class", async () => {
      const { ApiKeys } = await import("../lib/main");
      expect(ApiKeys).toBeDefined();
      expect(typeof ApiKeys).toBe("function");
    });

    it("should export BillingAgreements class", async () => {
      const { BillingAgreements } = await import("../lib/main");
      expect(BillingAgreements).toBeDefined();
      expect(typeof BillingAgreements).toBe("function");
    });

    it("should export BillingEntitlements class", async () => {
      const { BillingEntitlements } = await import("../lib/main");
      expect(BillingEntitlements).toBeDefined();
      expect(typeof BillingEntitlements).toBe("function");
    });

    it("should export BillingMeterUsage class", async () => {
      const { BillingMeterUsage } = await import("../lib/main");
      expect(BillingMeterUsage).toBeDefined();
      expect(typeof BillingMeterUsage).toBe("function");
    });
  });
});

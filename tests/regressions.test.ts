import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  ApIs,
  Apis,
  ApiError,
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
    vi.restoreAllMocks();
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
    it("should have all 8 deprecated method aliases present", () => {
      const deprecated = [
        "getCallbackUrLs",
        "addRedirectCallbackUrLs",
        "replaceRedirectCallbackUrLs",
        "deleteCallbackUrLs",
        "getLogoutUrLs",
        "addLogoutRedirectUrLs",
        "replaceLogoutRedirectUrLs",
        "deleteLogoutUrLs",
      ] as const;
      for (const method of deprecated) {
        expect(Callbacks[method], `missing: ${method}`).toBeDefined();
      }
    });

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

        const data: GetCallbackUrlsData = { path: { app_id: "test-app-id" } };
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

        const data: GetCallbackUrlsData = { path: { app_id: "test-app-id" } };
        const result = await Callbacks.getCallbackUrLs(data);
        expect(result).toBeDefined();
      });

      it("should delegate getCallbackUrLs to getCallbackUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "getCallbackUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(JSON.stringify({ redirect_urls: [] }));

        const data: GetCallbackUrlsData = { appId: "test-app-id" };
        await Callbacks.getCallbackUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/callback"] },
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/callback"] },
        });
        expect(result).toBeDefined();
      });

      it("should delegate addRedirectCallbackUrLs to addRedirectCallbackUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "addRedirectCallbackUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({ code: "200", message: "Success" }),
        );

        const data = {
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/callback"] },
        };
        await Callbacks.addRedirectCallbackUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/callback"] },
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/callback"] },
        });
        expect(result).toBeDefined();
      });

      it("should delegate replaceRedirectCallbackUrLs to replaceRedirectCallbackUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "replaceRedirectCallbackUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({ code: "200", message: "Success" }),
        );

        const data = {
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/callback"] },
        };
        await Callbacks.replaceRedirectCallbackUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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
          path: { app_id: "test-app-id" },
          query: { urls: "https://example.com/callback" },
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
          path: { app_id: "test-app-id" },
          query: { urls: "https://example.com/callback" },
        });
        expect(result).toBeDefined();
      });

      it("should delegate deleteCallbackUrLs to deleteCallbackUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "deleteCallbackUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({ code: "200", message: "Success" }),
        );

        const data = {
          appId: "test-app-id",
          urls: "https://example.com/callback",
        };
        await Callbacks.deleteCallbackUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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

        const data: GetLogoutUrlsData = { path: { app_id: "test-app-id" } };
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

        const data: GetLogoutUrlsData = { path: { app_id: "test-app-id" } };
        const result = await Callbacks.getLogoutUrLs(data);
        expect(result).toBeDefined();
      });

      it("should delegate getLogoutUrLs to getLogoutUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "getLogoutUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(JSON.stringify({ logout_urls: [] }));

        const data: GetLogoutUrlsData = { appId: "test-app-id" };
        await Callbacks.getLogoutUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/logout"] },
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/logout"] },
        });
        expect(result).toBeDefined();
      });

      it("should delegate addLogoutRedirectUrLs to addLogoutRedirectUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "addLogoutRedirectUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({ code: "200", message: "Success" }),
        );

        const data = {
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/logout"] },
        };
        await Callbacks.addLogoutRedirectUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/logout"] },
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
          path: { app_id: "test-app-id" },
          body: { urls: ["https://example.com/logout"] },
        });
        expect(result).toBeDefined();
      });

      it("should delegate replaceLogoutRedirectUrLs to replaceLogoutRedirectUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "replaceLogoutRedirectUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({ code: "200", message: "Success" }),
        );

        const data = {
          appId: "test-app-id",
          requestBody: { urls: ["https://example.com/logout"] },
        };
        await Callbacks.replaceLogoutRedirectUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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
          path: { app_id: "test-app-id" },
          query: { urls: "https://example.com/logout" },
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
          path: { app_id: "test-app-id" },
          query: { urls: "https://example.com/logout" },
        });
        expect(result).toBeDefined();
      });

      it("should delegate deleteLogoutUrLs to deleteLogoutUrls with same arguments", async () => {
        const spy = vi.spyOn(Callbacks, "deleteLogoutUrls");
        mockTokenResponse();
        fetchMock.mockResponseOnce(
          JSON.stringify({ code: "200", message: "Success" }),
        );

        const data = {
          appId: "test-app-id",
          urls: "https://example.com/logout",
        };
        await Callbacks.deleteLogoutUrLs(data);

        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(data);
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

        const result = await Users.getUsers({
          query: { phone: "+1234567890" },
        });
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

        const result = await Users.getUsers({ query: { expand: "billing" } });
        expect(result).toBeDefined();
        type BillingUser = { billing?: { customer_id?: string } };
        const users = (result as { users?: BillingUser[] }).users;
        expect(users).toBeDefined();
        expect(users!.length).toBeGreaterThan(0);
        expect(users![0].billing).toBeDefined();
        expect(users![0].billing?.customer_id).toBe("cust-123");
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
          query: { expand: "organizations,identities,billing" },
        });
        expect(result).toBeDefined();
        type ExpandedUser = {
          billing?: unknown;
          organizations?: unknown;
          identities?: unknown;
        };
        const users = (result as { users?: ExpandedUser[] }).users;
        expect(users).toBeDefined();
        expect(users!.length).toBeGreaterThan(0);
        expect(users![0].billing).toBeDefined();
        expect(users![0].organizations).toBeDefined();
        expect(users![0].identities).toBeDefined();
      });
    });
  });

  describe("Type Name Changes", () => {
    it("should export new GetCallbackUrlsData type", () => {
      // This is a compile-time check, but we can verify it's importable
      const data: GetCallbackUrlsData = { path: { app_id: "test" } };
      expect(data.path.app_id).toBe("test");
    });

    it("should export new GetCallbackUrlsResponse type", async () => {
      mockTokenResponse();
      fetchMock.mockResponseOnce(
        JSON.stringify({
          redirect_urls: ["https://example.com/callback"],
        }),
      );

      const result = await Callbacks.getCallbackUrls({
        path: { app_id: "test-app-id" },
      });
      // Type should be GetCallbackUrlsResponse (redirect_callback_urls)
      // The method should work and return a result
      expect(result).toBeDefined();
    });

    it("should export new GetLogoutUrlsData type", () => {
      const data: GetLogoutUrlsData = { path: { app_id: "test" } };
      expect(data.path.app_id).toBe("test");
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

    it("should export Directories class", async () => {
      const { Directories } = await import("../lib/main");
      expect(Directories).toBeDefined();
      expect(typeof Directories).toBe("function");
    });
  });

  describe("Error Handling", () => {
    it("should throw ApiError on 401 unauthorized from API", async () => {
      mockTokenResponse();
      fetchMock.mockResponseOnce(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
      });

      await expect(
        Callbacks.getCallbackUrls({ appId: "test-app-id" }),
      ).rejects.toThrow(ApiError);
    });

    it("should throw ApiError on 404 not found", async () => {
      mockTokenResponse();
      fetchMock.mockResponseOnce(JSON.stringify({ error: "not_found" }), {
        status: 404,
      });

      await expect(
        Callbacks.getCallbackUrls({ appId: "non-existent-app" }),
      ).rejects.toThrow(ApiError);
    });

    it("should throw ApiError on 500 server error", async () => {
      mockTokenResponse();
      fetchMock.mockResponseOnce(
        JSON.stringify({ error: "internal_server_error" }),
        { status: 500 },
      );

      await expect(
        Callbacks.getCallbackUrls({ appId: "test-app-id" }),
      ).rejects.toThrow(ApiError);
    });

    it("should include status code on ApiError", async () => {
      mockTokenResponse();
      fetchMock.mockResponseOnce(JSON.stringify({ error: "not_found" }), {
        status: 404,
      });

      const error = await Callbacks.getCallbackUrls({
        appId: "non-existent-app",
      }).catch((e: unknown) => e);

      expect(error).toBeInstanceOf(ApiError);
      expect((error as ApiError).status).toBe(404);
    });
  });

  describe("init configuration", () => {
    it("should throw if kindeDomain is not set", () => {
      expect(() =>
        init({ clientId: "id", clientSecret: "secret" } as Parameters<
          typeof init
        >[0]),
      ).toThrow();
    });

    it("should accept kindeDomain with trailing slash", () => {
      expect(() =>
        init({
          kindeDomain: "https://api.example.com/",
          clientId: "id",
          clientSecret: "secret",
        }),
      ).not.toThrow();
    });

    it("should accept kindeDomain without trailing slash", () => {
      expect(() =>
        init({
          kindeDomain: "https://api.example.com",
          clientId: "id",
          clientSecret: "secret",
        }),
      ).not.toThrow();
    });
  });
});

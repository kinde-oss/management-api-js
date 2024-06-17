import { configType, init, kindeConfig } from './config'; // Adjust the import path as necessary
import { describe, beforeEach, afterAll, it, expect, vi } from 'vitest';

describe('init method', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules(); // Clears any cache between tests
    process.env = { ...originalEnv }; // Reset environment variables
    Object.keys(kindeConfig).forEach((key: keyof configType) => {
        if (key !== 'tokenStore') {
           kindeConfig[key] = '';
        } else {
            kindeConfig[key] = undefined;
        }
    });
  });

  afterAll(() => {
    process.env = originalEnv; // Restore original environment variables
  });

  it('should update kindeConfig with provided environment variables', () => {
    process.env.KINDE_DOMAIN = 'https://example.com';
    process.env.KINDE_MANAGEMENT_CLIENT_ID = 'testClientIdEnv';
    process.env.KINDE_MANAGEMENT_CLIENT_SECRET = 'testClientSecretEnv';

    init();

    expect(kindeConfig.kindeDomain).toBe(process.env.KINDE_DOMAIN); // Should prefer environment variable over input
    expect(kindeConfig.clientId).toBe(process.env.KINDE_MANAGEMENT_CLIENT_ID); // Should prefer environment variable over input
    expect(kindeConfig.clientSecret).toBe(process.env.KINDE_MANAGEMENT_CLIENT_SECRET); // Should prefer environment variable over input
    expect(kindeConfig.audience).toBe(`${process.env.KINDE_DOMAIN}/api`); // Should construct audience correctly
  });

  it('should update kindeConfig with provided config values', () => {
    process.env.KINDE_DOMAIN = 'https://example.com';
    process.env.KINDE_MANAGEMENT_CLIENT_ID = 'testClientIdEnv';
    process.env.KINDE_MANAGEMENT_CLIENT_SECRET = 'testClientSecretEnv';

    const testConfig = {
      kindeDomain: 'https://test.com',
      clientId: 'testClientId',
      clientSecret: 'testClientSecret',
    };

    init(testConfig);

    expect(kindeConfig.kindeDomain).toBe(testConfig.kindeDomain); // Should prefer environment variable over input
    expect(kindeConfig.clientId).toBe(testConfig.clientId); // Should prefer environment variable over input
    expect(kindeConfig.clientSecret).toBe(testConfig.clientSecret); // Should prefer environment variable over input
    expect(kindeConfig.audience).toBe(`${process.env.KINDE_DOMAIN}/api`); // Should construct audience correctly
  });

  it('should update kindeConfig with provided config values and environment variables', () => {
    process.env.KINDE_DOMAIN = 'https://example.com';
    process.env.KINDE_MANAGEMENT_CLIENT_ID = 'testClientIdEnv';
    process.env.KINDE_MANAGEMENT_CLIENT_SECRET = 'testClientSecretEnv';

    const testConfig: Pick<configType, "kindeDomain" | "clientId" | "clientSecret"> = {
      kindeDomain: 'https://test.com',
      clientSecret: 'testClientSecret',
    };

    init(testConfig);

    expect(kindeConfig.kindeDomain).toBe(testConfig.kindeDomain); // Should prefer environment variable over input
    expect(kindeConfig.clientId).toBe(process.env.KINDE_MANAGEMENT_CLIENT_ID); // Should prefer environment variable over input
    expect(kindeConfig.clientSecret).toBe(testConfig.clientSecret); // Should prefer environment variable over input
    expect(kindeConfig.audience).toBe(`${process.env.KINDE_DOMAIN}/api`); // Should construct audience correctly
  });

  it('should throw an error if kindeDomain and KINDE_DOMAIN env are not set', () => {
    delete process.env.KINDE_DOMAIN;

    expect(() => {
      init();
    }).toThrow('kindeDomain or env KINDE_DOMAIN is not set');
  });
});
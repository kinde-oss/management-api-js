export interface TokenStore {
  getToken(): Promise<string>;
  setToken(tokens: string): Promise<void>;
  clearToken(): Promise<void>;
}

export const kindeConfig: {
  clientId: string;
  clientSecret: string;
  kinde_domain: string;
  audience: string;
  token: string;
  tokenStore?: TokenStore;
} = {
  clientId: "client_id",
  clientSecret: "client",
  kinde_domain: "https://kinde.com",
  audience: "audience",
  token: "",
};

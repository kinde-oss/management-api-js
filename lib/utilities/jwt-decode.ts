export type JWTDecoded = {
  aud: string[];
  azp: string;
  billing: {
    has_payment_details: boolean;
  };
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  org_code: string;
  permissions: string[];
  scp: string[];
  sub: string;
};

/**
 * Decode JWT token
 * @param token - JWT token to be decoded
 * @returns - Decoded JWT token
 *
 * @example
 * jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
 * Returns:
 *  {
 *    sub: "1234567890",
 *    name: "John Doe",
 *    iat: 1516239022
 *  }
 */
export const jwtDecode = (token?: string): JWTDecoded | null => {
  if (!token) {
    return null;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join(""),
  );
  return JSON.parse(jsonPayload);
};

import { type JWTDecoded, jwtDecode } from "../jwt-decode";
/**
 * Checks if the given audience is present in the token
 * @param token - JWT to be checked, can be a string or a decoded JWT token
 * @returns - True if the audience is present in the token, false otherwise
 */
export const checkAudience = (
  token?: string | JWTDecoded,
  audience?: string,
): boolean => {
  if (!audience) {
    return false;
  }
  const decoded = typeof token === "string" ? jwtDecode(token) : token;
  if (!decoded) {
    return false;
  }
  return decoded.aud.includes(audience);
};

import { jwtDecode } from "./jwt-decode";

export const decodeWebhook = (token: string): any => {
  const decoded = jwtDecode(token);
  return decoded;
};

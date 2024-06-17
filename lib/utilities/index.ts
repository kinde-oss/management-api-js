import { setToken } from "./setToken";
import { getToken } from "./getToken";
import { jwtDecoder } from "@kinde/jwt-decoder";
import { checkAudience } from "./token/checkAudience";
import { validateToken } from "./token/validateToken";

// TODO: Deprecate jwtDecode in favor of jwtDecoder
const jwtDecode = jwtDecoder;
export { setToken, getToken, jwtDecode, jwtDecoder, checkAudience, validateToken };

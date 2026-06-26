declare module "@kinde/jwt-decoder" {
  export enum TokenPart {
    header = 0,
    body = 1,
  }

  export interface JWTDecoded {
    aud?: string | string[];
    exp?: number;
    [key: string]: unknown;
  }

  export function jwtDecoder<T = JWTDecoded>(
    token?: string,
    part?: TokenPart,
  ): T | null;
}

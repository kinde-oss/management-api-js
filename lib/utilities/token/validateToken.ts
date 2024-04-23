import { kindeConfig } from "../../config";
import { JwtRsaVerifier } from 'aws-jwt-verify';

async function verifyJwt(token: string, domain: string, audience?: string): Promise<boolean> {
  const verifier = JwtRsaVerifier.create({
    issuer: domain,
    audience: audience || null,
    jwksUri: `${domain}/.well-known/jwks.json`,
  });

  try {
    await verifier.verify(token);
    return true;
  } catch (ex) {
    console.log(`Token Validation Failed: ${(ex as Error).message}`);
    return false;
  }
}

export const validateToken = async (token?: string, audience?: string) => {
  if (!token) {
    return false;
  }
  console.log(kindeConfig.kindeDomain);
  return verifyJwt(token, kindeConfig.kindeDomain, audience);
};

// Checks the built declarations the way a consumer using
// moduleResolution: nodenext sees them. If the types stop resolving, every
// export becomes `any` and the @ts-expect-error lines below fail as unused.
import { Organizations } from "@kinde/management-api-js";

// @ts-expect-error Organizations is a class, not a number
export const notANumber: number = Organizations;

export const createOrg = () =>
  Organizations.createOrganization({ body: { name: "Acme" } });

export const createOrgLegacy = () =>
  // @ts-expect-error requestBody was replaced by body
  Organizations.createOrganization({ requestBody: { name: "Acme" } });

import type { IOrganization } from "./common";

export interface IBaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: number;
  googleId: string;
  role: string;

  name: string;

  organizationId: string;
  organizations: Array<Partial<IOrganization>>;
}

export type organization_user_permission = {
  id?: string;
  key?: string;
  name?: string;
  description?: string;
  roles?: Array<{
    id?: string;
    key?: string;
  }>;
};

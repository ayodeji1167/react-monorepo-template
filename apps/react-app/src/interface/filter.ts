export interface IBaseFilter {
  organizationId?: string | null;
  name?: string | null;
  page?: number;
  limit?: number;
  sortBy?: string;
}

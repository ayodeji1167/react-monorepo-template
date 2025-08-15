export interface ApiResponse<T = any> extends IMeta {
  status: boolean;
  result: T;
}

export interface IMeta {
  limit: number;
  page: number;
  count: number;
  exceedCount: boolean;
  exceedTotalPages: boolean;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
}

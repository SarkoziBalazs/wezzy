import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  createdAt?: SortOrder;
  formatted?: SortOrder;
  id?: SortOrder;
  raw?: SortOrder;
  updatedAt?: SortOrder;
};

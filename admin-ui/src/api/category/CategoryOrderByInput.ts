import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  assetId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};

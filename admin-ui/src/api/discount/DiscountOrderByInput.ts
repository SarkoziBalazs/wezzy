import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  priceId?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
  validUntil?: SortOrder;
  value?: SortOrder;
};

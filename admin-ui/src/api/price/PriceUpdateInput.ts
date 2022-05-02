import { DiscountUpdateManyWithoutPricesInput } from "./DiscountUpdateManyWithoutPricesInput";

export type PriceUpdateInput = {
  discounts?: DiscountUpdateManyWithoutPricesInput;
  formatted?: string | null;
  raw?: number | null;
};

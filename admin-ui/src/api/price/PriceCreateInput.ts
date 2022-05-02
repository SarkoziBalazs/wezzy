import { DiscountCreateNestedManyWithoutPricesInput } from "./DiscountCreateNestedManyWithoutPricesInput";

export type PriceCreateInput = {
  discounts?: DiscountCreateNestedManyWithoutPricesInput;
  formatted?: string | null;
  raw?: number | null;
};

import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";

export type DiscountCreateInput = {
  price?: PriceWhereUniqueInput | null;
  validFrom?: Date | null;
  validUntil?: Date | null;
  value?: number | null;
};

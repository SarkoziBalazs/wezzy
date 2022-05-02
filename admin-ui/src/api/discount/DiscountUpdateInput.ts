import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";

export type DiscountUpdateInput = {
  price?: PriceWhereUniqueInput | null;
  validFrom?: Date | null;
  validUntil?: Date | null;
  value?: number | null;
};

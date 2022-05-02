import { StringFilter } from "../../util/StringFilter";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";

export type DiscountWhereInput = {
  id?: StringFilter;
  price?: PriceWhereUniqueInput;
};

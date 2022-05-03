import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  asset?: AssetWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  slug?: StringNullableFilter;
};

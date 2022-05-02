import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { CategoryListRelationFilter } from "./CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  asset?: AssetWhereUniqueInput;
  categories?: CategoryListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  slug?: StringNullableFilter;
};

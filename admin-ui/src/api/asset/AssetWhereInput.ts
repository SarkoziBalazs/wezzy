import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetWhereInput = {
  alt?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};

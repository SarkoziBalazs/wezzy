import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  categories?: CategoryUpdateManyWithoutCategoriesInput;
  name?: string | null;
  parent?: CategoryWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
  slug?: string | null;
};

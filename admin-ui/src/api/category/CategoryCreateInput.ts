import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { CategoryCreateNestedManyWithoutCategoriesInput } from "./CategoryCreateNestedManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  categories?: CategoryCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
  parent?: CategoryWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  slug?: string | null;
};

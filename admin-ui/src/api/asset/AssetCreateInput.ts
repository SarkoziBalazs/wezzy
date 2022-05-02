import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProductCreateNestedManyWithoutAssetsInput } from "./ProductCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  alt?: string | null;
  category?: CategoryWhereUniqueInput;
  products?: ProductCreateNestedManyWithoutAssetsInput;
  url?: string | null;
};

import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProductUpdateManyWithoutAssetsInput } from "./ProductUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  alt?: string | null;
  category?: CategoryWhereUniqueInput;
  products?: ProductUpdateManyWithoutAssetsInput;
  url?: string | null;
};

import { AssetUpdateManyWithoutProductsInput } from "./AssetUpdateManyWithoutProductsInput";
import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  assets?: AssetUpdateManyWithoutProductsInput;
  categories?: CategoryUpdateManyWithoutProductsInput;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};

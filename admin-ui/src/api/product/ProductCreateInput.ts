import { AssetCreateNestedManyWithoutProductsInput } from "./AssetCreateNestedManyWithoutProductsInput";
import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  assets?: AssetCreateNestedManyWithoutProductsInput;
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};

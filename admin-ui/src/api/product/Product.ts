import { Asset } from "../asset/Asset";
import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  assets?: Array<Asset>;
  categories?: Array<Category>;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};

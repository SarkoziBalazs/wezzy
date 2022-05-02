import { Category } from "../category/Category";
import { Product } from "../product/Product";

export type Asset = {
  alt: string | null;
  category?: Category;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
  url: string | null;
};

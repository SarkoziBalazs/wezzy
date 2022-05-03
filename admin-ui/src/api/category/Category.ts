import { Asset } from "../asset/Asset";
import { Product } from "../product/Product";

export type Category = {
  asset?: Asset | null;
  children?: Array<Category>;
  createdAt: Date;
  id: string;
  name: string | null;
  parent?: Category | null;
  products?: Array<Product>;
  slug: string | null;
  updatedAt: Date;
};

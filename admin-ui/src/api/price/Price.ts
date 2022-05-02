import { Discount } from "../discount/Discount";

export type Price = {
  createdAt: Date;
  discounts?: Array<Discount>;
  formatted: string | null;
  id: string;
  raw: number | null;
  updatedAt: Date;
};

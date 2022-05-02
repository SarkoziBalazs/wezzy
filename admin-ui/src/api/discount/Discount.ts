import { Price } from "../price/Price";

export type Discount = {
  createdAt: Date;
  id: string;
  price?: Price | null;
  updatedAt: Date;
  validFrom: Date | null;
  validUntil: Date | null;
  value: number | null;
};

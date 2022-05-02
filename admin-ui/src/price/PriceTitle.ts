import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "formatted";

export const PriceTitle = (record: TPrice): string => {
  return record.formatted || record.id;
};

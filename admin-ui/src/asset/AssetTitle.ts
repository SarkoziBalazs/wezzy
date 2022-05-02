import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "alt";

export const AssetTitle = (record: TAsset): string => {
  return record.alt || record.id;
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";

export const CategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Categories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Parent"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

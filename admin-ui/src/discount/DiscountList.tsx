import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRICE_TITLE_FIELD } from "../price/PriceTitle";

export const DiscountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Discounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Price" source="price.id" reference="Price">
          <TextField source={PRICE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Valid From" source="validFrom" />
        <TextField label="Valid Until" source="validUntil" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};

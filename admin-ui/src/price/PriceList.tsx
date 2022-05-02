import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PriceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Prices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Formatted" source="formatted" />
        <TextField label="ID" source="id" />
        <TextField label="Raw" source="raw" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

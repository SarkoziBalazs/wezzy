import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRICE_TITLE_FIELD } from "../price/PriceTitle";

export const DiscountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Price" source="price.id" reference="Price">
          <TextField source={PRICE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Valid From" source="validFrom" />
        <TextField label="Valid Until" source="validUntil" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};

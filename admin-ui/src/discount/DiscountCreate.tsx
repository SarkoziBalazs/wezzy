import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { PriceTitle } from "../price/PriceTitle";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="price.id" reference="Price" label="Price">
          <SelectInput optionText={PriceTitle} />
        </ReferenceInput>
        <DateTimeInput label="Valid From" source="validFrom" />
        <DateTimeInput label="Valid Until" source="validUntil" />
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};

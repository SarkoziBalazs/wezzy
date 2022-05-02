import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { PriceTitle } from "../price/PriceTitle";

export const DiscountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="price.id" reference="Price" label="Price">
          <SelectInput optionText={PriceTitle} />
        </ReferenceInput>
        <DateTimeInput label="Valid From" source="validFrom" />
        <DateTimeInput label="Valid Until" source="validUntil" />
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};

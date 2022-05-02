import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";

export const PriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="discounts"
          reference="Discount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscountTitle} />
        </ReferenceArrayInput>
        <TextInput label="Formatted" source="formatted" />
        <NumberInput label="Raw" source="raw" />
      </SimpleForm>
    </Create>
  );
};

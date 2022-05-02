/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscountUpdateManyWithoutPricesInput } from "./DiscountUpdateManyWithoutPricesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
@InputType()
class PriceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DiscountUpdateManyWithoutPricesInput,
  })
  @ValidateNested()
  @Type(() => DiscountUpdateManyWithoutPricesInput)
  @IsOptional()
  @Field(() => DiscountUpdateManyWithoutPricesInput, {
    nullable: true,
  })
  discounts?: DiscountUpdateManyWithoutPricesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  formatted?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  raw?: number | null;
}
export { PriceUpdateInput };

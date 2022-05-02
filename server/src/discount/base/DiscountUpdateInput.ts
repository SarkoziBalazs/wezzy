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
import { PriceWhereUniqueInput } from "../../price/base/PriceWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsInt } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class DiscountUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PriceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PriceWhereUniqueInput)
  @IsOptional()
  @Field(() => PriceWhereUniqueInput, {
    nullable: true,
  })
  price?: PriceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  validFrom?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  validUntil?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number | null;
}
export { DiscountUpdateInput };

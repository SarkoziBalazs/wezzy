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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductUpdateManyWithoutAssetsInput } from "./ProductUpdateManyWithoutAssetsInput";
@InputType()
class AssetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  alt?: string | null;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutAssetsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutAssetsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutAssetsInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutAssetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;
}
export { AssetUpdateInput };

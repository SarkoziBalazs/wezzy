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
import { AssetWhereUniqueInput } from "../../asset/base/AssetWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CategoryUpdateManyWithoutCategoriesInput } from "./CategoryUpdateManyWithoutCategoriesInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";
@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetWhereUniqueInput)
  @IsOptional()
  @Field(() => AssetWhereUniqueInput, {
    nullable: true,
  })
  asset?: AssetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CategoryUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => CategoryUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => CategoryUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

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
  parent?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string | null;
}
export { CategoryUpdateInput };
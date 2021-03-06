/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DiscountService } from "../discount.service";
import { DiscountCreateInput } from "./DiscountCreateInput";
import { DiscountWhereInput } from "./DiscountWhereInput";
import { DiscountWhereUniqueInput } from "./DiscountWhereUniqueInput";
import { DiscountFindManyArgs } from "./DiscountFindManyArgs";
import { DiscountUpdateInput } from "./DiscountUpdateInput";
import { Discount } from "./Discount";
@swagger.ApiBearerAuth()
export class DiscountControllerBase {
  constructor(
    protected readonly service: DiscountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Discount })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: DiscountCreateInput): Promise<Discount> {
    return await this.service.create({
      data: {
        ...data,

        price: data.price
          ? {
              connect: data.price,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        price: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        validFrom: true,
        validUntil: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Discount] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DiscountFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Discount[]> {
    const args = plainToClass(DiscountFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        price: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        validFrom: true,
        validUntil: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        price: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        validFrom: true,
        validUntil: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() data: DiscountUpdateInput
  ): Promise<Discount | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          price: data.price
            ? {
                connect: data.price,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          price: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          validFrom: true,
          validUntil: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          price: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          validFrom: true,
          validUntil: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

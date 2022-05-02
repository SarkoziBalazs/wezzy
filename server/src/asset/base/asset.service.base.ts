/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Asset, Product, Category } from "@prisma/client";

export class AssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AssetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssetFindManyArgs>
  ): Promise<number> {
    return this.prisma.asset.count(args);
  }

  async findMany<T extends Prisma.AssetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssetFindManyArgs>
  ): Promise<Asset[]> {
    return this.prisma.asset.findMany(args);
  }
  async findOne<T extends Prisma.AssetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssetFindUniqueArgs>
  ): Promise<Asset | null> {
    return this.prisma.asset.findUnique(args);
  }
  async create<T extends Prisma.AssetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssetCreateArgs>
  ): Promise<Asset> {
    return this.prisma.asset.create<T>(args);
  }
  async update<T extends Prisma.AssetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssetUpdateArgs>
  ): Promise<Asset> {
    return this.prisma.asset.update<T>(args);
  }
  async delete<T extends Prisma.AssetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssetDeleteArgs>
  ): Promise<Asset> {
    return this.prisma.asset.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.asset
      .findUnique({
        where: { id: parentId },
      })
      .products(args);
  }

  async getCategory(parentId: string): Promise<Category | null> {
    return this.prisma.asset
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}

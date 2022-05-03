/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Category, Product, Asset } from "@prisma/client";

export class CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<number> {
    return this.prisma.category.count(args);
  }

  async findMany<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<Category[]> {
    return this.prisma.category.findMany(args);
  }
  async findOne<T extends Prisma.CategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>
  ): Promise<Category | null> {
    return this.prisma.category.findUnique(args);
  }
  async create<T extends Prisma.CategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>
  ): Promise<Category> {
    return this.prisma.category.create<T>(args);
  }
  async update<T extends Prisma.CategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>
  ): Promise<Category> {
    return this.prisma.category.update<T>(args);
  }
  async delete<T extends Prisma.CategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>
  ): Promise<Category> {
    return this.prisma.category.delete(args);
  }

  async findChildren(
    parentId: string,
    args: Prisma.CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .children(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .products(args);
  }

  async getAsset(parentId: string): Promise<Asset | null> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .asset();
  }

  async getParent(parentId: string): Promise<Category | null> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .parent();
  }
}

import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ProductCreateArgs) {
    return this.prismaService.product.create(createDto);
  }
  createMany(createManyDto: Prisma.ProductCreateManyArgs) {
    return this.prismaService.product.createMany(createManyDto);
  }

  findMany(findManyDto: Prisma.ProductFindManyArgs) {
    return this.prismaService.product.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.ProductFindFirstArgs) {
    return this.prismaService.product.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.ProductUpdateArgs) {
    return this.prismaService.product.update(updateDto);
  }

  delete(deleteDto: Prisma.ProductDeleteArgs) {
    return this.prismaService.product.delete(deleteDto);
  }
}

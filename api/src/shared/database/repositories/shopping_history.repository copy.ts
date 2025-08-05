import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ShoppingHistoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ShoppingHistoryCreateArgs) {
    return this.prismaService.shoppingHistory.create(createDto);
  }

  findMany(findManyDto: Prisma.ShoppingHistoryFindManyArgs) {
    return this.prismaService.shoppingHistory.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.ShoppingHistoryFindFirstArgs) {
    return this.prismaService.shoppingHistory.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.ShoppingHistoryUpdateArgs) {
    return this.prismaService.shoppingHistory.update(updateDto);
  }

  delete(deleteDto: Prisma.ShoppingHistoryDeleteArgs) {
    return this.prismaService.shoppingHistory.delete(deleteDto);
  }

  deleteMany(deleteManyDto: Prisma.ShoppingHistoryDeleteManyArgs) {
    return this.prismaService.shoppingHistory.deleteMany(deleteManyDto);
  }
}

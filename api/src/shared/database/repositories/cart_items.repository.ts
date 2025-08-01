import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CartItemsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.CartItemCreateArgs) {
    return this.prismaService.cartItem.create(createDto);
  }

  findMany(findManyDto: Prisma.CartItemFindManyArgs) {
    return this.prismaService.cartItem.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.CartItemFindFirstArgs) {
    return this.prismaService.cartItem.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.CartItemUpdateArgs) {
    return this.prismaService.cartItem.update(updateDto);
  }

  delete(deleteDto: Prisma.CartItemDeleteArgs) {
    return this.prismaService.cartItem.delete(deleteDto);
  }
}

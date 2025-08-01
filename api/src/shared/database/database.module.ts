import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CartItemsRepository } from './repositories/cart_items.repository';
import { ProductsRepository } from './repositories/products.repository';
@Global()
@Module({
  providers: [PrismaService, CartItemsRepository, ProductsRepository],
  exports: [CartItemsRepository, ProductsRepository],
})
export class DatabaseModule {}

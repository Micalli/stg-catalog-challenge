import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CartItemsRepository } from './repositories/cart_items.repository';
import { ProductsRepository } from './repositories/products.repository';
import { ShoppingHistoryRepository } from './repositories/shopping_history.repository copy';
@Global()
@Module({
  providers: [
    PrismaService,
    CartItemsRepository,
    ProductsRepository,
    ShoppingHistoryRepository,
  ],
  exports: [CartItemsRepository, ProductsRepository, ShoppingHistoryRepository],
})
export class DatabaseModule {}

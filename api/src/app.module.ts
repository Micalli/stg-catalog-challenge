import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { CartItemsModule } from './modules/cart_items/cart_items.module';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { ShoppingHistoryModule } from './modules/shopping_history/shopping_history.module';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    CartItemsModule,
    ProductsModule,
    UsersModule,
    ShoppingHistoryModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}

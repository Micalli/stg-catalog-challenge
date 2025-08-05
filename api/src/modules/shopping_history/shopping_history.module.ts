import { Module } from '@nestjs/common';
import { ShoppingHistoryService } from './shopping_history.service';
import { ShoppingHistoryController } from './shopping_history.controller';

@Module({
  controllers: [ShoppingHistoryController],
  providers: [ShoppingHistoryService],
})
export class ShoppingHistoryModule {}

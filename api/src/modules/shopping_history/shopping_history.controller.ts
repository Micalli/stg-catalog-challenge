import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ShoppingHistoryService } from './shopping_history.service';
import { CreateShoppingHistoryDto } from './dto/create-shopping_history.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('shopping-history')
export class ShoppingHistoryController {
  constructor(
    private readonly shoppingHistoryService: ShoppingHistoryService,
  ) {}

  @Post()
  create(
    @Body() createShoppingHistoryDto: CreateShoppingHistoryDto,
    @ActiveUserId() userId: string,
  ) {
    return this.shoppingHistoryService.create(createShoppingHistoryDto, userId);
  }

  @Get()
  findByUser(@ActiveUserId() userId: string) {
    return this.shoppingHistoryService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingHistoryService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingHistoryService.remove(+id);
  }
}

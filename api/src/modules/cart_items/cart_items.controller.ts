import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';

@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }
  @Post('add')
  addProduct(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.addProduct(createCartItemDto);
  }

  @Delete('remove/:cartItemId')
  removeProduct(@Param('cartItemId') cartItemId: string) {
    return this.cartItemsService.removeProduct(cartItemId);
  }
}

import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { UpdateQuantityCartItemDto } from './dto/update-quantity-cart_item.dto';

@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post('/add')
  addProduct(
    @Body() createCartItemDto: CreateCartItemDto,
    @ActiveUserId() userId1: string,
  ) {
    return this.cartItemsService.addProduct(createCartItemDto, userId1);
  }
  @Post('/update/quantity/:cartItemId')
  updateProductQuantity(
    @Param('cartItemId') cartItemId: string,
    @ActiveUserId() userId: string,
    @Body() updateQuantityCartItemDto: UpdateQuantityCartItemDto,
  ) {
    return this.cartItemsService.updateProductQuantity(
      cartItemId,
      userId,
      updateQuantityCartItemDto,
    );
  }

  @Get()
  findUserCart(@ActiveUserId() userId: string) {
    return this.cartItemsService.findUserCart(userId);
  }

  @Delete('remove/:cartItemId')
  removeProduct(@Param('cartItemId') cartItemId: string) {
    return this.cartItemsService.removeProduct(cartItemId);
  }

  @Delete('reset')
  resetCart(@ActiveUserId() userId: string) {
    return this.cartItemsService.resetCart(userId);
  }
}

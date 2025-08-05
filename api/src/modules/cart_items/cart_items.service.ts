import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { CartItemsRepository } from 'src/shared/database/repositories/cart_items.repository';
import { UpdateQuantityCartItemDto } from './dto/update-quantity-cart_item.dto';

@Injectable()
export class CartItemsService {
  constructor(private readonly cartItemsRepository: CartItemsRepository) {}
  async create(createCartItemDto: CreateCartItemDto) {
    const { productId, userId } = createCartItemDto;

    const alreadyCartExists = await this.cartItemsRepository.findFirst({
      where: {
        userId,
      },
    });
    if (alreadyCartExists) {
      return { cartItemId: '123' };
    }
    return await this.cartItemsRepository.create({
      data: {
        productId,
        quantity: 1,
        userId,
      },
    });
  }

  async addProduct(createCartItemDto: CreateCartItemDto) {
    const { productId, userId } = createCartItemDto;
    console.log('123');

    // Verificar se o produto já existe no carrinho do usuário
    const existingCartItem = await this.cartItemsRepository.findFirst({
      where: {
        userId,
        productId,
      },
    });
    console.log('456');

    if (existingCartItem) {
      // Se o produto já existe, aumentar a quantidade
      return await this.cartItemsRepository.update({
        where: { id: existingCartItem.id },
        data: {
          quantity: existingCartItem.quantity + 1,
        },
      });
    } else {
      // Se o produto não existe, adicionar um novo item
      return await this.cartItemsRepository.create({
        data: {
          productId,
          quantity: 1,
          userId,
        },
      });
    }
  }

  async removeProduct(cartItemId: string) {
    return await this.cartItemsRepository.delete({
      where: { id: cartItemId },
    });
  }

  async resetCart(userId: string) {
    return await this.cartItemsRepository.deleteMany({
      where: { userId },
    });
  }

  async updateProductQuantity(
    cartItemId: string,
    userId: string,
    updateQuantityCartItemDto: UpdateQuantityCartItemDto,
  ) {
    const { newQuantity } = updateQuantityCartItemDto;
    return await this.cartItemsRepository.update({
      where: { id: cartItemId, userId },
      data: {
        quantity: newQuantity,
      },
    });
  }

  async findUserCart(userId: string) {
    const data = await this.cartItemsRepository.findMany({
      where: { userId },
      include: {
        product: true,
      },
    });
    console.log('🚀 ~ CartItemsService ~ findUserCart ~ data:', data);
    return data;
  }
}

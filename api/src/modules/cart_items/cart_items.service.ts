import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { CartItemsRepository } from 'src/shared/database/repositories/cart_items.repository';

@Injectable()
export class CartItemsService {
  constructor(private readonly cartItemsRepository: CartItemsRepository) {}
  async create(createCartItemDto: CreateCartItemDto) {
    const { productId, quantity, userId } = createCartItemDto;

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
        quantity,
        userId,
      },
    });
  }

  async addProduct(createCartItemDto: CreateCartItemDto) {
    const { productId, quantity, userId } = createCartItemDto;

    // Verificar se o produto já existe no carrinho do usuário
    const existingCartItem = await this.cartItemsRepository.findFirst({
      where: {
        userId,
        productId,
      },
    });

    if (existingCartItem) {
      // Se o produto já existe, aumentar a quantidade
      return await this.cartItemsRepository.update({
        where: { id: existingCartItem.id },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
      });
    } else {
      // Se o produto não existe, adicionar um novo item
      return await this.cartItemsRepository.create({
        data: {
          productId,
          quantity,
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

  async findUserCart(userId: string) {
    return await this.cartItemsRepository.findMany({
      where: { userId },
      include: {
        product: true,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateShoppingHistoryDto } from './dto/create-shopping_history.dto';
import { ShoppingHistoryRepository } from 'src/shared/database/repositories/shopping_history.repository copy';

@Injectable()
export class ShoppingHistoryService {
  constructor(
    private readonly shoppingHistoryRepository: ShoppingHistoryRepository,
  ) {}

  async create(
    createShoppingHistoryDto: CreateShoppingHistoryDto,
    userId: string,
  ) {
    const { totalPrice, products } = createShoppingHistoryDto;
    const data = await this.shoppingHistoryRepository.create({
      data: {
        userId,
        totalPrice,
        products: JSON.parse(JSON.stringify(products)),
      },
    });
    console.log('🚀 ~ ShoppingHistoryService ~ create ~ data:', data);
    return data;
  }

  async findByUser(userId: string) {
    return await this.shoppingHistoryRepository.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingHistory`;
  }
}

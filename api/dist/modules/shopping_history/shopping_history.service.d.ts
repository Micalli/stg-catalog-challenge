import { CreateShoppingHistoryDto } from './dto/create-shopping_history.dto';
import { ShoppingHistoryRepository } from 'src/shared/database/repositories/shopping_history.repository copy';
export declare class ShoppingHistoryService {
    private readonly shoppingHistoryRepository;
    constructor(shoppingHistoryRepository: ShoppingHistoryRepository);
    create(createShoppingHistoryDto: CreateShoppingHistoryDto, userId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        products: import("@prisma/client/runtime/library").JsonValue;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }>;
    findByUser(userId: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        products: import("@prisma/client/runtime/library").JsonValue;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: number): string;
    remove(id: number): string;
}

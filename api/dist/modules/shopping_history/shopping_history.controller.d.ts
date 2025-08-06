import { ShoppingHistoryService } from './shopping_history.service';
import { CreateShoppingHistoryDto } from './dto/create-shopping_history.dto';
export declare class ShoppingHistoryController {
    private readonly shoppingHistoryService;
    constructor(shoppingHistoryService: ShoppingHistoryService);
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
    findOne(id: string): string;
    remove(id: string): string;
}

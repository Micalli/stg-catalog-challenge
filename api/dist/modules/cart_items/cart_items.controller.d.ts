import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateQuantityCartItemDto } from './dto/update-quantity-cart_item.dto';
export declare class CartItemsController {
    private readonly cartItemsService;
    constructor(cartItemsService: CartItemsService);
    create(createCartItemDto: CreateCartItemDto): Promise<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    } | {
        cartItemId: string;
    }>;
    addProduct(createCartItemDto: CreateCartItemDto): Promise<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }>;
    updateProductQuantity(cartItemId: string, userId: string, updateQuantityCartItemDto: UpdateQuantityCartItemDto): Promise<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }>;
    findUserCart(userId: string): Promise<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }[]>;
    removeProduct(cartItemId: string): Promise<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }>;
    resetCart(userId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}

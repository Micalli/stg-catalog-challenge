import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findMany(category: string, page?: number, limit?: number): Promise<{
        products: {
            name: string;
            id: string;
            createdAt: Date;
            description: string;
            price: import("@prisma/client/runtime/library").Decimal;
            imageUrl: string;
            category: string;
        }[];
        maxProductPrice: number;
        pagination: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    findByCategory(category: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        imageUrl: string;
        category: string;
    }[]>;
    findById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        imageUrl: string;
        category: string;
    }>;
}

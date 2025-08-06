import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from 'src/shared/database/repositories/products.repository';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    create(createProductDto: CreateProductDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findMany(page: number, limit: number, category?: string): Promise<{
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

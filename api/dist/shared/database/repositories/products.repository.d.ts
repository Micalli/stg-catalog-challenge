import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class ProductsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.ProductCreateArgs): Prisma.Prisma__ProductClient<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: Prisma.Decimal;
        imageUrl: string;
        category: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    createMany(createManyDto: Prisma.ProductCreateManyArgs): Prisma.PrismaPromise<Prisma.BatchPayload>;
    findMany(findManyDto: Prisma.ProductFindManyArgs): Prisma.PrismaPromise<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: Prisma.Decimal;
        imageUrl: string;
        category: string;
    }[]>;
    count(countDto: Prisma.ProductCountArgs): Prisma.PrismaPromise<number>;
    findFirst(findFirstDto: Prisma.ProductFindFirstArgs): Prisma.Prisma__ProductClient<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: Prisma.Decimal;
        imageUrl: string;
        category: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(updateDto: Prisma.ProductUpdateArgs): Prisma.Prisma__ProductClient<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: Prisma.Decimal;
        imageUrl: string;
        category: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    delete(deleteDto: Prisma.ProductDeleteArgs): Prisma.Prisma__ProductClient<{
        name: string;
        id: string;
        createdAt: Date;
        description: string;
        price: Prisma.Decimal;
        imageUrl: string;
        category: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}

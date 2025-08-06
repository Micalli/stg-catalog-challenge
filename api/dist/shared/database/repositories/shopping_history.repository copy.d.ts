import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class ShoppingHistoryRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.ShoppingHistoryCreateArgs): Prisma.Prisma__ShoppingHistoryClient<{
        id: string;
        userId: string;
        createdAt: Date;
        products: Prisma.JsonValue;
        totalPrice: Prisma.Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findMany(findManyDto: Prisma.ShoppingHistoryFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        userId: string;
        createdAt: Date;
        products: Prisma.JsonValue;
        totalPrice: Prisma.Decimal;
    }[]>;
    findFirst(findFirstDto: Prisma.ShoppingHistoryFindFirstArgs): Prisma.Prisma__ShoppingHistoryClient<{
        id: string;
        userId: string;
        createdAt: Date;
        products: Prisma.JsonValue;
        totalPrice: Prisma.Decimal;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(updateDto: Prisma.ShoppingHistoryUpdateArgs): Prisma.Prisma__ShoppingHistoryClient<{
        id: string;
        userId: string;
        createdAt: Date;
        products: Prisma.JsonValue;
        totalPrice: Prisma.Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    delete(deleteDto: Prisma.ShoppingHistoryDeleteArgs): Prisma.Prisma__ShoppingHistoryClient<{
        id: string;
        userId: string;
        createdAt: Date;
        products: Prisma.JsonValue;
        totalPrice: Prisma.Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    deleteMany(deleteManyDto: Prisma.ShoppingHistoryDeleteManyArgs): Prisma.PrismaPromise<Prisma.BatchPayload>;
}

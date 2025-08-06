import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class CartItemsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.CartItemCreateArgs): Prisma.Prisma__CartItemClient<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findMany(findManyDto: Prisma.CartItemFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }[]>;
    findFirst(findFirstDto: Prisma.CartItemFindFirstArgs): Prisma.Prisma__CartItemClient<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(updateDto: Prisma.CartItemUpdateArgs): Prisma.Prisma__CartItemClient<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    delete(deleteDto: Prisma.CartItemDeleteArgs): Prisma.Prisma__CartItemClient<{
        id: string;
        userId: string;
        productId: string;
        quantity: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    deleteMany(deleteManyDto: Prisma.CartItemDeleteManyArgs): Prisma.PrismaPromise<Prisma.BatchPayload>;
}

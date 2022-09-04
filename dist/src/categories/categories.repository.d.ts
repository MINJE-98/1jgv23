import { category, users } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class CategoriesRepository {
    getAll(prismaConnection: PrismaConnection): import(".prisma/client").PrismaPromise<category[]>;
    findAllByName({ prismaConnection, categoryName, }: {
        prismaConnection: PrismaConnection;
        categoryName: category['categoryName'];
    }): import(".prisma/client").PrismaPromise<category[]>;
    getManyByUserIdGroupeByCategoryId(prismaConnection: PrismaConnection, userId: users['id']): import(".prisma/client").PrismaPromise<Pick<category, "id" | "categoryName">[]>;
}

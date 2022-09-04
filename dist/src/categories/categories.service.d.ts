import { category, users } from '@prisma/client';
import { CategoriesRepository } from '@api/categories/categories.repository';
import { PrismaService } from '@app/library/prisma';
export declare class CategoriesService {
    private readonly prismaService;
    private readonly categoriesRepository;
    constructor(prismaService: PrismaService, categoriesRepository: CategoriesRepository);
    getAllCategories(): import(".prisma/client").PrismaPromise<category[]>;
    findCategory(categoryName: category['categoryName']): import(".prisma/client").PrismaPromise<category[]>;
    getUserCategories(userId: users['id']): import(".prisma/client").PrismaPromise<Pick<category, "id" | "categoryName">[]>;
}

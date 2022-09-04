import { category, users } from '@prisma/client';
export declare class GetUserCategoriesRequestQueryDto {
    userId: users['id'];
}
declare class GetUserCategoriesItem {
    id: category['id'];
    categoryName: category['categoryName'];
}
export declare class GetUserCategoriesResponseDto {
    list: GetUserCategoriesItem[];
    constructor(required: Required<GetUserCategoriesResponseDto>);
}
export {};

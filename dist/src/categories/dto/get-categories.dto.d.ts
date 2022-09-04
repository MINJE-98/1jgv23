import { category } from '@prisma/client';
export declare class GetCategoriesRequestQuery {
    categoryName?: category['categoryName'];
}
declare class GetCategoriesItem {
    id: category['id'];
    categoryName: category['categoryName'];
    content: category['content'];
}
export declare class GetCategoriesResponseDto {
    list: GetCategoriesItem[];
    constructor(required: Required<GetCategoriesResponseDto>);
}
export {};

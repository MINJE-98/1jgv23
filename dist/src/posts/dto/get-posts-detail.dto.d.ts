import { category, posts, users } from '@prisma/client';
import { PostSearchDateScope, PostSearchSortScope } from '@app/library/constants';
export declare class GetPostsRequestQueryDto {
    dateScope: PostSearchDateScope;
    sortScope: PostSearchSortScope;
    userId?: posts['usersID'];
    categoryId?: posts['categoryID'];
    page: number;
    maxContent: number;
}
declare class GetPostsItem {
    id: posts['id'];
    title: posts['title'];
    subTitle: posts['subTitle'];
    thumbnailUrl: posts['thumbNailURL'];
    view: posts['viewCounts'];
    like: posts['likes'];
    private: posts['private'];
    createdAt: posts['createdAt'];
    user: GetPostsUserItem;
    category: GetPostsCategoryItem;
}
declare class GetPostsUserItem {
    userId: users['id'];
    username: users['userName'];
    avatar: users['proFileImageURL'];
}
declare class GetPostsCategoryItem {
    categoryId: category['id'];
    name: category['categoryName'];
}
export declare class GetPostsResponseDto {
    list: GetPostsItem[];
    constructor(required: Required<GetPostsResponseDto>);
}
export {};

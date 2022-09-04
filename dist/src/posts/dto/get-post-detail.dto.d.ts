import { category, posts, users } from '@prisma/client';
export declare class GetPostDetailRequestQueryDto {
    postId: bigint;
}
export declare class GetPostDetailResponseDto {
    id: posts['id'];
    title: posts['title'];
    subTitle: posts['subTitle'];
    thumbnailUrl: posts['thumbNailURL'];
    view: posts['viewCounts'];
    like: posts['likes'];
    content: posts['markDownContent'];
    createdAt: posts['createdAt'];
    updatedAt: posts['updatedAt'];
    user: PostDetailUserInfoItem;
    category: PostDetailCategoryItem;
    constructor(required: Required<GetPostDetailResponseDto>);
}
declare class PostDetailUserInfoItem {
    userId: users['id'];
    username: users['userName'];
    avatar: users['proFileImageURL'];
}
declare class PostDetailCategoryItem {
    categoryId: category['id'];
    name: category['categoryName'];
}
export {};

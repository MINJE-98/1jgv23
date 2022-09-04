import { posts } from '@prisma/client';
export declare class ModifyPostRequestBodyDto {
    postId: posts['id'];
    categoryId: posts['categoryID'];
    title: posts['title'];
    subTitle: posts['subTitle'];
    thumbnailUrl: posts['thumbNailURL'];
    markdownContent: posts['markDownContent'];
    isPrivate: boolean;
}

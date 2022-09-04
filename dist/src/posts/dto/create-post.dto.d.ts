import { posts } from '@prisma/client';
export declare class CreatePostRequestBodyDto {
    categoryId: posts['categoryID'];
    title: posts['title'];
    subTitle: posts['subTitle'];
    thumbnailUrl: posts['thumbNailURL'];
    markdownContent: posts['markDownContent'];
    isPrivate: boolean;
}
export declare class CreatePostResponseBodyDto {
    id: posts['id'];
    constructor(required: Required<CreatePostResponseBodyDto>);
}

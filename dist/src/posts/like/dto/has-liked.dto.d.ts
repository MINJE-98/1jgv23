import { postLike } from '@prisma/client';
export declare class HasLikedRequestDto {
    postId: postLike['postsID'];
}
export declare class HasLikedResponseDto {
    like: boolean;
    constructor(required: Required<HasLikedResponseDto>);
}

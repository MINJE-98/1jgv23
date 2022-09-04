import { comments, users } from '@prisma/client';
export declare class GetCommentsRequestQueryDto {
    postId: comments['postsID'];
    replyTo: comments['replyTo'];
}
declare class GetCommentsItem {
    id: comments['id'];
    content: comments['content'] | null;
    replyTo: comments['replyTo'];
    postId: comments['postsID'];
    createdAt: comments['createdAt'];
    deletedAt: comments['deletedAt'];
    user: GetCommentsUserItem;
}
declare class GetCommentsUserItem {
    userId: users['id'];
    username: users['userName'];
    avatar: users['proFileImageURL'];
}
export declare class GetCommentsResponseDto {
    list: GetCommentsItem[];
    constructor(required: Required<GetCommentsResponseDto>);
}
export {};

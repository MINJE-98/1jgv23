import { comments } from '@prisma/client';
export declare class CreateCommentsRequestBodyDto {
    postId: comments['postsID'];
    content: comments['content'];
    replyTo: comments['replyTo'];
}

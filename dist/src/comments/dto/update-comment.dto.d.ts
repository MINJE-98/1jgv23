import { comments } from '@prisma/client';
export declare class UpdateCommentRequestDto {
    commentId: comments['id'];
    content: comments['content'];
}

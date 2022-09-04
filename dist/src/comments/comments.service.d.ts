import { comments } from '@prisma/client';
import { CommentsRepository } from '@api/comments/comments.repository';
import { PostsRepository } from '@api/posts/posts.repository';
import { PrismaService } from '@app/library/prisma';
export declare class CommentsService {
    private readonly prismaService;
    private readonly commentsRepository;
    private readonly postsRepository;
    constructor(prismaService: PrismaService, commentsRepository: CommentsRepository, postsRepository: PostsRepository);
    createComments({ userId, postId, content, replyTo, }: {
        userId: comments['usersID'];
        postId: comments['postsID'];
        content: comments['content'];
        replyTo: comments['replyTo'];
    }): Promise<void>;
    getComments({ postId, replyTo, }: {
        postId: comments['postsID'];
        replyTo: comments['replyTo'];
    }): Promise<{
        content: string | null;
        id: bigint;
        usersID: number;
        postsID: bigint;
        replyTo: bigint | null;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
        users: import(".prisma/client").users;
    }[]>;
    deleteComment({ userId, commentId, }: {
        userId: comments['usersID'];
        commentId: comments['id'];
    }): Promise<void>;
    updateComment({ userId, commentId, content, }: {
        userId: comments['usersID'];
        commentId: comments['id'];
        content: comments['content'];
    }): Promise<void>;
}

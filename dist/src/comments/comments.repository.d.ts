import { comments } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class CommentsRepository {
    create({ prismaConnection, userId, postId, content, replyTo, }: {
        prismaConnection: PrismaConnection;
        userId: comments['usersID'];
        postId: comments['postsID'];
        content: comments['content'];
        replyTo: comments['replyTo'];
    }): import(".prisma/client").Prisma.Prisma__commentsClient<comments>;
    findMany({ prismaConnection, postId, replyTo, }: {
        prismaConnection: PrismaConnection;
        postId: comments['postsID'];
        replyTo: comments['replyTo'];
    }): import(".prisma/client").PrismaPromise<(comments & {
        users: import(".prisma/client").users;
    })[]>;
    findOneByUserIdAndCommentId({ prismaConnection, userId, commentId, }: {
        prismaConnection: PrismaConnection;
        userId: comments['usersID'];
        commentId: comments['id'];
    }): import(".prisma/client").Prisma.Prisma__commentsClient<comments | null>;
    softDeleteByUserIdAndCommentId({ prismaConnection, userId, commentId, }: {
        prismaConnection: PrismaConnection;
        userId: comments['usersID'];
        commentId: comments['id'];
    }): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    updateByUserIdAndCommentId({ prismaConnection, userId, commentId, content, }: {
        prismaConnection: PrismaConnection;
        userId: comments['usersID'];
        commentId: comments['id'];
        content: comments['content'];
    }): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findOneByCommentId({ prismaConnection, commentId, }: {
        prismaConnection: PrismaConnection;
        commentId: comments['id'];
    }): import(".prisma/client").Prisma.Prisma__commentsClient<comments | null>;
}

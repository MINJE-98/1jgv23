import { postLike } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class PostsLikeRepository {
    create(prismaConnection: PrismaConnection, userId: postLike['usersID'], postId: postLike['postsID']): import(".prisma/client").Prisma.Prisma__postLikeClient<postLike>;
    softDeleteByUserIdAndPostId(prismaConnection: PrismaConnection, userId: postLike['usersID'], postId: postLike['postsID']): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findByUserIdAndPostId(prismaConnection: PrismaConnection, userId: postLike['usersID'], postId: postLike['postsID']): import(".prisma/client").Prisma.Prisma__postLikeClient<postLike | null>;
}

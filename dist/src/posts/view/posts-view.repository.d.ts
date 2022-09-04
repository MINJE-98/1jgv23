import { postView } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class PostsViewRepository {
    getOneByPostIdAndUserIp(prismaConnection: PrismaConnection, postId: postView['postsID'], userIp: postView['userIP']): import(".prisma/client").Prisma.Prisma__postViewClient<postView | null>;
    create(prismaConnection: PrismaConnection, postId: postView['postsID'], userIp: postView['userIP']): import(".prisma/client").Prisma.Prisma__postViewClient<postView>;
}

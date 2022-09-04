import { posts } from '@prisma/client';
import { PostSearchDateScope, PostSearchSortScope } from '@app/library/constants';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class PostsRepository {
    create({ prismaConnection, userId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }: {
        prismaConnection: PrismaConnection;
        userId: posts['usersID'];
        categoryId: posts['categoryID'];
        title: posts['title'];
        subTitle: posts['subTitle'];
        thumbnailUrl: posts['thumbNailURL'];
        markdownContent: posts['markDownContent'];
        isPrivate: boolean;
    }): import(".prisma/client").Prisma.Prisma__postsClient<posts>;
    updateById({ prismaConnection, postId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }: {
        prismaConnection: PrismaConnection;
        postId: posts['id'];
        categoryId: posts['categoryID'];
        title: posts['title'];
        subTitle: posts['subTitle'];
        thumbnailUrl: posts['thumbNailURL'];
        markdownContent: posts['markDownContent'];
        isPrivate: boolean;
    }): import(".prisma/client").Prisma.Prisma__postsClient<posts>;
    getDetailFindById(prismaConnection: PrismaConnection, postId: posts['id']): import(".prisma/client").Prisma.Prisma__postsClient<(posts & {
        category: import(".prisma/client").category;
        users: import(".prisma/client").users;
    }) | null>;
    addViewCountById(prismaConnection: PrismaConnection, postId: posts['id']): import(".prisma/client").Prisma.Prisma__postsClient<posts>;
    addLikeCountById(prismaConnection: PrismaConnection, postId: posts['id']): import(".prisma/client").Prisma.Prisma__postsClient<posts>;
    subLikeCountById(prismaConnection: PrismaConnection, postId: posts['id']): import(".prisma/client").Prisma.Prisma__postsClient<posts>;
    getPost({ prismaConnection, dateScope, sortScope, userId, categoryId, hasPrivatePosts, maxContent, page, }: {
        prismaConnection: PrismaConnection;
        dateScope: PostSearchDateScope;
        sortScope: PostSearchSortScope;
        userId?: posts['usersID'];
        categoryId?: posts['categoryID'];
        hasPrivatePosts?: boolean;
        maxContent: number;
        page: number;
    }): import(".prisma/client").PrismaPromise<(posts & {
        category: import(".prisma/client").category;
        users: import(".prisma/client").users;
    })[]>;
}

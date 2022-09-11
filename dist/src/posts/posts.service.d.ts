import { posts, postView } from '@prisma/client';
import { PostsRepository } from '@api/posts/posts.repository';
import { PostsViewRepository } from '@api/posts/view/posts-view.repository';
import { PostSearchDateScope, PostSearchSortScope } from '@app/library/constants';
import { PrismaService } from '@app/library/prisma';
export declare class PostsService {
    private readonly prismaService;
    private readonly postsRepository;
    private readonly postsViewRepository;
    constructor(prismaService: PrismaService, postsRepository: PostsRepository, postsViewRepository: PostsViewRepository);
    createPost({ userId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }: {
        userId: posts['usersID'];
        categoryId: posts['categoryID'];
        title: posts['title'];
        subTitle: posts['subTitle'];
        thumbnailUrl: posts['thumbNailURL'];
        markdownContent: posts['markDownContent'];
        isPrivate: boolean;
    }): Promise<bigint>;
    modifyPost({ postId, userId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }: {
        postId: posts['id'];
        userId: posts['usersID'];
        categoryId: posts['categoryID'];
        title: posts['title'];
        subTitle: posts['subTitle'];
        thumbnailUrl: posts['thumbNailURL'];
        markdownContent: posts['markDownContent'];
        isPrivate: boolean;
    }): Promise<posts>;
    DeletePost(userId: posts['usersID'], postId: posts['id']): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    getPostDetail(postId: posts['id'], userId: posts['usersID'] | null, userIp: postView['userIP']): Promise<posts & {
        category: import(".prisma/client").category;
        users: import(".prisma/client").users;
    }>;
    getPosts({ sortScope, dateScope, userId, categoryId, personalRequest, maxContent, page, }: {
        dateScope: PostSearchDateScope;
        sortScope: PostSearchSortScope;
        userId?: posts['usersID'];
        categoryId?: posts['categoryID'];
        personalRequest: boolean;
        maxContent: number;
        page: number;
    }): import(".prisma/client").PrismaPromise<(posts & {
        category: import(".prisma/client").category;
        users: import(".prisma/client").users;
    })[]>;
}

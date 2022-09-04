import { postLike } from '@prisma/client';
import { PostsLikeRepository } from '@api/posts/like/posts-like.repository';
import { PostsRepository } from '@api/posts/posts.repository';
import { PrismaService } from '@app/library/prisma';
export declare class PostsLikeService {
    private readonly prismaService;
    private readonly postsLikeRepository;
    private readonly postsRepository;
    constructor(prismaService: PrismaService, postsLikeRepository: PostsLikeRepository, postsRepository: PostsRepository);
    hasLiked(userId: postLike['usersID'], postId: postLike['postsID']): Promise<boolean>;
    setLike(userId: postLike['usersID'], postId: postLike['postsID']): Promise<number>;
    unsetLike(userId: postLike['usersID'], postId: postLike['postsID']): Promise<number>;
}

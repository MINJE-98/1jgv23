import { PostsService } from '@api/posts/posts.service';
import { CreatePostRequestBodyDto, CreatePostResponseBodyDto } from '@api/posts/dto/create-post.dto';
import { DeletePostRequestBodyDto } from '@api/posts/dto/delete-post.dto';
import { GetPostDetailRequestQueryDto, GetPostDetailResponseDto } from '@api/posts/dto/get-post-detail.dto';
import { GetPostsRequestQueryDto, GetPostsResponseDto } from '@api/posts/dto/get-posts-detail.dto';
import { ModifyPostRequestBodyDto } from '@api/posts/dto/modify-post.dto';
import { TokenPayload } from '@app/library/jwt/type/token.type';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost({ userId }: TokenPayload, createPostRequestBodyDto: CreatePostRequestBodyDto): Promise<CreatePostResponseBodyDto>;
    modifyPost({ userId }: TokenPayload, modifyPostRequestBodyDto: ModifyPostRequestBodyDto): Promise<null>;
    getPostDetail({ postId }: GetPostDetailRequestQueryDto, { userId }: TokenPayload, userIp: string): Promise<GetPostDetailResponseDto>;
    deletePosts({ userId }: TokenPayload, { postId }: DeletePostRequestBodyDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getPosts(getPostsRequestQueryDto: GetPostsRequestQueryDto, { userId }: TokenPayload): Promise<GetPostsResponseDto>;
}

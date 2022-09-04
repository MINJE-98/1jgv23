import { PostsLikeService } from '@api/posts/like/posts-like.service';
import { HasLikedRequestDto, HasLikedResponseDto } from '@api/posts/like/dto/has-liked.dto';
import { SetLikedRequestDto } from '@api/posts/like/dto/set-like.dto';
import { UnsetLikedRequestDto } from '@api/posts/like/dto/unset-like.dto';
import { TokenPayload } from '@app/library/jwt/type/token.type';
export declare class PostsLikeController {
    private readonly postLikeService;
    constructor(postLikeService: PostsLikeService);
    hasLiked({ postId }: HasLikedRequestDto, { userId }: TokenPayload): Promise<HasLikedResponseDto>;
    setLike({ postId }: SetLikedRequestDto, { userId }: TokenPayload): Promise<null>;
    unsetLike({ postId }: UnsetLikedRequestDto, { userId }: TokenPayload): Promise<null>;
}

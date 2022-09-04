import { CommentsService } from '@api/comments/comments.service';
import { CreateCommentsRequestBodyDto } from '@api/comments/dto/create-comment.dto';
import { DeleteCommentRequestDto } from '@api/comments/dto/delete-comment.dto';
import { GetCommentsRequestQueryDto, GetCommentsResponseDto } from '@api/comments/dto/get-comments.dto';
import { UpdateCommentRequestDto } from '@api/comments/dto/update-comment.dto';
import { TokenPayload } from '@app/library/jwt/type/token.type';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment({ userId }: TokenPayload, createCommentsRequestBodyDto: CreateCommentsRequestBodyDto): Promise<null>;
    getComments(getCommentsRequestQueryDto: GetCommentsRequestQueryDto): Promise<GetCommentsResponseDto>;
    deleteComment({ userId }: TokenPayload, deleteCommentRequestDto: DeleteCommentRequestDto): Promise<null>;
    updateComment({ userId }: TokenPayload, updateCommentRequestDto: UpdateCommentRequestDto): Promise<void>;
}

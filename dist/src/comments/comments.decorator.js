"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComment = exports.DeleteComment = exports.GetComments = exports.CreateComments = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_access_token_guard_1 = require("../../library/guards/auth/jwt-access-token.guard");
const get_comments_dto_1 = require("./dto/get-comments.dto");
const CreateComments = () => (0, common_1.applyDecorators)((0, common_1.Post)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Comment'), (0, swagger_1.ApiOperation)({
    summary: '댓글을 생성합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '댓글 생성 성공', type: undefined }));
exports.CreateComments = CreateComments;
const GetComments = () => (0, common_1.applyDecorators)((0, common_1.Get)(), (0, swagger_1.ApiTags)('Comment'), (0, swagger_1.ApiOperation)({
    summary: '댓글 리스트를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '댓글 리스트 로드 성공',
    type: get_comments_dto_1.GetCommentsResponseDto,
}));
exports.GetComments = GetComments;
const DeleteComment = () => (0, common_1.applyDecorators)((0, common_1.Delete)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Comment'), (0, swagger_1.ApiOperation)({
    summary: '본인이 작성한 댓글을 삭제합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '댓글 삭제 성공',
    type: undefined,
}));
exports.DeleteComment = DeleteComment;
const UpdateComment = () => (0, common_1.applyDecorators)((0, common_1.Put)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Comment'), (0, swagger_1.ApiOperation)({
    summary: '본인이 작성한 댓글을 수정합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '댓글 수정 성공',
    type: undefined,
}));
exports.UpdateComment = UpdateComment;
//# sourceMappingURL=comments.decorator.js.map
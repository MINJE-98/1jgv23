"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPosts = exports.GetPostDetail = exports.ModifyPost = exports.DeletePost = exports.CreatePost = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_access_token_guard_1 = require("../../library/guards/auth/jwt-access-token.guard");
const get_post_detail_dto_1 = require("./dto/get-post-detail.dto");
const get_posts_detail_dto_1 = require("./dto/get-posts-detail.dto");
const CreatePost = () => (0, common_1.applyDecorators)((0, common_1.Post)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post'), (0, swagger_1.ApiOperation)({
    summary: '포스트를 작성합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '게시글 생성성공', type: undefined }));
exports.CreatePost = CreatePost;
const DeletePost = () => (0, common_1.applyDecorators)((0, common_1.Delete)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post'), (0, swagger_1.ApiOperation)({
    summary: '포스트를 삭제합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '게시글 삭제성공', type: undefined }));
exports.DeletePost = DeletePost;
const ModifyPost = () => (0, common_1.applyDecorators)((0, common_1.Put)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post'), (0, swagger_1.ApiOperation)({
    summary: '포스트를 수정합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '게시글 수정성공', type: undefined }));
exports.ModifyPost = ModifyPost;
const GetPostDetail = () => (0, common_1.applyDecorators)((0, common_1.Get)('detail'), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post'), (0, swagger_1.ApiOperation)({
    summary: '포스트 세부 정보를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '게시글 조회 성공',
    type: get_post_detail_dto_1.GetPostDetailResponseDto,
}));
exports.GetPostDetail = GetPostDetail;
const GetPosts = () => (0, common_1.applyDecorators)((0, common_1.Get)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post'), (0, swagger_1.ApiOperation)({
    summary: '포스트 리스트를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '게시글 리스트 로드 성공',
    type: get_posts_detail_dto_1.GetPostsResponseDto,
}));
exports.GetPosts = GetPosts;
//# sourceMappingURL=posts.decorator.js.map
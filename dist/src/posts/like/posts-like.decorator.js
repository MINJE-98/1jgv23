"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsetLike = exports.SetLike = exports.HasLiked = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const has_liked_dto_1 = require("./dto/has-liked.dto");
const jwt_access_token_guard_1 = require("../../../library/guards/auth/jwt-access-token.guard");
const HasLiked = () => (0, common_1.applyDecorators)((0, common_1.Get)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post-like'), (0, swagger_1.ApiOperation)({
    summary: '해당 포스트에 좋아요를 설정했는지 유무를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '포스트 좋아요 유무 반환 성공',
    type: has_liked_dto_1.HasLikedResponseDto,
}));
exports.HasLiked = HasLiked;
const SetLike = () => (0, common_1.applyDecorators)((0, common_1.Post)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post-like'), (0, swagger_1.ApiOperation)({
    summary: '해당 포스트에 좋아요를 설정합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '포스트 좋아요 설정 성공',
    type: undefined,
}));
exports.SetLike = SetLike;
const UnsetLike = () => (0, common_1.applyDecorators)((0, common_1.Delete)(), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('Post-like'), (0, swagger_1.ApiOperation)({
    summary: '해당 포스트에 좋아요를 설정해제합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '포스트 좋아요 해제 성공',
    type: undefined,
}));
exports.UnsetLike = UnsetLike;
//# sourceMappingURL=posts-like.decorator.js.map
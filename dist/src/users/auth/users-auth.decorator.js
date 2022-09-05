"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.GetAccessTokenUsingRefreshToken = exports.GithubLoginCallback = exports.GithubLogin = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const github_auth_guard_1 = require("../../../library/guards/auth/github-auth.guard");
const get_access_token_using_refresh_token_dto_1 = require("./dto/get-access-token-using-refresh-token.dto");
const callback = process.env.FRONT_CALLBACK_URL;
const GithubLogin = () => (0, common_1.applyDecorators)((0, common_1.Get)('github/login'), (0, github_auth_guard_1.GithubAuthGuard)(), (0, swagger_1.ApiTags)('Auth'), (0, swagger_1.ApiOperation)({
    summary: '깃허브 Oauth를 통해 로그인합니다, 계정이 없을경우 생성합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '깃허브 Oauth 로그인', type: undefined }));
exports.GithubLogin = GithubLogin;
const GithubLoginCallback = () => (0, common_1.applyDecorators)((0, common_1.Get)('github/callback'), (0, github_auth_guard_1.GithubAuthGuard)(), (0, swagger_1.ApiTags)('Auth'), (0, swagger_1.ApiOperation)({
    summary: '깃허브 콜백 엔드포인트 입니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '깃허브 로그인 콜백', type: undefined }), (0, common_1.Redirect)('http://www.tilog.link/callback'));
exports.GithubLoginCallback = GithubLoginCallback;
const GetAccessTokenUsingRefreshToken = () => (0, common_1.applyDecorators)((0, common_1.Post)('access-token'), (0, swagger_1.ApiTags)('Auth'), (0, swagger_1.ApiOperation)({
    summary: '액세스 토큰을 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: 'refreshToken으로 accessToken을 요청합니다',
    type: get_access_token_using_refresh_token_dto_1.GetAccessTokenUsingRefreshTokenResponse,
}));
exports.GetAccessTokenUsingRefreshToken = GetAccessTokenUsingRefreshToken;
const Logout = () => (0, common_1.applyDecorators)((0, common_1.Delete)('logout'), (0, swagger_1.ApiTags)('Auth'), (0, swagger_1.ApiOperation)({
    summary: '리프래시 토큰을 만료시키고 로그아웃합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '로그아웃 합니다', type: undefined }));
exports.Logout = Logout;
//# sourceMappingURL=users-auth.decorator.js.map
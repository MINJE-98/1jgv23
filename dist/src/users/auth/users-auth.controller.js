"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const users_auth_decorator_1 = require("./users-auth.decorator");
const users_auth_service_1 = require("./users-auth.service");
const cookie_service_1 = require("../../../library/cookie/cookie.service");
const get_access_token_using_refresh_token_dto_1 = require("./dto/get-access-token-using-refresh-token.dto");
const users_auth_error_1 = require("./error/users-auth.error");
let UsersAuthController = class UsersAuthController {
    constructor(usersAuthService, configService, cookieService) {
        this.usersAuthService = usersAuthService;
        this.configService = configService;
        this.cookieService = cookieService;
    }
    githubLogin() {
        return null;
    }
    async githubLoginCallback({ user }, userIp, userAgent, response) {
        const refreshToken = await this.usersAuthService.createRefreshToken({
            id: user.id,
            userIp,
            userAgent,
        });
        this.cookieService.setRefreshTokenCookie({ response, refreshToken });
        return null;
    }
    async getAccessTokenUsingRefreshToken(request, userAgent) {
        if (!this.cookieService.isInRefreshTokenCookie(request.cookies))
            throw new common_1.UnauthorizedException(users_auth_error_1.hasNotRefreshToken);
        const token = request.cookies.refreshToken;
        if (token === '')
            throw new common_1.UnauthorizedException(users_auth_error_1.hasNotRefreshToken);
        return new get_access_token_using_refresh_token_dto_1.GetAccessTokenUsingRefreshTokenResponse({
            accessToken: await this.usersAuthService.verifyRefreshTokenAndCreateAccessToken(token, userAgent),
        });
    }
    async deleteRefreshToken(request, response) {
        if (!this.cookieService.isInRefreshTokenCookie(request.cookies))
            throw new common_1.UnauthorizedException(users_auth_error_1.hasNotRefreshToken);
        const token = request.cookies.refreshToken;
        if (token === '')
            throw new common_1.UnauthorizedException(users_auth_error_1.hasNotRefreshToken);
        await this.usersAuthService.deleteRefreshTokenHistory(token);
        this.cookieService.clearRefreshTokenCookie({ response });
        return null;
    }
};
__decorate([
    (0, users_auth_decorator_1.GithubLogin)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersAuthController.prototype, "githubLogin", null);
__decorate([
    (0, users_auth_decorator_1.GithubLoginCallback)(),
    (0, swagger_1.ApiParam)({ name: 'user-agent', required: false }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Ip)()),
    __param(2, (0, common_1.Headers)('user-agent')),
    __param(3, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersAuthController.prototype, "githubLoginCallback", null);
__decorate([
    (0, users_auth_decorator_1.GetAccessTokenUsingRefreshToken)(),
    (0, swagger_1.ApiParam)({ name: 'user-agent', required: false }),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-access-token-using-refresh-token.dto").GetAccessTokenUsingRefreshTokenResponse }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)('user-agent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersAuthController.prototype, "getAccessTokenUsingRefreshToken", null);
__decorate([
    (0, users_auth_decorator_1.Logout)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersAuthController.prototype, "deleteRefreshToken", null);
UsersAuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [users_auth_service_1.UsersAuthService,
        config_1.ConfigService,
        cookie_service_1.CookieService])
], UsersAuthController);
exports.UsersAuthController = UsersAuthController;
//# sourceMappingURL=users-auth.controller.js.map
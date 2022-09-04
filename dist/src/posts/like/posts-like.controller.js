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
exports.PostsLikeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const posts_like_decorator_1 = require("./posts-like.decorator");
const posts_like_service_1 = require("./posts-like.service");
const jwt_user_Id_decorator_1 = require("../../../library/decorators/jwt-user-Id.decorator");
const has_liked_dto_1 = require("./dto/has-liked.dto");
const set_like_dto_1 = require("./dto/set-like.dto");
const unset_like_dto_1 = require("./dto/unset-like.dto");
const users_auth_error_1 = require("../../users/auth/error/users-auth.error");
let PostsLikeController = class PostsLikeController {
    constructor(postLikeService) {
        this.postLikeService = postLikeService;
    }
    async hasLiked({ postId }, { userId }) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        return new has_liked_dto_1.HasLikedResponseDto({
            like: await this.postLikeService.hasLiked(userId, postId),
        });
    }
    async setLike({ postId }, { userId }) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        await this.postLikeService.setLike(userId, postId);
        return null;
    }
    async unsetLike({ postId }, { userId }) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        await this.postLikeService.unsetLike(userId, postId);
        return null;
    }
};
__decorate([
    (0, posts_like_decorator_1.HasLiked)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/has-liked.dto").HasLikedResponseDto }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [has_liked_dto_1.HasLikedRequestDto, Object]),
    __metadata("design:returntype", Promise)
], PostsLikeController.prototype, "hasLiked", null);
__decorate([
    (0, posts_like_decorator_1.SetLike)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_like_dto_1.SetLikedRequestDto, Object]),
    __metadata("design:returntype", Promise)
], PostsLikeController.prototype, "setLike", null);
__decorate([
    (0, posts_like_decorator_1.UnsetLike)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unset_like_dto_1.UnsetLikedRequestDto, Object]),
    __metadata("design:returntype", Promise)
], PostsLikeController.prototype, "unsetLike", null);
PostsLikeController = __decorate([
    (0, common_1.Controller)('posts/like'),
    __metadata("design:paramtypes", [posts_like_service_1.PostsLikeService])
], PostsLikeController);
exports.PostsLikeController = PostsLikeController;
//# sourceMappingURL=posts-like.controller.js.map
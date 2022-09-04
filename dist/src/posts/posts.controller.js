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
exports.PostsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const posts_decorator_1 = require("./posts.decorator");
const posts_service_1 = require("./posts.service");
const jwt_user_Id_decorator_1 = require("../../library/decorators/jwt-user-Id.decorator");
const create_post_dto_1 = require("./dto/create-post.dto");
const get_post_detail_dto_1 = require("./dto/get-post-detail.dto");
const get_posts_detail_dto_1 = require("./dto/get-posts-detail.dto");
const modify_post_dto_1 = require("./dto/modify-post.dto");
const users_auth_error_1 = require("../users/auth/error/users-auth.error");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    async createPost({ userId }, createPostRequestBodyDto) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        const createPostId = await this.postsService.createPost(Object.assign({ userId }, createPostRequestBodyDto));
        return new create_post_dto_1.CreatePostResponseBodyDto({ id: createPostId });
    }
    async modifyPost({ userId }, modifyPostRequestBodyDto) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        await this.postsService.modifyPost(Object.assign({ userId }, modifyPostRequestBodyDto));
        return null;
    }
    async getPostDetail({ postId }, { userId }, userIp) {
        const result = await this.postsService.getPostDetail(postId, userId, userIp);
        return new get_post_detail_dto_1.GetPostDetailResponseDto({
            id: result.id,
            title: result.title,
            subTitle: result.subTitle,
            thumbnailUrl: result.thumbNailURL,
            view: result.viewCounts,
            like: result.likes,
            content: result.markDownContent,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            user: {
                userId: result.users.id,
                username: result.users.userName,
                avatar: result.users.proFileImageURL,
            },
            category: {
                categoryId: result.category.id,
                name: result.category.categoryName,
            },
        });
    }
    async getPosts(getPostsRequestQueryDto, { userId }) {
        const isPersonal = getPostsRequestQueryDto.userId
            ? getPostsRequestQueryDto.userId === userId
            : false;
        const postsList = await this.postsService.getPosts({
            dateScope: getPostsRequestQueryDto.dateScope,
            sortScope: getPostsRequestQueryDto.sortScope,
            userId: getPostsRequestQueryDto.userId,
            categoryId: getPostsRequestQueryDto.categoryId,
            personalRequest: isPersonal,
            page: getPostsRequestQueryDto.page,
            maxContent: getPostsRequestQueryDto.maxContent,
        });
        return new get_posts_detail_dto_1.GetPostsResponseDto({
            list: postsList.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    subTitle: item.subTitle,
                    thumbnailUrl: item.thumbNailURL,
                    view: item.viewCounts,
                    like: item.likes,
                    createdAt: item.createdAt,
                    private: item.private,
                    user: {
                        userId: item.users.id,
                        username: item.users.userName,
                        avatar: item.users.proFileImageURL,
                    },
                    category: {
                        categoryId: item.category.id,
                        name: item.category.categoryName,
                    },
                };
            }),
        });
    }
};
__decorate([
    (0, posts_decorator_1.CreatePost)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/create-post.dto").CreatePostResponseBodyDto }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_post_dto_1.CreatePostRequestBodyDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, posts_decorator_1.ModifyPost)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, modify_post_dto_1.ModifyPostRequestBodyDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "modifyPost", null);
__decorate([
    (0, posts_decorator_1.GetPostDetail)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-post-detail.dto").GetPostDetailResponseDto }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_post_detail_dto_1.GetPostDetailRequestQueryDto, Object, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPostDetail", null);
__decorate([
    (0, posts_decorator_1.GetPosts)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-posts-detail.dto").GetPostsResponseDto }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_posts_detail_dto_1.GetPostsRequestQueryDto, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPosts", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map
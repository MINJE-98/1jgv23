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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsLikeService = void 0;
const common_1 = require("@nestjs/common");
const posts_like_repository_1 = require("./posts-like.repository");
const posts_repository_1 = require("../posts.repository");
const prisma_1 = require("../../../library/prisma");
const posts_like_error_1 = require("./error/posts-like.error");
let PostsLikeService = class PostsLikeService {
    constructor(prismaService, postsLikeRepository, postsRepository) {
        this.prismaService = prismaService;
        this.postsLikeRepository = postsLikeRepository;
        this.postsRepository = postsRepository;
    }
    async hasLiked(userId, postId) {
        return !!(await this.postsLikeRepository.findByUserIdAndPostId(this.prismaService, userId, postId));
    }
    setLike(userId, postId) {
        return this.prismaService.$transaction(async (prisma) => {
            const hasLiked = await this.postsLikeRepository.findByUserIdAndPostId(prisma, userId, postId);
            if (hasLiked)
                throw new common_1.ConflictException(posts_like_error_1.alreadySetLike);
            await this.postsLikeRepository.create(prisma, userId, postId);
            const postResult = await this.postsRepository.addLikeCountById(prisma, postId);
            return postResult.likes;
        });
    }
    unsetLike(userId, postId) {
        return this.prismaService.$transaction(async (prisma) => {
            const hasLiked = await this.postsLikeRepository.findByUserIdAndPostId(prisma, userId, postId);
            if (!hasLiked)
                throw new common_1.ConflictException(posts_like_error_1.alreadySetLike);
            await this.postsLikeRepository.softDeleteByUserIdAndPostId(prisma, userId, postId);
            const postResult = await this.postsRepository.subLikeCountById(prisma, postId);
            return postResult.likes;
        });
    }
};
PostsLikeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        posts_like_repository_1.PostsLikeRepository,
        posts_repository_1.PostsRepository])
], PostsLikeService);
exports.PostsLikeService = PostsLikeService;
//# sourceMappingURL=posts-like.service.js.map
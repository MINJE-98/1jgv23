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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const posts_repository_1 = require("./posts.repository");
const posts_view_repository_1 = require("./view/posts-view.repository");
const prisma_1 = require("../../library/prisma");
const posts_error_1 = require("./error/posts.error");
let PostsService = class PostsService {
    constructor(prismaService, postsRepository, postsViewRepository) {
        this.prismaService = prismaService;
        this.postsRepository = postsRepository;
        this.postsViewRepository = postsViewRepository;
    }
    async createPost({ userId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }) {
        const createResult = await this.postsRepository.create({
            prismaConnection: this.prismaService,
            userId,
            categoryId,
            title,
            subTitle,
            thumbnailUrl,
            markdownContent,
            isPrivate,
        });
        return createResult.id;
    }
    async modifyPost({ postId, userId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }) {
        const postDetail = await this.postsRepository.getDetailFindById(this.prismaService, postId);
        if (!postDetail)
            throw new common_1.NotFoundException(posts_error_1.postNotFound);
        if (userId !== postDetail.usersID)
            throw new common_1.ForbiddenException(posts_error_1.notPostYouOwn);
        return this.postsRepository.updateById({
            prismaConnection: this.prismaService,
            postId,
            categoryId,
            title,
            subTitle,
            thumbnailUrl,
            markdownContent,
            isPrivate,
        });
    }
    async getPostDetail(postId, userId, userIp) {
        try {
            await this.prismaService.$transaction(async (prisma) => {
                const hasViewed = await this.postsViewRepository.getOneByPostIdAndUserIp(prisma, postId, userIp);
                if (hasViewed)
                    throw new Error('hasViewed');
                await this.postsViewRepository.create(prisma, postId, userIp);
                await this.postsRepository.addViewCountById(prisma, postId);
            });
        }
        catch (error) {
            if (!(error instanceof Error))
                throw new common_1.InternalServerErrorException();
        }
        const searchResult = await this.postsRepository.getDetailFindById(this.prismaService, postId);
        if (!searchResult)
            throw new common_1.NotFoundException(posts_error_1.postNotFound);
        if (searchResult.private === 1) {
            if (searchResult.usersID !== userId)
                throw new common_1.NotFoundException(posts_error_1.isPrivatePost);
        }
        return searchResult;
    }
    getPosts({ sortScope, dateScope, userId, categoryId, personalRequest, maxContent, page, }) {
        return this.postsRepository.getPost({
            prismaConnection: this.prismaService,
            dateScope,
            sortScope,
            userId,
            categoryId,
            hasPrivatePosts: personalRequest,
            maxContent,
            page,
        });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        posts_repository_1.PostsRepository,
        posts_view_repository_1.PostsViewRepository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map
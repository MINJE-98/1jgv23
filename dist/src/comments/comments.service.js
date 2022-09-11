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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_repository_1 = require("./comments.repository");
const posts_repository_1 = require("../posts/posts.repository");
const prisma_1 = require("../../library/prisma");
const comments_error_1 = require("./error/comments.error");
const posts_error_1 = require("../posts/error/posts.error");
let CommentsService = class CommentsService {
    constructor(prismaService, commentsRepository, postsRepository) {
        this.prismaService = prismaService;
        this.commentsRepository = commentsRepository;
        this.postsRepository = postsRepository;
    }
    async createComments({ userId, postId, content, replyTo, }) {
        const hasPost = await this.postsRepository.getDetailFindById(this.prismaService, postId);
        if (!hasPost)
            throw new common_1.NotFoundException(posts_error_1.postNotFound);
        if (replyTo) {
            const hasComment = await this.commentsRepository.findOneByCommentId({
                prismaConnection: this.prismaService,
                commentId: replyTo,
            });
            if (!hasComment)
                throw new common_1.NotFoundException(comments_error_1.replyToCommentNotFound);
        }
        await this.commentsRepository.create({
            prismaConnection: this.prismaService,
            userId,
            postId,
            content,
            replyTo,
        });
    }
    async getComments({ postId, replyTo, }) {
        const hasPost = await this.postsRepository.getDetailFindById(this.prismaService, postId);
        if (!hasPost)
            throw new common_1.NotFoundException(posts_error_1.postNotFound);
        const commentsList = await this.commentsRepository.findMany({
            prismaConnection: this.prismaService,
            postId,
            replyTo,
        });
        return commentsList.map((item) => {
            return Object.assign(Object.assign({}, item), { content: item.deletedAt ? null : item.content });
        });
    }
    async deleteComment({ userId, commentId, }) {
        const hasComment = await this.commentsRepository.findOneByUserIdAndCommentId({
            prismaConnection: this.prismaService,
            userId,
            commentId,
        });
        if (!hasComment)
            throw new common_1.NotFoundException(comments_error_1.commentNotFound);
        await this.commentsRepository.softDeleteByUserIdAndCommentId({
            prismaConnection: this.prismaService,
            userId,
            commentId,
        });
    }
    async updateComment({ userId, commentId, content, }) {
        const hasComment = await this.commentsRepository.findOneByCommentId({
            prismaConnection: this.prismaService,
            commentId,
        });
        if (!hasComment)
            throw new common_1.NotFoundException(comments_error_1.commentNotFound);
        const hasUserComment = await this.commentsRepository.findOneByUserIdAndCommentId({
            prismaConnection: this.prismaService,
            userId,
            commentId,
        });
        if (!hasUserComment)
            throw new common_1.UnauthorizedException(comments_error_1.unauthorizedComment);
        await this.commentsRepository.updateByUserIdAndCommentId({
            prismaConnection: this.prismaService,
            userId,
            commentId,
            content,
        });
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        comments_repository_1.CommentsRepository,
        posts_repository_1.PostsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map
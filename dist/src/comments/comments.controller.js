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
exports.CommentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const comments_decorator_1 = require("./comments.decorator");
const comments_service_1 = require("./comments.service");
const jwt_user_Id_decorator_1 = require("../../library/decorators/jwt-user-Id.decorator");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const delete_comment_dto_1 = require("./dto/delete-comment.dto");
const get_comments_dto_1 = require("./dto/get-comments.dto");
const update_comment_dto_1 = require("./dto/update-comment.dto");
const users_auth_error_1 = require("../users/auth/error/users-auth.error");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async createComment({ userId }, createCommentsRequestBodyDto) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeAccessTokenFail);
        await this.commentsService.createComments(Object.assign({ userId }, createCommentsRequestBodyDto));
        return null;
    }
    async getComments(getCommentsRequestQueryDto) {
        const commentsList = await this.commentsService.getComments(getCommentsRequestQueryDto);
        return new get_comments_dto_1.GetCommentsResponseDto({
            list: commentsList.map((item) => {
                return {
                    id: item.id,
                    content: item.content,
                    replyTo: item.replyTo,
                    createdAt: item.createdAt,
                    deletedAt: item.deletedAt,
                    postId: item.postsID,
                    user: {
                        userId: item.users.id,
                        username: item.users.userName,
                        avatar: item.users.proFileImageURL,
                    },
                };
            }),
        });
    }
    async deleteComment({ userId }, deleteCommentRequestDto) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeAccessTokenFail);
        await this.commentsService.deleteComment(Object.assign({ userId }, deleteCommentRequestDto));
        return null;
    }
    async updateComment({ userId }, updateCommentRequestDto) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeAccessTokenFail);
        await this.commentsService.updateComment(Object.assign({ userId }, updateCommentRequestDto));
    }
};
__decorate([
    (0, comments_decorator_1.CreateComments)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_comment_dto_1.CreateCommentsRequestBodyDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, comments_decorator_1.GetComments)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-comments.dto").GetCommentsResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_comments_dto_1.GetCommentsRequestQueryDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComments", null);
__decorate([
    (0, comments_decorator_1.DeleteComment)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, delete_comment_dto_1.DeleteCommentRequestDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
__decorate([
    (0, comments_decorator_1.UpdateComment)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_comment_dto_1.UpdateCommentRequestDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "updateComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map
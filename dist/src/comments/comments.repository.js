"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../library/date");
let CommentsRepository = class CommentsRepository {
    create({ prismaConnection, userId, postId, content, replyTo, }) {
        return prismaConnection.comments.create({
            data: {
                usersID: userId,
                postsID: postId,
                content,
                replyTo,
                createdAt: (0, date_1.now)(),
            },
        });
    }
    findMany({ prismaConnection, postId, replyTo, }) {
        return prismaConnection.comments.findMany({
            include: {
                users: true,
            },
            where: {
                postsID: postId,
                replyTo: replyTo !== null && replyTo !== void 0 ? replyTo : null,
            },
        });
    }
    findOneByUserIdAndCommentId({ prismaConnection, userId, commentId, }) {
        return prismaConnection.comments.findFirst({
            where: {
                id: commentId,
                usersID: userId,
                deletedAt: null,
            },
        });
    }
    softDeleteByUserIdAndCommentId({ prismaConnection, userId, commentId, }) {
        return prismaConnection.comments.updateMany({
            data: { deletedAt: (0, date_1.now)() },
            where: {
                id: commentId,
                usersID: userId,
            },
        });
    }
    updateByUserIdAndCommentId({ prismaConnection, userId, commentId, content, }) {
        return prismaConnection.comments.updateMany({
            data: { content, updatedAt: (0, date_1.now)() },
            where: {
                id: commentId,
                usersID: userId,
                deletedAt: null,
            },
        });
    }
    findOneByCommentId({ prismaConnection, commentId, }) {
        return prismaConnection.comments.findUnique({
            where: {
                id: commentId,
            },
        });
    }
};
CommentsRepository = __decorate([
    (0, common_1.Injectable)()
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map
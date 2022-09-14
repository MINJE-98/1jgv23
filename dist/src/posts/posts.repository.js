"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../library/constants");
const date_1 = require("../../library/date");
let PostsRepository = class PostsRepository {
    create({ prismaConnection, userId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }) {
        return prismaConnection.posts.create({
            data: {
                usersID: userId,
                categoryID: categoryId,
                title,
                subTitle,
                thumbNailURL: thumbnailUrl,
                markDownContent: markdownContent,
                createdAt: (0, date_1.now)(),
                createdDay: (0, date_1.now)(),
                private: isPrivate ? 1 : 0,
            },
        });
    }
    deleteById({ prismaConnection, postId, userId, }) {
        return prismaConnection.posts.updateMany({
            data: { deletedAt: (0, date_1.now)() },
            where: {
                id: postId,
                usersID: userId,
            },
        });
    }
    updateById({ prismaConnection, postId, categoryId, title, subTitle, thumbnailUrl, markdownContent, isPrivate, }) {
        return prismaConnection.posts.update({
            where: { id: postId },
            data: {
                categoryID: categoryId,
                title,
                subTitle,
                thumbNailURL: thumbnailUrl,
                markDownContent: markdownContent,
                private: isPrivate ? 1 : 0,
                updatedAt: (0, date_1.now)(),
            },
        });
    }
    getDetailFindById(prismaConnection, postId) {
        return prismaConnection.posts.findFirst({
            where: {
                id: postId,
                deletedAt: null,
                users: { deletedAt: null },
            },
            include: {
                users: true,
                category: true,
            },
        });
    }
    addViewCountById(prismaConnection, postId) {
        return prismaConnection.posts.update({
            data: { viewCounts: { increment: 1 } },
            where: { id: postId },
        });
    }
    addLikeCountById(prismaConnection, postId) {
        return prismaConnection.posts.update({
            data: { likes: { increment: 1 } },
            where: { id: postId },
        });
    }
    subLikeCountById(prismaConnection, postId) {
        return prismaConnection.posts.update({
            data: { likes: { decrement: 1 } },
            where: { id: postId },
        });
    }
    getPost({ prismaConnection, dateScope, sortScope, userId, categoryId, hasPrivatePosts, maxContent, page, }) {
        const dayCount = dateScope === constants_1.PostSearchDateScope.All
            ? undefined
            : Number(constants_1.PostSearchDateScope[`${dateScope}`]);
        console.log(hasPrivatePosts);
        return prismaConnection.posts.findMany({
            include: {
                users: true,
                category: true,
            },
            where: Object.assign(Object.assign(Object.assign(Object.assign({}, (userId && { usersID: userId })), (categoryId && { categoryID: categoryId })), (!hasPrivatePosts && { private: 0 })), { createdDay: {
                    in: dayCount ? (0, date_1.arrayOfLastDate)((0, date_1.now)(), dayCount) : undefined,
                }, deletedAt: null, users: { deletedAt: null } }),
            orderBy: [{ [`${sortScope}`]: 'desc' }],
            skip: page === 0 ? 0 : maxContent * page,
            take: maxContent,
        });
    }
};
PostsRepository = __decorate([
    (0, common_1.Injectable)()
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map
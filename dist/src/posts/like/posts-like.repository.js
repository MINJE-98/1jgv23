"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsLikeRepository = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../../library/date");
let PostsLikeRepository = class PostsLikeRepository {
    create(prismaConnection, userId, postId) {
        return prismaConnection.postLike.create({
            data: { usersID: userId, postsID: postId, likedAt: (0, date_1.now)() },
        });
    }
    softDeleteByUserIdAndPostId(prismaConnection, userId, postId) {
        return prismaConnection.postLike.updateMany({
            where: { usersID: userId, postsID: postId },
            data: { deletedAt: (0, date_1.now)() },
        });
    }
    findByUserIdAndPostId(prismaConnection, userId, postId) {
        return prismaConnection.postLike.findFirst({
            where: { usersID: userId, postsID: postId, deletedAt: null },
        });
    }
};
PostsLikeRepository = __decorate([
    (0, common_1.Injectable)()
], PostsLikeRepository);
exports.PostsLikeRepository = PostsLikeRepository;
//# sourceMappingURL=posts-like.repository.js.map
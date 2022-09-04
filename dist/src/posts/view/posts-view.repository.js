"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsViewRepository = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../../library/date");
let PostsViewRepository = class PostsViewRepository {
    getOneByPostIdAndUserIp(prismaConnection, postId, userIp) {
        return prismaConnection.postView.findFirst({
            where: { postsID: postId, userIP: userIp },
        });
    }
    create(prismaConnection, postId, userIp) {
        return prismaConnection.postView.create({
            data: { postsID: postId, userIP: userIp, viewedAt: (0, date_1.now)() },
        });
    }
};
PostsViewRepository = __decorate([
    (0, common_1.Injectable)()
], PostsViewRepository);
exports.PostsViewRepository = PostsViewRepository;
//# sourceMappingURL=posts-view.repository.js.map
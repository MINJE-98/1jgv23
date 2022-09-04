"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAuthRepository = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../../library/date");
let UsersAuthRepository = class UsersAuthRepository {
    createHistory({ prismaConnection, userId, refreshToken, userAgent, userIp, }) {
        return prismaConnection.usersAuth.create({
            data: {
                refreshToken,
                userAgent,
                userIp,
                userId,
                lastUseAt: (0, date_1.now)(),
            },
        });
    }
    findOneByRefreshToken({ prismaConnection, refreshToken, }) {
        return prismaConnection.usersAuth.findUnique({ where: { refreshToken } });
    }
    deleteByRefreshToken({ prismaConnection, refreshToken, }) {
        return prismaConnection.usersAuth.deleteMany({ where: { refreshToken } });
    }
};
UsersAuthRepository = __decorate([
    (0, common_1.Injectable)()
], UsersAuthRepository);
exports.UsersAuthRepository = UsersAuthRepository;
//# sourceMappingURL=users-auth.repository.js.map
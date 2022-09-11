"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../library/date");
let UsersRepository = class UsersRepository {
    findIdByProviderServiceId({ prismaConnection, provider, providerServiceId, }) {
        return prismaConnection.users.findFirst({
            select: {
                id: true,
            },
            where: {
                provider,
                providerServiceId,
            },
        });
    }
    upsertByUserId({ prismaConnection, userId, provider, userName, proFileImageURL, providerServiceId, }) {
        return prismaConnection.users.upsert({
            where: {
                id: userId,
            },
            update: {
                proFileImageURL,
                updatedAt: (0, date_1.now)(),
            },
            create: {
                userName,
                provider,
                providerServiceId,
                proFileImageURL,
                createdAt: (0, date_1.now)(),
            },
            select: {
                id: true,
            },
        });
    }
    findOneByName({ prismaConnection, userName, }) {
        return prismaConnection.users.findFirst({ where: { userName } });
    }
    findOneById({ prismaConnection, userId, }) {
        return prismaConnection.users.findUnique({ where: { id: userId } });
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map
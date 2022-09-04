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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const prisma_1 = require("../../library/prisma");
let UsersService = class UsersService {
    constructor(prismaService, usersRepository) {
        this.prismaService = prismaService;
        this.usersRepository = usersRepository;
    }
    async upsertUserAndGetId({ provider, userName, proFileImageURL, providerServiceId, }) {
        const findUserResult = await this.usersRepository.findIdByProviderServiceId({
            prismaConnection: this.prismaService,
            provider,
            providerServiceId,
        });
        return this.usersRepository.upsertByUserId({
            prismaConnection: this.prismaService,
            userId: findUserResult ? findUserResult.id : -1,
            userName,
            provider,
            providerServiceId,
            proFileImageURL,
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        users_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
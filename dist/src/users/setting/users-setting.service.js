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
exports.UsersSettingService = void 0;
const common_1 = require("@nestjs/common");
const users_setting_repository_1 = require("./users-setting.repository");
const users_repository_1 = require("../users.repository");
const prisma_1 = require("../../../library/prisma");
let UsersSettingService = class UsersSettingService {
    constructor(prismaService, usersSettingRepository, usersRepository) {
        this.prismaService = prismaService;
        this.usersSettingRepository = usersSettingRepository;
        this.usersRepository = usersRepository;
    }
    async upsertSetting({ userId, settingType, content, }) {
        var _a;
        const findResult = await this.usersSettingRepository.findOneByUserIdAndSettingType({
            prismaConnection: this.prismaService,
            userId,
            settingType,
        });
        return this.usersSettingRepository.upsertBySettingId({
            prismaConnection: this.prismaService,
            settingId: (_a = findResult === null || findResult === void 0 ? void 0 : findResult.id) !== null && _a !== void 0 ? _a : -1,
            userId,
            settingType,
            content,
        });
    }
    getUserProfileAndSetting(userId) {
        return this.prismaService.$transaction(async (prisma) => {
            const userSetting = await this.usersSettingRepository.getManyByUserId({
                prismaConnection: prisma,
                userId,
            });
            const userProfile = await this.usersRepository.findOneById({
                prismaConnection: prisma,
                userId,
            });
            if (!userProfile)
                throw new common_1.InternalServerErrorException();
            return {
                userId: userProfile.id,
                name: userProfile.userName,
                avatar: userProfile.proFileImageURL,
                createdAt: userProfile.createdAt,
                settings: userSetting.map((val) => {
                    return { type: val.type, content: val.content };
                }),
            };
        });
    }
};
UsersSettingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        users_setting_repository_1.UsersSettingRepository,
        users_repository_1.UsersRepository])
], UsersSettingService);
exports.UsersSettingService = UsersSettingService;
//# sourceMappingURL=users-setting.service.js.map
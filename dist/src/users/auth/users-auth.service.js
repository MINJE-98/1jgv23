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
exports.UsersAuthService = void 0;
const common_1 = require("@nestjs/common");
const users_auth_repository_1 = require("./users-auth.repository");
const jwt_token_service_1 = require("../../../library/jwt/jwt-token.service");
const prisma_1 = require("../../../library/prisma");
const users_auth_error_1 = require("./error/users-auth.error");
let UsersAuthService = class UsersAuthService {
    constructor(usersAuthRepository, prismaService, jwtTokenService) {
        this.usersAuthRepository = usersAuthRepository;
        this.prismaService = prismaService;
        this.jwtTokenService = jwtTokenService;
    }
    parseDeviceType(userAgent) {
        var _a;
        if (userAgent.length > 300)
            throw new common_1.PayloadTooLargeException(users_auth_error_1.deviceTypeInjectFail);
        const re = /(?<=\().*?(?=;)/;
        return (_a = userAgent.match(re)) !== null && _a !== void 0 ? _a : [];
    }
    async createRefreshToken({ id, userAgent, userIp, }) {
        var _a;
        const userDevice = (_a = this.parseDeviceType(userAgent)[0]) !== null && _a !== void 0 ? _a : null;
        const refreshToken = this.jwtTokenService.generateRefreshToken({
            userId: id,
        });
        await this.usersAuthRepository.createHistory({
            prismaConnection: this.prismaService,
            userId: id,
            userAgent: userDevice,
            userIp,
            refreshToken,
        });
        return refreshToken;
    }
    async deleteRefreshTokenHistory(refreshToken) {
        const deleteResult = await this.usersAuthRepository.deleteByRefreshToken({
            prismaConnection: this.prismaService,
            refreshToken,
        });
        return deleteResult.count;
    }
    async verifyRefreshTokenAndCreateAccessToken(refreshToken, userAgent) {
        var _a;
        try {
            this.jwtTokenService.decodeRefreshToken(refreshToken);
        }
        catch (error) {
            await this.usersAuthRepository.deleteByRefreshToken({
                prismaConnection: this.prismaService,
                refreshToken,
            });
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeRefreshTokenFail);
        }
        const refreshTokenHistory = await this.usersAuthRepository.findOneByRefreshToken({
            prismaConnection: this.prismaService,
            refreshToken,
        });
        if (!refreshTokenHistory) {
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeRefreshTokenFail);
        }
        const userDevice = (_a = this.parseDeviceType(userAgent)[0]) !== null && _a !== void 0 ? _a : null;
        if (userDevice !== refreshTokenHistory.userAgent) {
            await this.usersAuthRepository.deleteByRefreshToken({
                prismaConnection: this.prismaService,
                refreshToken,
            });
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeRefreshTokenFail);
        }
        return this.jwtTokenService.generateAccessToken({
            userId: refreshTokenHistory.userId,
        });
    }
};
UsersAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_auth_repository_1.UsersAuthRepository,
        prisma_1.PrismaService,
        jwt_token_service_1.JwtTokenService])
], UsersAuthService);
exports.UsersAuthService = UsersAuthService;
//# sourceMappingURL=users-auth.service.js.map
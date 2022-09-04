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
exports.JwtTokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let JwtTokenService = class JwtTokenService {
    constructor(configService, jwtService) {
        this.configService = configService;
        this.jwtService = jwtService;
    }
    generateAccessToken(payload) {
        return this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET_KEY'),
            expiresIn: this.configService.get('JWT_EXPIRES_IN'),
        });
    }
    generateRefreshToken(payload) {
        return this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET_KEY'),
            expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN'),
        });
    }
    decodeAccessToken(accessToken) {
        return this.jwtService.verify(accessToken, {
            secret: this.configService.get('JWT_SECRET_KEY'),
        });
    }
    decodeRefreshToken(refreshToken) {
        return this.jwtService.verify(refreshToken, {
            secret: this.configService.get('JWT_REFRESH_SECRET_KEY'),
        });
    }
};
JwtTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService])
], JwtTokenService);
exports.JwtTokenService = JwtTokenService;
//# sourceMappingURL=jwt-token.service.js.map
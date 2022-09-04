"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAccessTokenGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const users_auth_error_1 = require("../../../src/users/auth/error/users-auth.error");
let JwtAccessToken = class JwtAccessToken extends (0, passport_1.AuthGuard)('jwtAccessToken') {
    handleRequest(err, user) {
        if (err) {
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeAccessTokenFail);
        }
        return user;
    }
};
JwtAccessToken = __decorate([
    (0, common_1.Injectable)()
], JwtAccessToken);
const JwtAccessTokenGuard = () => (0, common_1.applyDecorators)((0, common_1.UseGuards)(JwtAccessToken), (0, swagger_1.ApiBearerAuth)('accessToken'));
exports.JwtAccessTokenGuard = JwtAccessTokenGuard;
//# sourceMappingURL=jwt-access-token.guard.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_auth_controller_1 = require("./auth/users-auth.controller");
const users_auth_repository_1 = require("./auth/users-auth.repository");
const users_auth_service_1 = require("./auth/users-auth.service");
const users_setting_repository_1 = require("./setting/users-setting.repository");
const users_setting_service_1 = require("./setting/users-setting.service");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./users.repository");
const users_service_1 = require("./users.service");
const cookie_module_1 = require("../../library/cookie/cookie.module");
const github_strategy_1 = require("../../library/guards/auth/strategy/github.strategy");
const jwt_access_token_strategy_1 = require("../../library/guards/auth/strategy/jwt-access-token.strategy");
const jwt_token_module_1 = require("../../library/jwt/jwt-token.module");
const prisma_1 = require("../../library/prisma");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_1.PrismaModule, cookie_module_1.CookieModule, jwt_token_module_1.JwtTokenModule],
        providers: [
            users_auth_service_1.UsersAuthService,
            users_auth_repository_1.UsersAuthRepository,
            github_strategy_1.GithubStrategy,
            jwt_access_token_strategy_1.JwtAccessTokenStrategy,
            users_service_1.UsersService,
            users_repository_1.UsersRepository,
            users_setting_repository_1.UsersSettingRepository,
            users_setting_service_1.UsersSettingService,
        ],
        controllers: [users_controller_1.UsersController, users_auth_controller_1.UsersAuthController],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map
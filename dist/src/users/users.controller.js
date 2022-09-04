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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_setting_service_1 = require("./setting/users-setting.service");
const users_decorator_1 = require("./users.decorator");
const jwt_user_Id_decorator_1 = require("../../library/decorators/jwt-user-Id.decorator");
const users_auth_error_1 = require("./auth/error/users-auth.error");
const get_me_dto_1 = require("./dto/get-me.dto");
const get_user_profile_dto_1 = require("./dto/get-user-profile.dto");
const set_setting_dto_1 = require("./dto/set-setting.dto");
let UsersController = class UsersController {
    constructor(usersSettingService) {
        this.usersSettingService = usersSettingService;
    }
    async setSetting({ userId }, setSettingRequestBodyDto) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        await this.usersSettingService.upsertSetting({
            userId,
            settingType: setSettingRequestBodyDto.settingType,
            content: setSettingRequestBodyDto.content,
        });
        return null;
    }
    async getMe({ userId }) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.unauthorizedUser);
        return new get_me_dto_1.GetMeResponseDto(await this.usersSettingService.getUserProfileAndSetting(userId));
    }
    async getUserProfile({ userId }) {
        return new get_user_profile_dto_1.GetUserProfileResponseDto(await this.usersSettingService.getUserProfileAndSetting(userId));
    }
};
__decorate([
    (0, users_decorator_1.SetSetting)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, set_setting_dto_1.SetSettingRequestBodyDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "setSetting", null);
__decorate([
    (0, users_decorator_1.GetMe)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-me.dto").GetMeResponseDto }),
    __param(0, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, users_decorator_1.GetUserProfile)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-user-profile.dto").GetUserProfileResponseDto }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_profile_dto_1.GetUserProfileRequestParamDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserProfile", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_setting_service_1.UsersSettingService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
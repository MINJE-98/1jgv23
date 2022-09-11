"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserProfile = exports.GetMe = exports.SetSetting = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_access_token_guard_1 = require("../../library/guards/auth/jwt-access-token.guard");
const get_me_dto_1 = require("./dto/get-me.dto");
const get_user_profile_dto_1 = require("./dto/get-user-profile.dto");
const SetSetting = () => (0, common_1.applyDecorators)((0, common_1.Put)('setting'), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('User'), (0, swagger_1.ApiOperation)({
    summary: '유저 설정을 저장합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '유저 설정 반영', type: undefined }));
exports.SetSetting = SetSetting;
const GetMe = () => (0, common_1.applyDecorators)((0, common_1.Get)('me'), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('User'), (0, swagger_1.ApiOperation)({
    summary: '로그인된 유저정보를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({ description: '내 정보 로드완료', type: get_me_dto_1.GetMeResponseDto }));
exports.GetMe = GetMe;
const GetUserProfile = () => (0, common_1.applyDecorators)((0, common_1.Get)('profile/:userName'), (0, swagger_1.ApiTags)('User'), (0, swagger_1.ApiOperation)({
    summary: '특정 유저프로필 정보를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '유저 프로필 로드완료',
    type: get_user_profile_dto_1.GetUserProfileResponseDto,
}));
exports.GetUserProfile = GetUserProfile;
//# sourceMappingURL=users.decorator.js.map
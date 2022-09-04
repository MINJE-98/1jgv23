"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedUser = exports.deviceTypeInjectFail = exports.hasNotRefreshToken = exports.decodeAccessTokenFail = exports.decodeRefreshTokenFail = void 0;
const constants_1 = require("../../../../library/constants");
exports.decodeRefreshTokenFail = {
    [constants_1.COUNTRY.ko]: '리프레시 토큰 인증에 실패했습니다.',
    [constants_1.COUNTRY.en]: 'Decode RefreshToken Fail',
};
exports.decodeAccessTokenFail = {
    [constants_1.COUNTRY.ko]: '액세스 토큰 인증에 실패했습니다.',
    [constants_1.COUNTRY.en]: 'Decode AccessToken Fail',
};
exports.hasNotRefreshToken = {
    [constants_1.COUNTRY.ko]: '인증이 만료되었습니다 다시 로그인해주세요',
    [constants_1.COUNTRY.en]: 'You dont have permission Please log in',
};
exports.deviceTypeInjectFail = {
    [constants_1.COUNTRY.ko]: '유저 기기 정보를 가져오는데 실패했습니다',
    [constants_1.COUNTRY.en]: 'Failed to get user device information',
};
exports.unauthorizedUser = {
    [constants_1.COUNTRY.ko]: '로그인된 유저만 접근할 수 있습니다',
    [constants_1.COUNTRY.en]: 'You dont have permission Please log in',
};
//# sourceMappingURL=users-auth.error.js.map
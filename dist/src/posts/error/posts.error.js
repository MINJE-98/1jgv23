"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notPostYouOwn = exports.isPrivatePost = exports.postNotFound = void 0;
const constants_1 = require("../../../library/constants");
exports.postNotFound = {
    [constants_1.COUNTRY.ko]: '포스트를 찾지 못했습니다',
    [constants_1.COUNTRY.en]: 'Post not found',
};
exports.isPrivatePost = {
    [constants_1.COUNTRY.ko]: '비밀글 입니다',
    [constants_1.COUNTRY.en]: "It's a secret post",
};
exports.notPostYouOwn = {
    [constants_1.COUNTRY.ko]: '본인이 소유한 게시글만 수정할 수 있습니다',
    [constants_1.COUNTRY.en]: 'This is not a post you own',
};
//# sourceMappingURL=posts.error.js.map
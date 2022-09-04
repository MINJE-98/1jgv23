"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyToCommentNotFound = exports.unauthorizedComment = exports.commentNotFound = void 0;
const constants_1 = require("../../../library/constants");
exports.commentNotFound = {
    [constants_1.COUNTRY.ko]: '존재하지 않는 댓글입니다.',
    [constants_1.COUNTRY.en]: 'not found comment',
};
exports.unauthorizedComment = {
    [constants_1.COUNTRY.ko]: '수정 권한이 없는 댓글입니다.',
    [constants_1.COUNTRY.en]: `This is a comment you don't have permission to edit.`,
};
exports.replyToCommentNotFound = {
    [constants_1.COUNTRY.ko]: '존재하지 않는 댓글에는 답글을 달 수 없습니다.',
    [constants_1.COUNTRY.en]: 'You cannot reply to comments that do not exist.',
};
//# sourceMappingURL=comments.error.js.map
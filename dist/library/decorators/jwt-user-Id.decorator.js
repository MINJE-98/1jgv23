"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtUserId = void 0;
const common_1 = require("@nestjs/common");
exports.JwtUserId = (0, common_1.createParamDecorator)((_, ctx) => {
    var _a;
    const request = ctx.switchToHttp().getRequest();
    const tokenPayload = request.user;
    return { userId: (_a = tokenPayload.userId) !== null && _a !== void 0 ? _a : null };
});
//# sourceMappingURL=jwt-user-Id.decorator.js.map
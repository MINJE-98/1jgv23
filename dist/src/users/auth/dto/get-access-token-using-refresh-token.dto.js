"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccessTokenUsingRefreshTokenResponse = void 0;
const openapi = require("@nestjs/swagger");
class GetAccessTokenUsingRefreshTokenResponse {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { accessToken: { required: true, type: () => String } };
    }
}
exports.GetAccessTokenUsingRefreshTokenResponse = GetAccessTokenUsingRefreshTokenResponse;
//# sourceMappingURL=get-access-token-using-refresh-token.dto.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageResponseDto = void 0;
const openapi = require("@nestjs/swagger");
class UploadImageResponseDto {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { path: { required: true, type: () => String } };
    }
}
exports.UploadImageResponseDto = UploadImageResponseDto;
//# sourceMappingURL=upload-image.dto.js.map
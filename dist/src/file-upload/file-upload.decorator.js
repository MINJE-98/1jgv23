"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFileUpload = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_access_token_guard_1 = require("../../library/guards/auth/jwt-access-token.guard");
const upload_image_dto_1 = require("./dto/upload-image.dto");
const ImageFileUpload = () => (0, common_1.applyDecorators)((0, common_1.Post)('file/image'), (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, jwt_access_token_guard_1.JwtAccessTokenGuard)(), (0, swagger_1.ApiTags)('File Upload'), (0, swagger_1.ApiOperation)({
    summary: '이미지를 업로드 합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '파일 업로드 성공',
    type: upload_image_dto_1.UploadImageResponseDto,
}));
exports.ImageFileUpload = ImageFileUpload;
//# sourceMappingURL=file-upload.decorator.js.map
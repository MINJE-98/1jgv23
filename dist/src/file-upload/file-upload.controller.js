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
exports.FileUploadController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const file_upload_service_1 = require("./file-upload.service");
const jwt_user_Id_decorator_1 = require("../../library/decorators/jwt-user-Id.decorator");
const users_auth_error_1 = require("../users/auth/error/users-auth.error");
const upload_image_dto_1 = require("./dto/upload-image.dto");
const file_upload_decorator_1 = require("./file-upload.decorator");
let FileUploadController = class FileUploadController {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    async uploadImage(file, { userId }) {
        if (!userId)
            throw new common_1.UnauthorizedException(users_auth_error_1.decodeAccessTokenFail);
        const result = await this.fileUploadService.upload({
            userId,
            fileRaw: file.buffer,
            mimeType: file.mimetype,
            fileSizeBytes: file.size,
        });
        return new upload_image_dto_1.UploadImageResponseDto({ path: result.pathUrl });
    }
};
__decorate([
    (0, file_upload_decorator_1.ImageFileUpload)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/upload-image.dto").UploadImageResponseDto }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,
    })
        .addMaxSizeValidator({
        maxSize: 1500,
    })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }))),
    __param(1, (0, jwt_user_Id_decorator_1.JwtUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "uploadImage", null);
FileUploadController = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_upload_service_1.FileUploadService])
], FileUploadController);
exports.FileUploadController = FileUploadController;
//# sourceMappingURL=file-upload.controller.js.map
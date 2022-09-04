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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../library/date");
const file_manager_aws_s3_repository_1 = require("../../library/file-manager/aws-s3/file-manager-aws-s3.repository");
const prisma_1 = require("../../library/prisma");
const file_upload_error_1 = require("./error/file-upload.error");
const file_upload_repository_1 = require("./file-upload.repository");
let FileUploadService = class FileUploadService {
    constructor(fileManager, prismaService, fileUploadRepository) {
        this.fileManager = fileManager;
        this.prismaService = prismaService;
        this.fileUploadRepository = fileUploadRepository;
    }
    generateFileNameByUserId(userId) {
        return `${userId}${Math.random().toString(36).substring(2, 15)}${(0, date_1.now)()}`;
    }
    getFileExtensionFromMimeType(mimeType) {
        var _a;
        return `${(_a = mimeType.split('/')[1]) !== null && _a !== void 0 ? _a : ''}`;
    }
    async upload({ userId, fileRaw, mimeType, fileSizeBytes, }) {
        try {
            return await this.prismaService.$transaction(async (prisma) => {
                const fileExtension = this.getFileExtensionFromMimeType(mimeType);
                const fileName = this.generateFileNameByUserId(userId);
                const fileUploadResult = await this.fileManager.save({
                    fileName: `${fileName}.${fileExtension}`,
                    fileRaw,
                    mimeType,
                });
                return this.fileUploadRepository.create({
                    prismaConnection: prisma,
                    userId,
                    pathUrl: fileUploadResult.location,
                    fileSizeBytes,
                    fileType: fileExtension,
                });
            });
        }
        catch (_) {
            throw new common_1.InternalServerErrorException(file_upload_error_1.fileUploadFail);
        }
    }
};
FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_manager_aws_s3_repository_1.FileManagerAwsS3Repository,
        prisma_1.PrismaService,
        file_upload_repository_1.FileUploadRepository])
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file-upload.service.js.map
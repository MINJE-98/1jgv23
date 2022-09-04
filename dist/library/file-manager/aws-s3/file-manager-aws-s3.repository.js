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
exports.FileManagerAwsS3Repository = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aws_sdk_1 = require("aws-sdk");
const aws_s3_error_1 = require("./error/aws-s3.error");
let FileManagerAwsS3Repository = class FileManagerAwsS3Repository {
    constructor(configService) {
        this.configService = configService;
        this.S3_BUCKET_NAME = this.configService.getOrThrow('AWS_S3_BUCKET_NAME');
        const accessKeyId = this.configService.getOrThrow('AWS_S3_ACCESS_KEY');
        const secretAccessKey = this.configService.getOrThrow('AWS_S3_KEY_SECRET');
        this.S3 = new aws_sdk_1.default.S3({ accessKeyId, secretAccessKey });
    }
    async save({ fileName, fileRaw, mimeType, }) {
        try {
            const fileUploadResult = await this.S3.upload({
                Bucket: this.S3_BUCKET_NAME,
                Key: fileName,
                Body: fileRaw,
                ACL: 'public-read',
                ContentType: mimeType,
                ContentDisposition: 'inline',
            }).promise();
            return {
                name: fileUploadResult.Key,
                location: fileUploadResult.Location,
            };
        }
        catch (error) {
            throw new common_1.BadGatewayException(aws_s3_error_1.awsFileUploadFail);
        }
    }
    async delete({ fileName }) {
        try {
            await this.S3.deleteObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: fileName,
            }).promise();
            return { name: fileName };
        }
        catch (error) {
            throw new common_1.BadGatewayException(aws_s3_error_1.awsFileDeleteFail);
        }
    }
};
FileManagerAwsS3Repository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FileManagerAwsS3Repository);
exports.FileManagerAwsS3Repository = FileManagerAwsS3Repository;
//# sourceMappingURL=file-manager-aws-s3.repository.js.map
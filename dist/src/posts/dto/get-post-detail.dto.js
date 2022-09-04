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
exports.GetPostDetailResponseDto = exports.GetPostDetailRequestQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetPostDetailRequestQueryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { postId: { required: true, type: () => BigInt } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => BigInt(value)),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], GetPostDetailRequestQueryDto.prototype, "postId", void 0);
exports.GetPostDetailRequestQueryDto = GetPostDetailRequestQueryDto;
class GetPostDetailResponseDto {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => BigInt }, title: { required: true, type: () => String }, subTitle: { required: true, type: () => Object }, thumbnailUrl: { required: true, type: () => Object }, view: { required: true, type: () => Number }, like: { required: true, type: () => Number }, content: { required: true, type: () => Object }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Object }, user: { required: true, type: () => PostDetailUserInfoItem }, category: { required: true, type: () => PostDetailCategoryItem } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], GetPostDetailResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetPostDetailResponseDto.prototype, "subTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetPostDetailResponseDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], GetPostDetailResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, nullable: true }),
    __metadata("design:type", Object)
], GetPostDetailResponseDto.prototype, "updatedAt", void 0);
exports.GetPostDetailResponseDto = GetPostDetailResponseDto;
class PostDetailUserInfoItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number }, username: { required: true, type: () => String }, avatar: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], PostDetailUserInfoItem.prototype, "avatar", void 0);
class PostDetailCategoryItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { categoryId: { required: true, type: () => Number }, name: { required: true, type: () => String } };
    }
}
//# sourceMappingURL=get-post-detail.dto.js.map
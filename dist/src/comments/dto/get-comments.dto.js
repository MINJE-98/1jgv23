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
exports.GetCommentsResponseDto = exports.GetCommentsRequestQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetCommentsRequestQueryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { postId: { required: true, type: () => BigInt }, replyTo: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => BigInt(value)),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], GetCommentsRequestQueryDto.prototype, "postId", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => BigInt(value)),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true, required: false }),
    __metadata("design:type", Object)
], GetCommentsRequestQueryDto.prototype, "replyTo", void 0);
exports.GetCommentsRequestQueryDto = GetCommentsRequestQueryDto;
class GetCommentsItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => BigInt }, content: { required: true, type: () => String, nullable: true }, replyTo: { required: true, type: () => Object }, postId: { required: true, type: () => BigInt }, createdAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Object }, user: { required: true, type: () => GetCommentsUserItem } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], GetCommentsItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetCommentsItem.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetCommentsItem.prototype, "replyTo", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], GetCommentsItem.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, nullable: true }),
    __metadata("design:type", Object)
], GetCommentsItem.prototype, "deletedAt", void 0);
class GetCommentsUserItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number }, username: { required: true, type: () => String }, avatar: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetCommentsUserItem.prototype, "avatar", void 0);
class GetCommentsResponseDto {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { list: { required: true, type: () => [GetCommentsItem] } };
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => GetCommentsItem),
    __metadata("design:type", Array)
], GetCommentsResponseDto.prototype, "list", void 0);
exports.GetCommentsResponseDto = GetCommentsResponseDto;
//# sourceMappingURL=get-comments.dto.js.map
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
exports.ModifyPostRequestBodyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ModifyPostRequestBodyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { postId: { required: true, type: () => BigInt }, categoryId: { required: true, type: () => Number }, title: { required: true, type: () => String, maxLength: 50 }, subTitle: { required: true, type: () => Object, maxLength: 50 }, thumbnailUrl: { required: true, type: () => Object, maxLength: 300 }, markdownContent: { required: true, type: () => Object }, isPrivate: { required: true, type: () => Boolean } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => BigInt(value)),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], ModifyPostRequestBodyDto.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], ModifyPostRequestBodyDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", Object)
], ModifyPostRequestBodyDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], ModifyPostRequestBodyDto.prototype, "subTitle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], ModifyPostRequestBodyDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], ModifyPostRequestBodyDto.prototype, "markdownContent", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ModifyPostRequestBodyDto.prototype, "isPrivate", void 0);
exports.ModifyPostRequestBodyDto = ModifyPostRequestBodyDto;
//# sourceMappingURL=modify-post.dto.js.map
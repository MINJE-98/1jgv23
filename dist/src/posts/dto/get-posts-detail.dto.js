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
exports.GetPostsResponseDto = exports.GetPostsRequestQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../../library/constants");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetPostsRequestQueryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { dateScope: { required: true, enum: require("../../../library/constants/constants").PostSearchDateScope }, sortScope: { required: true, enum: require("../../../library/constants/constants").PostSearchSortScope }, userId: { required: false, type: () => Number }, categoryId: { required: false, type: () => Number }, page: { required: true, type: () => Number }, maxContent: { required: true, type: () => Number, minimum: 1, maximum: 20 } };
    }
}
__decorate([
    (0, class_validator_1.IsEnum)(constants_1.PostSearchDateScope),
    __metadata("design:type", Number)
], GetPostsRequestQueryDto.prototype, "dateScope", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(constants_1.PostSearchSortScope),
    __metadata("design:type", String)
], GetPostsRequestQueryDto.prototype, "sortScope", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Object)
], GetPostsRequestQueryDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Object)
], GetPostsRequestQueryDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetPostsRequestQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Max)(20),
    (0, class_validator_1.Min)(1),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetPostsRequestQueryDto.prototype, "maxContent", void 0);
exports.GetPostsRequestQueryDto = GetPostsRequestQueryDto;
class GetPostsItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => BigInt }, title: { required: true, type: () => String }, subTitle: { required: true, type: () => Object }, thumbnailUrl: { required: true, type: () => Object }, view: { required: true, type: () => Number }, like: { required: true, type: () => Number }, private: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, user: { required: true, type: () => GetPostsUserItem }, category: { required: true, type: () => GetPostsCategoryItem } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], GetPostsItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetPostsItem.prototype, "subTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetPostsItem.prototype, "thumbnailUrl", void 0);
class GetPostsUserItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number }, username: { required: true, type: () => String }, avatar: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetPostsUserItem.prototype, "avatar", void 0);
class GetPostsCategoryItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { categoryId: { required: true, type: () => Number }, name: { required: true, type: () => String } };
    }
}
class GetPostsResponseDto {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { list: { required: true, type: () => [GetPostsItem] } };
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => GetPostsItem),
    __metadata("design:type", Array)
], GetPostsResponseDto.prototype, "list", void 0);
exports.GetPostsResponseDto = GetPostsResponseDto;
//# sourceMappingURL=get-posts-detail.dto.js.map
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
exports.GetCategoriesResponseDto = exports.GetCategoriesRequestQuery = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class GetCategoriesRequestQuery {
    static _OPENAPI_METADATA_FACTORY() {
        return { categoryName: { required: false, type: () => String } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => String(value)),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], GetCategoriesRequestQuery.prototype, "categoryName", void 0);
exports.GetCategoriesRequestQuery = GetCategoriesRequestQuery;
class GetCategoriesItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, categoryName: { required: true, type: () => String }, content: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetCategoriesItem.prototype, "content", void 0);
class GetCategoriesResponseDto {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { list: { required: true, type: () => [GetCategoriesItem] } };
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => GetCategoriesItem),
    __metadata("design:type", Array)
], GetCategoriesResponseDto.prototype, "list", void 0);
exports.GetCategoriesResponseDto = GetCategoriesResponseDto;
//# sourceMappingURL=get-categories.dto.js.map
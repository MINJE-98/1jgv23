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
exports.GetMeResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class GetMeUserSettingItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object }, content: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.settingType }),
    __metadata("design:type", Object)
], GetMeUserSettingItem.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetMeUserSettingItem.prototype, "content", void 0);
class GetMeResponseDto {
    constructor(required) {
        Object.assign(this, required);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => Number }, name: { required: true, type: () => String }, avatar: { required: true, type: () => Object }, createdAt: { required: true, type: () => Date }, settings: { required: true, type: () => [GetMeUserSettingItem] } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], GetMeResponseDto.prototype, "avatar", void 0);
exports.GetMeResponseDto = GetMeResponseDto;
//# sourceMappingURL=get-me.dto.js.map
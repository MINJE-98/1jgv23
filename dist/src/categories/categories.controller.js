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
exports.CategoriesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const categories_decorator_1 = require("./categories.decorator");
const categories_service_1 = require("./categories.service");
const get_categories_dto_1 = require("./dto/get-categories.dto");
const get_user_categories_dto_1 = require("./dto/get-user-categories.dto");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async getCategories({ categoryName }) {
        return new get_categories_dto_1.GetCategoriesResponseDto({
            list: categoryName
                ? await this.categoriesService.findCategory(categoryName)
                : await this.categoriesService.getAllCategories(),
        });
    }
    async getUsersCategories({ userId }) {
        return new get_user_categories_dto_1.GetUserCategoriesResponseDto({
            list: await this.categoriesService.getUserCategories(userId),
        });
    }
};
__decorate([
    (0, categories_decorator_1.GetCategories)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-categories.dto").GetCategoriesResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_categories_dto_1.GetCategoriesRequestQuery]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategories", null);
__decorate([
    (0, categories_decorator_1.GetUserCategories)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-user-categories.dto").GetUserCategoriesResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_categories_dto_1.GetUserCategoriesRequestQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getUsersCategories", null);
CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map
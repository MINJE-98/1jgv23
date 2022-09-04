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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const categories_repository_1 = require("./categories.repository");
const prisma_1 = require("../../library/prisma");
let CategoriesService = class CategoriesService {
    constructor(prismaService, categoriesRepository) {
        this.prismaService = prismaService;
        this.categoriesRepository = categoriesRepository;
    }
    getAllCategories() {
        return this.categoriesRepository.getAll(this.prismaService);
    }
    findCategory(categoryName) {
        return this.categoriesRepository.findAllByName({
            prismaConnection: this.prismaService,
            categoryName,
        });
    }
    getUserCategories(userId) {
        return this.categoriesRepository.getManyByUserIdGroupeByCategoryId(this.prismaService, userId);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        categories_repository_1.CategoriesRepository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserCategories = exports.GetCategories = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const get_categories_dto_1 = require("./dto/get-categories.dto");
const get_user_categories_dto_1 = require("./dto/get-user-categories.dto");
const GetCategories = () => (0, common_1.applyDecorators)((0, common_1.Get)(), (0, swagger_1.ApiTags)('Category'), (0, swagger_1.ApiOperation)({
    summary: '전체 카테고리 리스트를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '카테고리 조회 성공',
    type: get_categories_dto_1.GetCategoriesResponseDto,
}));
exports.GetCategories = GetCategories;
const GetUserCategories = () => (0, common_1.applyDecorators)((0, common_1.Get)('user'), (0, swagger_1.ApiTags)('Category'), (0, swagger_1.ApiOperation)({
    summary: '유저가 포스트를 작성할 때 사용한 카테고리 리스트를 요청합니다.',
}), (0, swagger_1.ApiOkResponse)({
    description: '유저가 사용한 카테고리 리스트 조회 완료',
    type: get_user_categories_dto_1.GetUserCategoriesResponseDto,
}));
exports.GetUserCategories = GetUserCategories;
//# sourceMappingURL=categories.decorator.js.map
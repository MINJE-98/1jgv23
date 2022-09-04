"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCode = void 0;
const get_code_dto_1 = require("./dto/get-code.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const GetCode = () => (0, common_1.applyDecorators)((0, common_1.Get)(), (0, swagger_1.ApiCreatedResponse)({
    description: '테스트 입니다.',
    type: get_code_dto_1.GetCodeResponseDto,
}));
exports.GetCode = GetCode;
//# sourceMappingURL=example-code.decorator.js.map
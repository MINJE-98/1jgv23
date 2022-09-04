"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const categories_module_1 = require("./categories/categories.module");
const comments_module_1 = require("./comments/comments.module");
const posts_module_1 = require("./posts/posts.module");
const users_module_1 = require("./users/users.module");
const all_exceptions_1 = require("../library/all-exceptions");
const constants_1 = require("../library/constants");
const validation_schema_1 = require("../environments/validation-schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `environments/.${process.env.NODE_ENV}.env`,
                validationSchema: validation_schema_1.default,
            }),
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            comments_module_1.CommentsModule,
            categories_module_1.CategoriesModule,
        ],
        controllers: [],
        providers: [
            { provide: core_1.APP_INTERCEPTOR, useClass: common_1.ClassSerializerInterceptor },
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({
                    transform: true,
                    whitelist: true,
                    forbidUnknownValues: true,
                    exceptionFactory: (errors) => {
                        var _a;
                        if (!((_a = errors[0]) === null || _a === void 0 ? void 0 : _a.constraints))
                            return new common_1.BadRequestException();
                        const firstKey = Object.keys(errors[0].constraints)[0];
                        const errorMessage = {
                            [constants_1.COUNTRY.en]: errors[0].constraints[`${firstKey}`],
                        };
                        return new common_1.BadRequestException(errorMessage);
                    },
                }),
            },
            { provide: core_1.APP_FILTER, useClass: all_exceptions_1.AllExceptionsFilter },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
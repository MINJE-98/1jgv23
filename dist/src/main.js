"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("../library/swagger");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const origin = configService
        .get('CORS_ORIGIN', '*')
        .split(',');
    const methods = configService
        .get('CORS_METHOD', 'GET,HEAD,PUT,PATCH,POST,DELETE')
        .split(',');
    const credentials = configService.get('CORS_CREDENTIALS', true);
    app.enableCors({ origin, methods, credentials });
    app.use(cookieParser());
    (0, swagger_1.swaggerDocumentBuilder)(app);
    const SERVER_PORT = configService.get('SERVER_PORT', 3000);
    await app.listen(SERVER_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map
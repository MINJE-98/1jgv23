"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocumentBuilder = void 0;
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
const config = new swagger_1.DocumentBuilder()
    .setTitle('Tilog-v2')
    .setDescription('Tilog-Backend')
    .setVersion('2.0')
    .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    name: 'Authorization',
    in: 'header',
}, 'accessToken')
    .build();
const swaggerDocumentBuilder = (app) => {
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    if (process.env.NODE_ENV === 'local') {
        fs.writeFileSync('library/swagger/openapi-spec.json', JSON.stringify(document));
    }
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
};
exports.swaggerDocumentBuilder = swaggerDocumentBuilder;
//# sourceMappingURL=swagger-document-builder.js.map
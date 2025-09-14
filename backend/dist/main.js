"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Sales Dashboard API')
        .setDescription('API documentation for Sales Dashboard assessment')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3001;
    app.enableCors({
        origin: process.env.CORS_ORIGIN || '*',
    });
    await app.listen(port);
    console.log(`🚀 Backend running on http://localhost:${port}`);
    console.log(`📖 Swagger docs on http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map
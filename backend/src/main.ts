import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Sales Dashboard API')
    .setDescription('API documentation for Sales Dashboard assessment')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // ✅ Use dynamic PORT from environment (fallback to 3001 for local dev)
  const port = process.env.PORT || 3001;

  // ✅ Allow frontend domain
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
  });

  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}`);
  console.log(`📖 Swagger docs on http://localhost:${port}/api/docs`);
}
bootstrap();

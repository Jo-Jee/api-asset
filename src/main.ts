import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup(
    'doc',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('api-asset')
        .setDescription('자산관리 API')
        .setVersion('1.0.0')
        .build(),
    ),
  );

  await app.listen(3000);
}
bootstrap();

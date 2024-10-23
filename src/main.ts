import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

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

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(8080);
}
bootstrap();

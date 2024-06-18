import { NestFactory } from '@nestjs/core';
import { Partner1Module } from './partner1.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(Partner1Module);
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
  await app.listen(3000);
}
bootstrap();

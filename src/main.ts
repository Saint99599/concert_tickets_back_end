import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  // เปิดใช้งาน CORS ด้วย options ที่กำหนด
  app.enableCors();

  await app.listen(4000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://127.0.0.1:5500',
  });
  app.use('/file', express.static(join(__dirname, '..', 'public')));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

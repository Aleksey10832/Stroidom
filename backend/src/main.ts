import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/', // URL-префикс для доступа к файлам
  });
  app.enableCors({
    origin: 'http://127.0.0.1:5500'
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

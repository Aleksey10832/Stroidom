import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { CatController } from './cat/cat.controller';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  configure(biba) {
    biba.apply(LoggerMiddleware).forRoutes(CatController);
  }
}

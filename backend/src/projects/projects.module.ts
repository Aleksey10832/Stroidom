import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from 'src/prisma';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './public/uploads/projects', // Куда сохранять файлы
        filename: (req, file, cb) => {
          const ext = path.extname(file.originalname); // Получаем расширение файла
          cb(null, `${uuidv4()}${ext}`); // Генерируем уникальное имя
        },
      }),
      fileFilter: (req, file, cb) => { // Фильтр типов файлов
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        allowedTypes.includes(file.mimetype) 
          ? cb(null, true) // Разрешаем загрузку
          : cb(new Error('Invalid file type'), false); // Блокируем
      },
      limits: { fileSize: 5 * 1024 * 1024 } // Лимит 5MB
    })
  ],
  providers: [ProjectsService, PrismaService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}

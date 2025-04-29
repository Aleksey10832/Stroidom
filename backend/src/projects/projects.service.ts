import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project-dto';
import { count } from 'console';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async getPaginatedProjects(page: number) {
    const skip = page ? (page - 1) * 3 : 0;
    return this.prisma.project.findMany({
      skip,
      take: 3,
      orderBy: { id: 'asc' },
      include: { images: true }
    });
  }

  async createProject(projectDto: CreateProjectDto, files: Express.Multer.File[]) {
    const images = files.map(file => ({
      path: `/uploads/projects/${file.filename}`,
      filename: file.filename,
      originalName: file.originalname
    }));

    return this.prisma.project.create({
      data: {
        name: projectDto.name,
        description: projectDto.description,
        images: {
          create: images
        }
      },
      include: {
        images: true
      }
    });
  }
  async getCount(){
    const count = await this.prisma.project.count()
    return {count: count}
  }
  async deleteAllProjects(){
    return await this.prisma.project.deleteMany()
  }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project-dto';
import * as fs from 'fs/promises';
import { join } from 'path';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}
  async getPaginatedProjects(page: number) {
    const skip = page ? (page - 1) * 3 : 0;
    return this.prisma.project.findMany({
      skip,
      take: 3,
      orderBy: { id: 'asc' },
      include: { images: true },
    });
  }

  async getProjectById(id: number) {
    return await this.prisma.project.findUnique({
      where: {
        id,
      },
      include: { images: true },
    });
  }
  async getLastProjects(){
    return await this.prisma.project.findMany({
      take: 6,
      include: { images: true }
    })
  }
  async createProject(
    projectDto: CreateProjectDto,
    files: Express.Multer.File[],
  ) {
    const boba = await this.prisma.project.create({
      data: {
        name: projectDto.name,
        description: projectDto.description,
      },
    });
    const filesList = files.map((el) => ({
      originalName: el.originalname,
      path: el.path,
      fileName: el.filename,
      projectId: boba.id,
    }));
    await this.prisma.image.createMany({
      data: filesList,
    });
    return boba;
  }
  async getCount() {
    const count = await this.prisma.project.count();
    return { count: count };
  }
  async deleteAllProjects() {
    const fileNames = await this.prisma.image.findMany();
    for (const el of fileNames) {
      await fs.rm(join(__dirname, '../..', `public/${el.fileName}`));
    }
    await this.prisma.image.deleteMany();
    return await this.prisma.project.deleteMany();
  }
  async deleteProjectById(id: number) {
    const fileNames = await this.prisma.image.findMany({
      where: { projectId: id },
    });
    for (const el of fileNames) {
      await fs.rm(join(__dirname, '../..', `public/${el.fileName}`));
    }
    await this.prisma.image.deleteMany({
      where: { projectId: id },
    });
    return await this.prisma.project.delete({
      where: { id: id },
    });
  }
}

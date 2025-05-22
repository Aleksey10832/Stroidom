import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  UseInterceptors,
  UploadedFiles,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project-dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  async getProjects(@Query('page') page: number, @Query('id') id: string, @Query('random') random: string) {
    if(random){
      return await this.projectService.getLastProjects()
    }
    else if (id) {
      return await this.projectService.getProjectById(+id);
    } else if (page) {
      return await this.projectService.getPaginatedProjects(page);
    } else {
      return await this.projectService.getCount();
    }
  }

  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 4, {
      storage: diskStorage({
        destination: 'public',
        filename: (res, file, cd) => {
          cd(null, randomUUID() + file.originalname);
        },
      }),
    }),
  )
  async createProject(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createProjectDto: CreateProjectDto,
  ) {
    return await this.projectService.createProject(createProjectDto, files);
  }
  @Delete()
  async deleteProject(@Query('id') projectId: string, @Query('imgs') imgs: string) {
    if (projectId) {
      return await this.projectService.deleteProjectById(+projectId);
    }
    return await this.projectService.deleteAllProjects(imgs);
  }
}

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project-dto';
export declare class ProjectsController {
    private readonly projectService;
    constructor(projectService: ProjectsService);
    getProjects(page: number): Promise<({
        images: {
            id: number;
            path: string;
            filename: string;
            originalName: string;
            projectId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    })[] | {
        count: number;
    }>;
    createProject(files: Express.Multer.File[], createProjectDto: CreateProjectDto): Promise<{
        images: {
            id: number;
            path: string;
            filename: string;
            originalName: string;
            projectId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    }>;
    deleteProject(): Promise<import("generated/prisma").Prisma.BatchPayload>;
}

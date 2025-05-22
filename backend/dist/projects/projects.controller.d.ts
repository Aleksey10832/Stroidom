import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project-dto';
export declare class ProjectsController {
    private readonly projectService;
    constructor(projectService: ProjectsService);
    getProjects(page: number, id: string, random: string): Promise<({
        images: {
            id: number;
            path: string;
            originalName: string;
            fileName: string;
            projectId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    })[] | ({
        images: {
            id: number;
            path: string;
            originalName: string;
            fileName: string;
            projectId: number | null;
        }[];
    } & {
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    }) | {
        count: number;
    } | null>;
    createProject(files: Express.Multer.File[], createProjectDto: CreateProjectDto): Promise<{
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    }>;
    deleteProject(projectId: string, imgs: string): Promise<{
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    } | import("generated/prisma").Prisma.BatchPayload>;
}

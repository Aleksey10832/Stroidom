import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project-dto';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    getPaginatedProjects(page: number): Promise<({
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
    })[]>;
    createProject(projectDto: CreateProjectDto, files: Express.Multer.File[]): Promise<{
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
    getCount(): Promise<{
        count: number;
    }>;
    deleteAllProjects(): Promise<import("generated/prisma").Prisma.BatchPayload>;
}

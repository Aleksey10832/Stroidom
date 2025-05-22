import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project-dto';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    getPaginatedProjects(page: number): Promise<({
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
    })[]>;
    getProjectById(id: number): Promise<({
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
    }) | null>;
    getLastProjects(): Promise<({
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
    })[]>;
    createProject(projectDto: CreateProjectDto, files: Express.Multer.File[]): Promise<{
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    }>;
    getCount(): Promise<{
        count: number;
    }>;
    deleteAllProjects(imgs: string): Promise<import("generated/prisma").Prisma.BatchPayload>;
    deleteProjectById(id: number): Promise<{
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
    }>;
}

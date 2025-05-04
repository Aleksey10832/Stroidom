"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const fs = require("fs/promises");
const path_1 = require("path");
let ProjectsService = class ProjectsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPaginatedProjects(page) {
        const skip = page ? (page - 1) * 3 : 0;
        return this.prisma.project.findMany({
            skip,
            take: 3,
            orderBy: { id: 'asc' },
            include: { images: true },
        });
    }
    async getProjectById(id) {
        return await this.prisma.project.findUnique({
            where: {
                id,
            },
            include: { images: true },
        });
    }
    async createProject(projectDto, files) {
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
            await fs.rm((0, path_1.join)(__dirname, '../..', `public/${el.fileName}`));
        }
        await this.prisma.image.deleteMany();
        return await this.prisma.project.deleteMany();
    }
    async deleteProjectById(id) {
        const fileNames = await this.prisma.image.findMany({
            where: { projectId: id },
        });
        for (const el of fileNames) {
            await fs.rm((0, path_1.join)(__dirname, '../..', `public/${el.fileName}`));
        }
        await this.prisma.image.deleteMany({
            where: { projectId: id },
        });
        return await this.prisma.project.delete({
            where: { id: id },
        });
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map
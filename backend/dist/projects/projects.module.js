"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const projects_controller_1 = require("./projects.controller");
const prisma_1 = require("../prisma");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path = require("path");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: './public/uploads/projects',
                    filename: (req, file, cb) => {
                        const ext = path.extname(file.originalname);
                        cb(null, `${(0, uuid_1.v4)()}${ext}`);
                    },
                }),
                fileFilter: (req, file, cb) => {
                    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
                    allowedTypes.includes(file.mimetype)
                        ? cb(null, true)
                        : cb(new Error('Invalid file type'), false);
                },
                limits: { fileSize: 5 * 1024 * 1024 }
            })
        ],
        providers: [projects_service_1.ProjectsService, prisma_1.PrismaService],
        controllers: [projects_controller_1.ProjectsController]
    })
], ProjectsModule);
//# sourceMappingURL=projects.module.js.map
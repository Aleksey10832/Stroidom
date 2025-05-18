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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_1 = require("../prisma");
let UserService = class UserService {
    _prismaService;
    constructor(_prismaService) {
        this._prismaService = _prismaService;
    }
    async getUserByLogin(login) {
        return await this._prismaService.user.findUnique({
            where: { login: login },
        });
    }
    async createUser(user) {
        try {
            return await this._prismaService.user.create({
                data: {
                    login: user.login,
                    password: await bcrypt.hash(user.password, await bcrypt.genSalt()),
                    name: user.name,
                    lastName: user.lastName,
                },
            });
        }
        catch (err) {
            if (err.code == 'P2002') {
                return { error: 'Пользователь с таким логином уже существует' };
            }
            else {
                return { error: 'ошибка сервера или данные были неверно заполненны' };
            }
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map
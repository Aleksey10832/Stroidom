import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma';
import { CreateUserDto } from './dto/userDto';

@Injectable()
export class UserService {
  constructor(private readonly _prismaService: PrismaService) {}
  public async getUserByLogin(login: string) {
    return await this._prismaService.user.findUnique({
      where: { login: login },
    });
  }
  public async createUser(user: CreateUserDto) {
    try {
      return await this._prismaService.user.create({
        data: {
          login: user.login,
          password: await bcrypt.hash(user.password, await bcrypt.genSalt()),
          name: user.name,
          lastName: user.lastName,
        },
      });
    } catch (err) {
      if (err.code == 'P2002') {
        return { error: 'Пользователь с таким логином уже существует' };
      } else {
        return { error: 'ошибка сервера или данные были неверно заполненны' };
      }
    }
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
  ) {}
  public async singUp(login: string, password: string) {
    const user = await this._userService.getUserByLogin(login);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Логин или пароль не верен');
    }
    return { acces_token: await this._jwtService.signAsync({ login: login, id: user.id, lastName: user.lastName, name: user.name }) };
  }
}

import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dto/userDto';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService, private readonly _jwtService: JwtService) {}
  @Get()
  async getUsers(@Query('login') login: string) {
    if (login) {
      return await this._userService.getUserByLogin(login);
    } else {
      return { boba: 1 };
    }
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req: Request) {
    return await this._jwtService.verifyAsync(req.headers['authorization'].split(' ')[1]);
  }
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this._userService.createUser(user);
  }
}

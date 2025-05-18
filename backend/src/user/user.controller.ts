import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dto/userDto';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}
  @Get()
  async getUsers(@Query('login') login: string) {
    if (login) {
      return await this._userService.getUserByLogin(login);
    } else {
      return { boba: 1 };
    }
  }
  @UseGuards(AuthGuard)
  @Get('biba')
  getBiba() {
    return 'biba';
  }
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this._userService.createUser(user);
  }
}

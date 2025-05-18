import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
  @Post()
  async singUp(@Body() user: { login: string; password: string }) {
    return await this._authService.singUp(user.login, user.password);
  }
}

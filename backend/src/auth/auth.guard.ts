import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly _jwtService: JwtService) {}
  private getToken(req: Request): undefined | string {
    if (req.headers['authorization']) {
      const [type, token] = req.headers['authorization'].split(' ');
      return type == 'Bearer' ? token : undefined;
    } else {
      return undefined;
    }
  }
  async canActivate(context: ExecutionContext) {
    const request: Request = await context.switchToHttp().getRequest();
    const token = this.getToken(request);
    if (!token) {
      throw new UnauthorizedException('Токен не предоставлен');
    }
    try {
      await this._jwtService.verifyAsync(token);
    } catch (err) {
      if (err.name == 'TokenExpiredError') {
        throw new UnauthorizedException('Истёк срок действия токена');
      }
      throw new UnauthorizedException('Токен не верен');
    }
    return true;
  }
}

import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class AuthGuard implements CanActivate {
    private readonly _jwtService;
    constructor(_jwtService: JwtService);
    private getToken;
    canActivate(context: ExecutionContext): Promise<boolean>;
}

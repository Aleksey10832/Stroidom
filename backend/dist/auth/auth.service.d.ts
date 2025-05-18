import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly _userService;
    private readonly _jwtService;
    constructor(_userService: UserService, _jwtService: JwtService);
    singUp(login: string, password: string): Promise<{
        acces_token: string;
    }>;
}

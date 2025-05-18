import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    singUp(user: {
        login: string;
        password: string;
    }): Promise<{
        acces_token: string;
    }>;
}

import { UserService } from './user.service';
import { CreateUserDto } from './dto/userDto';
import { JwtService } from '@nestjs/jwt';
export declare class UserController {
    private readonly _userService;
    private readonly _jwtService;
    constructor(_userService: UserService, _jwtService: JwtService);
    getUsers(login: string): Promise<{
        id: string;
        name: string;
        lastName: string;
        password: string;
        login: string;
    } | {
        boba: number;
    } | null>;
    getProfile(req: Request): Promise<any>;
    createUser(user: CreateUserDto): Promise<{
        id: string;
        name: string;
        lastName: string;
        password: string;
        login: string;
    } | {
        error: string;
    }>;
}

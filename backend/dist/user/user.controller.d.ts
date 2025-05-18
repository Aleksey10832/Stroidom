import { UserService } from './user.service';
import { CreateUserDto } from './dto/userDto';
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    getUsers(login: string): Promise<{
        id: string;
        name: string;
        lastName: string;
        password: string;
        login: string;
    } | {
        boba: number;
    } | null>;
    getBiba(): string;
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

import { PrismaService } from '../prisma';
import { CreateUserDto } from './dto/userDto';
export declare class UserService {
    private readonly _prismaService;
    constructor(_prismaService: PrismaService);
    getUserByLogin(login: string): Promise<{
        id: string;
        name: string;
        lastName: string;
        password: string;
        login: string;
    } | null>;
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

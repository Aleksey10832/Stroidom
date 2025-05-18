import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma';

@Module({
  imports: [AuthModule],
  providers: [UserService, JwtService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}

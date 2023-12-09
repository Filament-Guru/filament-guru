import { Module } from '@nestjs/common';
import { PrismaClientUsersModule } from '@filament-guru/prisma-client-users';
import { UserService } from './user/user.service';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaClientUsersModule],
})
export class DataAccessUsersModule {}

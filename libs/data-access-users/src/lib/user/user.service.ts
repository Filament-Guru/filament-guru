import { Injectable } from '@nestjs/common';
import { PrismaService } from '@filament-guru/prisma-client-users';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(userData: { name?: string; email: string }) {}
}

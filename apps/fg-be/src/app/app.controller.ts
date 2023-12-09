import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from '@filament-guru/data-access-users';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async createUser(@Body() userData: { name?: string; email: string }) {
    const { name, email } = userData;
    return this.userService.createUser({
      name,
      email,
    });
  }
}

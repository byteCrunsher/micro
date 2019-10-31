import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'find' })
  async find(data: string): Promise<any[]> {
    return this.usersService.find();
  }
}

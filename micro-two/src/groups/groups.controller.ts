import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { GroupsService } from './groups.service';

@Controller()
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @MessagePattern({ cmd: 'find' })
  async find(data: string): Promise<any[]> {
    return this.groupsService.find();
  }
}

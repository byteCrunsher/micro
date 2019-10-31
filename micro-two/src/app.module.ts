import { Module } from '@nestjs/common';

import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [GroupsModule],
})
export class AppModule {}

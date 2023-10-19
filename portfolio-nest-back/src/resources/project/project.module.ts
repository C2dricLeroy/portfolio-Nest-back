import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import ProjectService from './project.service';

@Module({
  controllers: [],
  providers: [ProjectController],
  exports: [ProjectService],
})
export default class ProjectModule {}

import { Controller, Get } from '@nestjs/common';
import { ContactService } from '../contact/contact.service';
import ProjectService from './project.service';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/')
  async getProjects() {
    return await this.projectService.getProjects();
  }
}

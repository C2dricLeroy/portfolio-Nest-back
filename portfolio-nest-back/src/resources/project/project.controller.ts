import { Controller, Get } from '@nestjs/common';
import { ContactService } from '../contact/contact.service';
import ProjectService from './project.service';

@Controller('/api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/getAll')
  async getProjects() {
    return await this.projectService.getProjects();
  }

  @Get('/:id')
  async getProjectById(id: string) {
    return await this.projectService.getProjectById(id);
  }
}

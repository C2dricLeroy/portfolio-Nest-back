import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectStatusService } from './project-status.service';
import { CreateProjectStatusDto } from './dto/create-project-status.dto';
import { UpdateProjectStatusDto } from './dto/update-project-status.dto';

@Controller('project-status')
export class ProjectStatusController {
  constructor(private readonly projectStatusService: ProjectStatusService) {}

  @Post()
  create(@Body() createProjectStatusDto: CreateProjectStatusDto) {
    return this.projectStatusService.create(createProjectStatusDto);
  }

  @Get()
  findAll() {
    return this.projectStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectStatusDto: UpdateProjectStatusDto) {
    return this.projectStatusService.update(+id, updateProjectStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectStatusService.remove(+id);
  }
}

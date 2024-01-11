import { Injectable } from '@nestjs/common';
import { CreateProjectStatusDto } from './dto/create-project-status.dto';
import { UpdateProjectStatusDto } from './dto/update-project-status.dto';

@Injectable()
export class ProjectStatusService {
  create(createProjectStatusDto: CreateProjectStatusDto) {
    return 'This action adds a new projectStatus';
  }

  findAll() {
    return `This action returns all projectStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectStatus`;
  }

  update(id: number, updateProjectStatusDto: UpdateProjectStatusDto) {
    return `This action updates a #${id} projectStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectStatus`;
  }
}
